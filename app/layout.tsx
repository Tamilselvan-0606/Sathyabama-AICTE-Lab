import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortalModal from '@/components/PortalModal';
import BackToTop from '@/components/BackToTop';
import { PortalProvider } from '@/context/PortalContext';

export const metadata: Metadata = {
  title: 'AICTE Idea Lab',
  description: 'AICTE IDEA Lab at Sathyabama Institute of Science and Technology - Innovation, Prototyping and Scientific Research.',
  icons: {
    icon: '/Images/Home/titlebar-icon.jpg',
    shortcut: '/Images/Home/titlebar-icon.jpg',
    apple: '/Images/Home/titlebar-icon.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F4F4F2] text-slate-900 font-sans flex flex-col justify-between antialiased">
        <PortalProvider>
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <PortalModal />
          <BackToTop />
        </PortalProvider>
      </body>
    </html>
  );
}
