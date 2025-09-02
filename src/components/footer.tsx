import Link from 'next/link';
import { Logo } from '@/components/icons/logo';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Empowering farmers, delivering freshness.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-gray-400 hover:text-primary"><Github /></Link>
              <Link href="#" className="text-gray-400 hover:text-primary"><Linkedin /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/listings" className="text-sm text-gray-500 hover:text-primary">Listings</Link></li>
              <li><Link href="/market-insights" className="text-sm text-gray-500 hover:text-primary">Market Insights</Link></li>
              <li><Link href="/track-order" className="text-sm text-gray-500 hover:text-primary">Track Order</Link></li>
              <li><Link href="/admin" className="text-sm text-gray-500 hover:text-primary">Admin</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-primary">Contact</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-primary">FAQ</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-500 hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-gray-500 hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Mkulima Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
