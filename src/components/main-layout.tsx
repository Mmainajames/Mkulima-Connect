import type { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
