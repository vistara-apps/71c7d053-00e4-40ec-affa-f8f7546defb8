'use client';

import { useState, useEffect } from 'react';

export function WelcomeBanner() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="glass-effect rounded-lg p-6 mb-6 animate-pulse">
        <div className="h-8 bg-white/20 rounded mb-2"></div>
        <div className="h-4 bg-white/20 rounded w-3/4"></div>
      </div>
    );
  }

  const displayName = 'Trainer';

  return (
    <div className="glass-effect rounded-lg p-6 mb-6 text-center">
      <h1 className="text-3xl font-bold text-white mb-2">
        Welcome to ChronoCritters! 🐾
      </h1>
      <p className="text-white/80 text-base leading-7">
        Hey {displayName}! Ready to breed, evolve, and trade AI-generated pets on Base?
      </p>
      <div className="mt-4 flex justify-center space-x-2">
        <span className="text-2xl animate-bounce">🎮</span>
        <span className="text-2xl animate-bounce" style={{ animationDelay: '0.1s' }}>✨</span>
        <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>🚀</span>
      </div>
    </div>
  );
}
