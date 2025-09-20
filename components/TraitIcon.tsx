'use client';

import { Trait, TraitIconVariant } from '../lib/types';
import { RARITY_COLORS, RARITY_GLOWS } from '../lib/constants';

interface TraitIconProps {
  trait: Trait;
  variant: TraitIconVariant;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export function TraitIcon({ trait, variant, size = 'md', showLabel = false }: TraitIconProps) {
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  const rarityColor = RARITY_COLORS[variant];
  const rarityGlow = RARITY_GLOWS[variant];

  const getTraitEmoji = (type: string) => {
    switch (type) {
      case 'physical': return '💪';
      case 'magical': return '✨';
      case 'behavioral': return '🎭';
      case 'cosmetic': return '🎨';
      default: return '⭐';
    }
  };

  return (
    <div className={`flex flex-col items-center ${showLabel ? 'space-y-1' : ''}`}>
      <div 
        className={`
          ${sizeClasses[size]} ${rarityColor} ${rarityGlow}
          rounded-full flex items-center justify-center
          border-2 border-white/20 transition-all duration-200
          hover:scale-110 cursor-pointer
        `}
        title={`${trait.name} (${variant})`}
      >
        <span>{getTraitEmoji(trait.type)}</span>
      </div>
      
      {showLabel && (
        <div className="text-center">
          <p className="text-xs font-medium text-white truncate max-w-16">
            {trait.name}
          </p>
          <p className={`text-xs capitalize ${RARITY_COLORS[variant].split(' ')[0]}`}>
            {variant}
          </p>
        </div>
      )}
    </div>
  );
}
