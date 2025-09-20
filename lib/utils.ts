import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatXP(xp: number): string {
  if (xp >= 1000000) {
    return `${(xp / 1000000).toFixed(1)}M`;
  }
  if (xp >= 1000) {
    return `${(xp / 1000).toFixed(1)}K`;
  }
  return xp.toString();
}

export function calculateLevel(xp: number): number {
  return Math.floor(Math.sqrt(xp / 100)) + 1;
}

export function getEvolutionStage(xp: number): { stage: number; name: string } {
  if (xp >= 5000) return { stage: 5, name: 'Legendary' };
  if (xp >= 1500) return { stage: 4, name: 'Elder' };
  if (xp >= 500) return { stage: 3, name: 'Adult' };
  if (xp >= 100) return { stage: 2, name: 'Young' };
  return { stage: 1, name: 'Baby' };
}

export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  return `${Math.floor(diffInSeconds / 86400)}d ago`;
}

export function generatePetId(): string {
  return `pet_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function generateTraitId(): string {
  return `trait_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function getHappinessEmoji(happiness: number): string {
  if (happiness >= 90) return '😍';
  if (happiness >= 70) return '😊';
  if (happiness >= 50) return '😐';
  if (happiness >= 30) return '😔';
  return '😢';
}
