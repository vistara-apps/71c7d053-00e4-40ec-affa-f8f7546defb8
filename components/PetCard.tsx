'use client';

import { Pet, PetCardVariant } from '../lib/types';
import { formatXP, getEvolutionStage, getHappinessEmoji } from '../lib/utils';
import { TraitIcon } from './TraitIcon';
import { ProgressTracker } from './ProgressTracker';

interface PetCardProps {
  pet: Pet;
  variant?: PetCardVariant;
  onClick?: () => void;
}

export function PetCard({ pet, variant = 'large', onClick }: PetCardProps) {
  const evolutionStage = getEvolutionStage(pet.xp);
  const happinessEmoji = getHappinessEmoji(pet.happiness);
  
  const isSmall = variant === 'small';
  
  return (
    <div 
      className={`
        glass-effect rounded-lg p-4 pet-card-glow transition-all duration-200 cursor-pointer
        hover:scale-105 hover:shadow-lg
        ${isSmall ? 'min-h-[200px]' : 'min-h-[300px]'}
      `}
      onClick={onClick}
    >
      {/* Pet Image */}
      <div className={`
        relative mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 
        flex items-center justify-center float-animation
        ${isSmall ? 'w-16 h-16' : 'w-24 h-24'}
      `}>
        {pet.imageUrl ? (
          <img 
            src={pet.imageUrl} 
            alt={pet.name}
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <span className={`${isSmall ? 'text-2xl' : 'text-4xl'}`}>
            🐾
          </span>
        )}
        <div className="absolute -top-1 -right-1 text-lg">
          {happinessEmoji}
        </div>
      </div>

      {/* Pet Info */}
      <div className="text-center">
        <h3 className={`font-semibold text-white mb-1 ${isSmall ? 'text-lg' : 'text-xl'}`}>
          {pet.name}
        </h3>
        <p className="text-white/70 text-sm mb-2">
          {evolutionStage.name} • Level {pet.level}
        </p>
        
        {!isSmall && (
          <>
            {/* XP Progress */}
            <div className="mb-3">
              <ProgressTracker 
                current={pet.xp} 
                max={1000} 
                variant="bar"
                label={`${formatXP(pet.xp)} XP`}
              />
            </div>

            {/* Traits */}
            {pet.traits.length > 0 && (
              <div className="flex justify-center space-x-1 mb-3">
                {pet.traits.slice(0, 3).map((trait) => (
                  <TraitIcon 
                    key={trait.traitId} 
                    trait={trait} 
                    variant={trait.rarity}
                    size="sm"
                  />
                ))}
                {pet.traits.length > 3 && (
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-xs text-white">+{pet.traits.length - 3}</span>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* Action Buttons */}
        <div className={`flex ${isSmall ? 'space-x-1' : 'space-x-2'} justify-center`}>
          <button className={`
            bg-accent hover:bg-accent/90 text-white rounded-md font-medium 
            transition-colors duration-200
            ${isSmall ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-sm'}
          `}>
            Feed
          </button>
          <button className={`
            bg-primary hover:bg-primary/90 text-white rounded-md font-medium 
            transition-colors duration-200
            ${isSmall ? 'px-2 py-1 text-xs' : 'px-3 py-2 text-sm'}
          `}>
            Play
          </button>
        </div>
      </div>
    </div>
  );
}
