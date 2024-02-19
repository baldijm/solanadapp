'use client';

import { AppHero } from '../ui/ui-layout';

const links: { label: string; href: string }[] = [
  { label: 'Solana Docs', href: 'https://docs.solana.com/' },
  { label: 'Solana Faucet', href: 'https://faucet.solana.com/' },
  { label: 'Solana Cookbook', href: 'https://solanacookbook.com/' },
  { label: 'Solana Stack Overflow', href: 'https://solana.stackexchange.com/' },
  {
    label: 'Solana Developers GitHub',
    href: 'https://github.com/solana-developers/',
  },
];

export default function DashboardFeature() {
  return (
    <div className='bg-dashboard'>
            <div className="w-full h-80 relative stickyy">
              <video className="w-full h-full object-cover absolute top-0 left-0" autoPlay loop muted>
                <source src="alien.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
    </div>
  );
}
