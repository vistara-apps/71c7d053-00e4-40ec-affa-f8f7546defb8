export interface User {
  userId: string;
  telegramId: string;
  walletAddress?: string;
  ownedPets: string[];
  createdAt: Date;
}

export interface Pet {
  petId: string;
  ownerId: string;
  name: string;
  designParameters: {
    prompt: string;
    style: string;
    colors: string[];
  };
  traits: Trait[];
  currentEvolutionStage: number;
  xp: number;
  level: number;
  cosmetics: string[];
  imageUrl?: string;
  createdAt: Date;
  lastFed: Date;
  happiness: number;
}

export interface Trait {
  traitId: string;
  name: string;
  description: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  type: 'physical' | 'magical' | 'behavioral' | 'cosmetic';
  applicableToPetTypes: string[];
  value: number;
  imageUrl?: string;
}

export interface Challenge {
  challengeId: string;
  name: string;
  description: string;
  goal: number;
  currentProgress: number;
  reward: {
    type: 'xp' | 'trait' | 'cosmetic';
    value: string | number;
  };
  status: 'active' | 'completed' | 'expired';
  participants: string[];
  startDate: Date;
  endDate: Date;
}

export interface MarketplaceListing {
  listingId: string;
  sellerId: string;
  traitId: string;
  price: number;
  currency: 'ETH' | 'USDC';
  status: 'active' | 'sold' | 'cancelled';
  createdAt: Date;
}

export type PetCardVariant = 'small' | 'large';
export type TraitIconVariant = 'common' | 'rare' | 'epic' | 'legendary';
export type ActionButtonVariant = 'primary' | 'secondary' | 'disabled';
export type ProgressTrackerVariant = 'bar' | 'ring';
export type ChallengeCardVariant = 'active' | 'completed';
