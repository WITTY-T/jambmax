import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin.html'),
        notes: resolve(__dirname, 'notes.html'),
        ai: resolve(__dirname, 'Dashboard/ai.html'),
        dashboard: resolve(__dirname, 'Dashboard/dashboard.html'),
        exam: resolve(__dirname, 'Dashboard/exam.html'),
        flashcards: resolve(__dirname, 'Dashboard/flashcards.html'),
        leaderboard: resolve(__dirname, 'Dashboard/leaderboard.html'),
        pastQuestions: resolve(__dirname, 'Dashboard/past-questions.html'),
        profile: resolve(__dirname, 'Dashboard/profile.html'),
        progress: resolve(__dirname, 'Dashboard/progress.html'),
        study: resolve(__dirname, 'Dashboard/study.html')
      }
    }
  }
});
