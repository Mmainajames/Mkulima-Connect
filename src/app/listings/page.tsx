'use client';
import { useState, useMemo } from 'react';

import { MainLayout } from '@/components/main-layout';
import { produceListings } from '@/lib/placeholder-data';
import { ProduceCard } from '@/components/produce-card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ListFilter } from 'lucide-react';

const locations = [...new Set(produceListings.map(p => p.location))];
const maxPrice = Math.max(...produceListings.map(p => p.price));

export default function ListingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('all');
  const [priceRange, setPriceRange] = useState([maxPrice]);
  
  const filteredProduce = useMemo(() => {
    return produceListings.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = location === 'all' || p.location === location;
      const matchesPrice = p.price <= priceRange[0];
      return matchesSearch && matchesLocation && matchesPrice;
    });
  }, [searchTerm, location, priceRange]);
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Available Produce</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Find the freshest harvest directly from our farmers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <div className="sticky top-24 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg">
              <h3 className="text-xl font-headline font-semibold mb-6 flex items-center"><ListFilter className="mr-2 h-5 w-5"/> Filters</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="search" className="text-sm font-medium">Produce Name</label>
                  <Input 
                    id="search" 
                    placeholder="e.g. Tomatoes" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mt-2 rounded-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Location</label>
                   <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="mt-2 rounded-full">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      {locations.map(loc => <SelectItem key={loc} value={loc}>{loc}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">Max Price (KES)</label>
                  <div className="flex items-center gap-4 mt-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={maxPrice}
                      step={10}
                      className="flex-grow"
                    />
                    <span className="font-semibold text-primary w-20 text-center">{priceRange[0]}</span>
                  </div>
                </div>
                <Button 
                  className="w-full rounded-full" 
                  variant="secondary"
                  onClick={() => {
                    setSearchTerm('');
                    setLocation('all');
                    setPriceRange([maxPrice]);
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>
          </aside>

          <main className="md:col-span-3">
            {filteredProduce.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProduce.map((produce) => (
                  <ProduceCard key={produce.id} produce={produce} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-gray-500">No produce found matching your criteria.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </MainLayout>
  );
}
