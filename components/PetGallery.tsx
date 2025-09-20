'use client';

import { useState, useEffect } from 'react';
import { Pet } from '../lib/types';
import { PetCard } from './PetCard';
import { ActionButton } from './ActionButton';
import { Plus } from 'lucide-react';

// Mock data for demonstration
const mockPets: Pet[] = [
  {
    petId: 'pet_1',
    ownerId: 'user_1',
    name: 'Cosmic Whiskers',
    designParameters: {
      prompt: 'A fluffy cat with cosmic patterns and glowing eyes',
      style: 'magical',
      colors: ['purple', 'blue', 'gold']
    },
    traits: [
      {
        traitId: 'trait_1',
        name: 'Starlight Fur',
        description: 'Fur that sparkles like stars',
        rarity: 'rare',
        type: 'physical',
        applicableToPetTypes: ['cat'],
        value: 150
      }
    ],
    currentEvolutionStage: 2,
    xp: 250,
    level: 3,
    cosmetics: [],
    createdAt: new Date(),
    lastFed: new Date(),
    happiness: 85
  },
  {
    petId: 'pet_2',
    ownerId: 'user_1',
    name: 'Rainbow Scales',
    designParameters: {
      prompt: 'A playful dragon with rainbow scales',
      style: 'fantasy',
      colors: ['rainbow']
    },
    traits: [
      {
        traitId: 'trait_2',
        name: 'Fire Breath',
        description: 'Can breathe colorful flames',
        rarity: 'epic',
        type: 'magical',
        applicableToPetTypes: ['dragon'],
        value: 300
      }
    ],
    currentEvolutionStage: 1,
    xp: 75,
    level: 1,
    cosmetics: [],
    createdAt: new Date(),
    lastFed: new Date(),
    happiness: 92
  }
];

export function PetGallery() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading pets
    setTimeout(() => {
      setPets(mockPets);
      setLoading(false);
    }, 1000);
  }, []);

  const handleCreatePet = () => {
    // TODO: Navigate to pet creation screen
    console.log('Create new pet');
  };

  const handlePetClick = (pet: Pet) => {
    // TODO: Navigate to pet details screen
    console.log('Pet clicked:', pet.name);
  };

  if (loading) {
    return (
      <div className="mb-6">
        <h2 className="text-white text-xl font-semibold mb-4">Your ChronoCritters</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="glass-effect rounded-lg p-4 animate-pulse">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4"></div>
              <div className="h-4 bg-white/20 rounded mb-2"></div>
              <div className="h-3 bg-white/20 rounded w-3/4 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-xl font-semibold">Your ChronoCritters</h2>
        <ActionButton
          variant="secondary"
          size="sm"
          onClick={handleCreatePet}
        >
          <Plus className="w-4 h-4 mr-1" />
          Create
        </ActionButton>
      </div>

      {pets.length === 0 ? (
        <div className="glass-effect rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">🥚</div>
          <h3 className="text-white text-lg font-semibold mb-2">No pets yet!</h3>
          <p className="text-white/70 mb-4">Create your first ChronoCritter to get started</p>
          <ActionButton
            variant="primary"
            onClick={handleCreatePet}
          >
            Create Your First Pet
          </ActionButton>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pets.map((pet) => (
            <PetCard
              key={pet.petId}
              pet={pet}
              variant="large"
              onClick={() => handlePetClick(pet)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
