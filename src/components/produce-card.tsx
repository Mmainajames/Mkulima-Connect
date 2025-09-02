import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tag, MapPin, User, Star } from 'lucide-react';
import type { Produce } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';

type ProduceCardProps = {
  produce: Produce;
};

const qualityVariant: { [key: string]: 'default' | 'secondary' | 'destructive' } = {
  'Premium': 'default',
  'Standard': 'secondary',
  'Fair': 'destructive',
}

export function ProduceCard({ produce }: ProduceCardProps) {
  return (
    <Card className="flex flex-col rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={produce.imageUrl}
            alt={produce.name}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 hover:scale-105"
            data-ai-hint={`${produce.name} produce`}
          />
        </div>
        <div className="p-4">
          <Badge 
            variant={qualityVariant[produce.quality] || 'secondary'} 
            className="capitalize"
          >
            {produce.quality}
          </Badge>
          <CardTitle className="mt-2 font-headline text-xl">
            {produce.name}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2 text-primary" />
            <span>{produce.farmer}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <span>{produce.location}</span>
          </div>
           <div className="flex items-center">
            <Tag className="h-4 w-4 mr-2 text-primary" />
            <span>{produce.quantity} kg available</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center bg-gray-50 dark:bg-gray-900">
        <p className="text-xl font-bold text-primary">
          KES {produce.price}
          <span className="text-sm font-normal text-gray-500">/kg</span>
        </p>
        <Button asChild className="rounded-full">
          <Link href="#">View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
