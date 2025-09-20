import { WelcomeBanner } from '../components/WelcomeBanner';
import { PetGallery } from '../components/PetGallery';
import { CommunitySection } from '../components/CommunitySection';
import { Navigation } from '../components/Navigation';

export default function HomePage() {
  return (
    <main className="min-h-screen gradient-bg">
      <div className="max-w-xl mx-auto px-4 py-6">
        <WelcomeBanner />
        <PetGallery />
        <CommunitySection />
        <Navigation />
      </div>
    </main>
  );
}
