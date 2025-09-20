export const RARITY_COLORS = {
  common: 'text-gray-600 bg-gray-100',
  rare: 'text-blue-600 bg-blue-100',
  epic: 'text-purple-600 bg-purple-100',
  legendary: 'text-yellow-600 bg-yellow-100',
} as const;

export const RARITY_GLOWS = {
  common: 'trait-glow-common',
  rare: 'trait-glow-rare',
  epic: 'trait-glow-epic',
  legendary: 'shadow-yellow-500/50',
} as const;

export const PET_EVOLUTION_STAGES = [
  { stage: 1, name: 'Baby', xpRequired: 0 },
  { stage: 2, name: 'Young', xpRequired: 100 },
  { stage: 3, name: 'Adult', xpRequired: 500 },
  { stage: 4, name: 'Elder', xpRequired: 1500 },
  { stage: 5, name: 'Legendary', xpRequired: 5000 },
] as const;

export const CHALLENGE_TYPES = {
  FEEDING: 'feeding',
  PLAYING: 'playing',
  CARING: 'caring',
  COMMUNITY: 'community',
} as const;

export const DEFAULT_PET_PROMPTS = [
  'A fluffy cat with cosmic patterns and glowing eyes',
  'A playful dragon with rainbow scales',
  'A wise owl with crystal feathers',
  'A friendly fox with magical aura',
  'A cute bunny with flower crown',
] as const;
