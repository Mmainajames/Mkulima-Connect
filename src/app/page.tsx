import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MainLayout } from '@/components/main-layout';
import { produceListings } from '@/lib/placeholder-data';
import { ProduceCard } from '@/components/produce-card';
import { ArrowRight, CheckCircle, Leaf, ShoppingCart, Truck } from 'lucide-react';

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight text-primary">
                  Freshness from Farm to You
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                  Mkulima Connect bridges the gap between dedicated farmers and discerning buyers, ensuring quality, fair prices, and transparency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-full shadow-lg">
                    <Link href="/listings">
                      Browse Produce <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="rounded-full shadow-lg">
                    <Link href="/market-insights">
                      For Farmers <Leaf className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1620714223084-86c9df2c97a8?q=80&w=1287"
                  alt="A screenshot of the Mkulima Connect buyer dashboard."
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                  data-ai-hint="app screenshot"
                  priority
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 md:py-28 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">How It Works</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A simple, transparent process for buyers and farmers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6 rounded-2xl shadow-lg border-transparent hover:border-primary transition-colors">
                <CardHeader>
                  <div className="mx-auto bg-accent p-4 rounded-full w-fit">
                    <ShoppingCart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline mt-4">1. Browse & Discover</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Buyers search for fresh produce by type, location, and price. Farmers list their available harvest with all the details.</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 rounded-2xl shadow-lg border-transparent hover:border-primary transition-colors">
                <CardHeader>
                  <div className="mx-auto bg-accent p-4 rounded-full w-fit">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline mt-4">2. Negotiate & Pay</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Engage in direct, fair negotiations. Once a deal is struck, complete the transaction through our secure payment system.</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 rounded-2xl shadow-lg border-transparent hover:border-primary transition-colors">
                <CardHeader>
                  <div className="mx-auto bg-accent p-4 rounded-full w-fit">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline mt-4">3. Track & Receive</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Farmers ship the produce, and buyers can track their orders in real-time until it arrives fresh at their doorstep.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="featured-produce" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Featured Produce</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Check out some of the fresh harvests available right now.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {produceListings.slice(0, 4).map((produce) => (
                <ProduceCard key={produce.id} produce={produce} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/listings">
                  View All Listings
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 md:py-28 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">From Our Community</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Hear what farmers and buyers have to say about Mkulima Connect.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-900">
                <CardContent className="flex flex-col items-center text-center">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src="https://picsum.photos/id/431/100/100" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <p className="italic text-gray-600 dark:text-gray-300 mb-4">
                    "This platform has revolutionized how I sell my produce. The AI pricing tool helped me get the best price for my tomatoes, and I connected with new buyers instantly."
                  </p>
                  <h4 className="font-bold font-headline">Josephine K.</h4>
                  <p className="text-sm text-gray-500">Farmer, Nakuru</p>
                </CardContent>
              </Card>
              <Card className="p-6 rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-900">
                <CardContent className="flex flex-col items-center text-center">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src="https://picsum.photos/id/64/100/100" />
                    <AvatarFallback>MO</AvatarFallback>
                  </Avatar>
                  <p className="italic text-gray-600 dark:text-gray-300 mb-4">
                    "Finding high-quality, fresh produce for my restaurant used to be a challenge. Now, I can source directly from farmers and track my delivery. The quality is unmatched!"
                  </p>
                  <h4 className="font-bold font-headline">Michael O.</h4>
                  <p className="text-sm text-gray-500">Restaurant Owner, Nairobi</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
