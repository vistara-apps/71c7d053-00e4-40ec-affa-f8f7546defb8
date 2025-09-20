'use client';

import { Challenge, ChallengeCardVariant } from '../lib/types';
import { ProgressTracker } from './ProgressTracker';
import { ActionButton } from './ActionButton';

interface ChallengeCardProps {
  challenge: Challenge;
  variant: ChallengeCardVariant;
  onParticipate?: () => void;
}

export function ChallengeCard({ challenge, variant, onParticipate }: ChallengeCardProps) {
  const isCompleted = variant === 'completed';
  const progressPercentage = (challenge.currentProgress / challenge.goal) * 100;

  const getChallengeEmoji = (name: string) => {
    if (name.toLowerCase().includes('feed')) return '🍎';
    if (name.toLowerCase().includes('play')) return '🎾';
    if (name.toLowerCase().includes('care')) return '💝';
    return '🏆';
  };

  return (
    <div className={`
      glass-effect rounded-lg p-4 transition-all duration-200
      ${isCompleted ? 'opacity-75' : 'hover:scale-105'}
    `}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{getChallengeEmoji(challenge.name)}</span>
          <div>
            <h3 className="text-white font-semibold text-lg">{challenge.name}</h3>
            <p className="text-white/70 text-sm">{challenge.description}</p>
          </div>
        </div>
        {isCompleted && (
          <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            ✓ Complete
          </div>
        )}
      </div>

      <div className="mb-4">
        <ProgressTracker
          current={challenge.currentProgress}
          max={challenge.goal}
          variant="bar"
          label={`Progress: ${challenge.currentProgress}/${challenge.goal}`}
          color={isCompleted ? 'bg-green-500' : 'bg-accent'}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-white/80 text-sm">
          <span className="font-medium">{challenge.participants.length}</span> participants
        </div>
        
        {!isCompleted && (
          <ActionButton
            variant="primary"
            size="sm"
            onClick={onParticipate}
          >
            Participate
          </ActionButton>
        )}
        
        {isCompleted && (
          <div className="text-green-400 text-sm font-medium">
            Reward: {challenge.reward.type === 'xp' ? `${challenge.reward.value} XP` : challenge.reward.value}
          </div>
        )}
      </div>
    </div>
  );
}
