const payment = {
    // Replace with your Paystack public key
    PAYSTACK_KEY: 'pk_test_your_key_here',
    FLUTTERWAVE_KEY: 'FLWPUBK_TEST-your_key_here-X',
    
    plans: {
        weekly: { name: 'Weekly', price: 1000, duration: 7, code: 'PLN_weekly' },
        biweekly: { name: '2 Weeks', price: 1500, duration: 14, code: 'PLN_biweekly' },
        monthly: { name: 'Monthly', price: 3000, duration: 30, code: 'PLN_monthly' }
    },
    
    init() {
        // Load Paystack script dynamically
        if (!document.getElementById('paystack-script')) {
            const script = document.createElement('script');
            script.id = 'paystack-script';
            script.src = 'https://js.paystack.co/v1/inline.js';
            document.head.appendChild(script);
        }
    },
    
    async payWithPaystack(plan) {
        const user = await db.getUser();
        const planData = this.plans[plan];
        
        if (!planData) {
            app.showToast('Invalid plan selected', 'error');
            return;
        }
        
        const handler = PaystackPop.setup({
            key: this.PAYSTACK_KEY,
            email: auth.currentUser?.email || user.email || 'guest@jambmax.com',
            amount: planData.price * 100, // Paystack uses kobo
            currency: 'NGN',
            ref: 'JAMBMAX_' + Date.now(),
            metadata: {
                userId: auth.currentUser?.uid || 'guest',
                plan: plan,
                custom_fields: [
                    {
                        display_name: "Plan",
                        variable_name: "plan",
                        value: planData.name
                    }
                ]
            },
            callback: (response) => {
                this.verifyPayment(response.reference, plan);
            },
            onClose: () => {
                app.showToast('Payment window closed', 'error');
            }
        });
        
        handler.openIframe();
    },
    
    async payWithFlutterwave(plan) {
        const planData = this.plans[plan];
        
        FlutterwaveCheckout({
            public_key: this.FLUTTERWAVE_KEY,
            tx_ref: 'JAMBMAX_' + Date.now(),
            amount: planData.price,
            currency: 'NGN',
            payment_options: 'card, banktransfer, ussd',
            meta: {
                user_id: auth.currentUser?.uid,
                plan: plan
            },
            customer: {
                email: auth.currentUser?.email || 'guest@jambmax.com',
                phone_number: '',
                name: auth.currentUser?.displayName || 'Guest'
            },
            customizations: {
                title: 'JAMB MAX Premium',
                description: `Payment for ${planData.name} plan`,
                logo: 'https://your-domain.com/icons/icon-192x192.png'
            },
            callback: (response) => {
                if (response.status === 'successful') {
                    this.activatePremium(plan);
                }
            },
            onclose: () => {
                app.showToast('Payment window closed', 'error');
            }
        });
    },
    
    async verifyPayment(reference, plan) {
        app.showToast('Verifying payment...', 'success');
        
        // In production, verify on your backend
        // For now, activate immediately (demo mode)
        setTimeout(() => {
            this.activatePremium(plan);
        }, 2000);
    },
    
    async activatePremium(plan) {
        const user = await db.getUser();
        const planData = this.plans[plan];
        
        user.premium = true;
        user.premiumPlan = plan;
        user.premiumExpiry = Date.now() + (planData.duration * 24 * 60 * 60 * 1000);
        user.premiumActivated = new Date().toISOString();
        
        await db.saveUser(user);
        
        // Sync to cloud
        if (navigator.onLine && auth.currentUser) {
            await firebase.firestore().collection('users').doc(auth.currentUser.uid).update({
                premium: true,
                premiumPlan: plan,
                premiumExpiry: user.premiumExpiry,
                premiumActivated: user.premiumActivated
            });
        }
        
        app.showToast(`🎉 Premium activated! Enjoy ${planData.name} access.`, 'success');
        app.loadProfile();
        
        // Trigger confetti effect
        this.celebrate();
    },
    
    async checkPremiumStatus() {
        const user = await db.getUser();
        
        if (user.premium && user.premiumExpiry) {
            if (Date.now() > user.premiumExpiry) {
                // Premium expired
                user.premium = false;
                user.premiumPlan = null;
                await db.saveUser(user);
                app.showToast('Your premium subscription has expired.', 'error');
                return false;
            }
            return true;
        }
        return false;
    },
    
    celebrate() {
        // Simple CSS celebration
        const colors = ['#ffd700', '#64ffda', '#ff5555', '#ff9f43'];
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const dot = document.createElement('div');
                dot.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    border-radius: 50%;
                    left: ${Math.random() * 100}vw;
                    top: -10px;
                    z-index: 9999;
                    animation: fall ${1 + Math.random()}s linear forwards;
                `;
                document.body.appendChild(dot);
                setTimeout(() => dot.remove(), 2000);
            }, i * 50);
        }
        
        // Add animation style if not present
        if (!document.getElementById('confetti-style')) {
            const style = document.createElement('style');
            style.id = 'confetti-style';
            style.textContent = `
                @keyframes fall {
                    to { transform: translateY(100vh) rotate(360deg); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    },
    
    showPricingModal() {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.id = 'pricingModal';
        modal.innerHTML = `
            <div class="modal" style="max-width: 600px;">
                <button class="close-modal" onclick="document.getElementById('pricingModal').remove()">×</button>
                <h2>Upgrade to Premium</h2>
                <p class="modal-subtitle">Unlock your full potential</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin: 2rem 0;">
                    <div class="pricing-card" style="padding: 1.5rem; text-align: center;">
                        <h3>Weekly</h3>
                        <div class="price" style="font-size: 2rem;">₦1,000</div>
                        <p style="color: var(--gray); font-size: 0.85rem;">7 days access</p>
                        <button class="btn btn-primary btn-full" style="margin-top: 1rem;" onclick="payment.payWithPaystack('weekly')">Choose</button>
                    </div>
                    <div class="pricing-card featured" style="padding: 1.5rem; text-align: center;">
                        <h3>2 Weeks</h3>
                        <div class="price" style="font-size: 2rem;">₦1,500</div>
                        <p style="color: var(--gray); font-size: 0.85rem;">14 days access</p>
                        <button class="btn btn-primary btn-full" style="margin-top: 1rem;" onclick="payment.payWithPaystack('biweekly')">Choose</button>
                    </div>
                    <div class="pricing-card" style="padding: 1.5rem; text-align: center;">
                        <h3>Monthly</h3>
                        <div class="price" style="font-size: 2rem;">₦3,000</div>
                        <p style="color: var(--gray); font-size: 0.85rem;">30 days access</p>
                        <button class="btn btn-primary btn-full" style="margin-top: 1rem;" onclick="payment.payWithPaystack('monthly')">Choose</button>
                    </div>
                </div>
                
                <p style="text-align: center; color: var(--gray); font-size: 0.85rem;">
                    🔒 Secure payment powered by Paystack
                </p>
            </div>
        `;
        document.body.appendChild(modal);
    }
};