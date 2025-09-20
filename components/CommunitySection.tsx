'use client';

import { useState, useEffect } from 'react';
import { Challenge } from '../lib/types';
import { ChallengeCard } from './ChallengeCard';

// Mock data for demonstration
const mockChallenges: Challenge[] = [
  {
    challengeId: 'challenge_1',
    name: 'Community Care Challenge',
    description: 'Feed 1000 virtual meals collectively',
    goal: 1000,
    currentProgress: 750,
    reward: {
      type: 'trait',
      value: 'Golden Heart'
    },
    status: 'active',
    participants: ['user_1', 'user_2', 'user_3'],
    startDate: new Date(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  },
  {
    challengeId: 'challenge_2',
    name: 'Play Time Marathon',
    description: 'Play with pets 500 times as a community',
    goal: 500,
    currentProgress: 500,
    reward: {
      type: 'xp',
      value: 100
    },
    status: 'completed',
    participants: ['user_1', 'user_2', 'user_3', 'user_4'],
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    endDate: new Date()
  }
];

export function CommunitySection() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading challenges
    setTimeout(() => {
      setChallenges(mockChallenges);
      setLoading(false);
    }, 800);
  }, []);

  const handleParticipate = (challengeId: string) => {
    // TODO: Implement challenge participation
    console.log('Participating in challenge:', challengeId);
  };

  if (loading) {
    return (
      <div className="mb-6">
        <h2 className="text-white text-xl font-semibold mb-4">Community Challenges</h2>
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="glass-effect rounded-lg p-4 animate-pulse">
              <div className="h-6 bg-white/20 rounded mb-2"></div>
              <div className="h-4 bg-white/20 rounded w-3/4 mb-4"></div>
              <div className="h-2 bg-white/20 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const activeChallenges = challenges.filter(c => c.status === 'active');
  const completedChallenges = challenges.filter(c => c.status === 'completed');

  return (
    <div className="mb-6">
      <h2 className="text-white text-xl font-semibold mb-4">Community Challenges</h2>
      
      {/* Featured Challenge */}
      {activeChallenges.length > 0 && (
        <div className="mb-6">
          <div className="glass-effect rounded-lg p-6 text-center mb-4">
            <div className="text-6xl mb-4 float-animation">🐾</div>
            <h3 className="text-white text-2xl font-bold mb-2">Community Care Challenges</h3>
            <p className="text-white/80 text-base mb-4">
              Virtual pet care with unique AI generated traits
            </p>
            <div className="text-white/70 text-sm">
              Feed • Play • Care Challenges
            </div>
            <div className="mt-4">
              <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Feed • Play • Care Challenge
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Challenges */}
      {activeChallenges.length > 0 && (
        <div className="mb-4">
          <h3 className="text-white/90 text-lg font-medium mb-3">Active Challenges</h3>
          <div className="space-y-3">
            {activeChallenges.map((challenge) => (
              <ChallengeCard
                key={challenge.challengeId}
                challenge={challenge}
                variant="active"
                onParticipate={() => handleParticipate(challenge.challengeId)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Completed Challenges */}
      {completedChallenges.length > 0 && (
        <div>
          <h3 className="text-white/90 text-lg font-medium mb-3">Recently Completed</h3>
          <div className="space-y-3">
            {completedChallenges.map((challenge) => (
              <ChallengeCard
                key={challenge.challengeId}
                challenge={challenge}
                variant="completed"
              />
            ))}
          </div>
        </div>
      )}

      {challenges.length === 0 && (
        <div className="glass-effect rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-white text-lg font-semibold mb-2">No challenges yet!</h3>
          <p className="text-white/70">Check back soon for community challenges</p>
        </div>
      )}
    </div>
  );
}
