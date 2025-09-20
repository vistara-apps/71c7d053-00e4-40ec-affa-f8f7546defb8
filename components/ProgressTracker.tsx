'use client';

import { ProgressTrackerVariant } from '../lib/types';

interface ProgressTrackerProps {
  current: number;
  max: number;
  variant: ProgressTrackerVariant;
  label?: string;
  color?: string;
}

export function ProgressTracker({ 
  current, 
  max, 
  variant, 
  label,
  color = 'bg-accent'
}: ProgressTrackerProps) {
  const percentage = Math.min((current / max) * 100, 100);

  if (variant === 'ring') {
    const circumference = 2 * Math.PI * 45; // radius = 45
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="text-accent transition-all duration-300"
            strokeLinecap="round"
          />
        </svg>
        {label && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-sm font-medium">{label}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-white/80 text-sm">{label}</span>
          <span className="text-white/60 text-xs">{current}/{max}</span>
        </div>
      )}
      <div className="w-full bg-white/20 rounded-full h-2">
        <div 
          className={`${color} h-2 rounded-full transition-all duration-300 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
