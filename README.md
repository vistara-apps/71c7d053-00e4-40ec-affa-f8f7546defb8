# ChronoCritters - Base Mini App

Breed, Evolve, and Trade AI Pets on Base.

## Features

- **AI Pet Design Studio**: Create unique AI-generated virtual pets
- **Pet Trait & Evolution Marketplace**: Trade traits and evolutionary stages
- **Community Care Challenges**: Participate in collaborative pet care activities
- **Pet Progression & Milestones**: Watch your pets grow and evolve

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Optimism L2)
- **Wallet Integration**: MiniKit + OnchainKit
- **Styling**: Tailwind CSS
- **AI Generation**: OpenAI API
- **TypeScript**: Full type safety

## Getting Started

1. **Clone and install dependencies**:
```bash
git clone <repository-url>
cd chronocritters
npm install
```

2. **Set up environment variables**:
```bash
cp .env.example .env.local
```

Fill in your API keys:
- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Get from [OnchainKit](https://onchainkit.xyz)
- `OPENAI_API_KEY`: Get from [OpenAI](https://platform.openai.com)

3. **Run the development server**:
```bash
npm run dev
```

4. **Open in browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx           # Main homepage
├── providers.tsx      # MiniKit and OnchainKit providers
├── globals.css        # Global styles and Tailwind
├── loading.tsx        # Loading UI
└── error.tsx          # Error boundary

components/
├── WelcomeBanner.tsx   # Welcome section
├── PetCard.tsx        # Pet display component
├── PetGallery.tsx     # Pet collection display
├── TraitIcon.tsx      # Trait visualization
├── ActionButton.tsx   # Reusable button component
├── ProgressTracker.tsx # Progress bars and rings
├── ChallengeCard.tsx  # Challenge display
├── CommunitySection.tsx # Community challenges
└── Navigation.tsx     # Bottom navigation

lib/
├── types.ts           # TypeScript type definitions
├── constants.ts       # App constants
└── utils.ts           # Utility functions
```

## Key Components

### Pet System
- **Pet Creation**: AI-generated pets with unique traits
- **Evolution**: Pets evolve based on XP and care
- **Traits**: Collectible and tradeable pet attributes

### Community Features
- **Challenges**: Collaborative goals for the community
- **Marketplace**: Trade traits and pet items
- **Social Integration**: Built for Telegram Mini Apps

### Base Integration
- **Smart Contracts**: Pet and trait ownership on Base
- **Wallet Connection**: Seamless wallet integration
- **Transactions**: Gas-efficient L2 transactions

## Development

### Adding New Features

1. **Define Types**: Add interfaces to `lib/types.ts`
2. **Create Components**: Build reusable components in `components/`
3. **Add Pages**: Create new routes in `app/`
4. **Style**: Use Tailwind classes following the design system

### Design System

- **Colors**: Purple gradient theme with accent colors
- **Components**: Consistent glass-effect styling
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design approach

## Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** automatically on push to main

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For questions or support:
- Create an issue on GitHub
- Join our community Discord
- Check the documentation

---

Built with ❤️ for the Base ecosystem
