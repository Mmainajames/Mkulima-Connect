'use client';

import { useState } from 'react';
import { MainLayout } from '@/components/main-layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, PackageCheck, Package, Rocket, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

type Status = 'Order Placed' | 'Shipped' | 'In Transit' | 'Delivered';

const trackingData: { [key: string]: { status: Status, history: { status: Status, date: string, location: string }[] } } = {
  'MKU12345': {
    status: 'In Transit',
    history: [
      { status: 'Delivered', date: '2023-10-29 11:45 AM', location: 'Nairobi' },
      { status: 'In Transit', date: '2023-10-28 08:00 AM', location: 'On the way to Nairobi' },
      { status: 'Shipped', date: '2023-10-27 05:20 PM', location: 'Kisumu' },
      { status: 'Order Placed', date: '2023-10-27 09:10 AM', location: 'Kisumu' },
    ]
  },
};

const statusIcons: { [key in Status]: JSX.Element } = {
  'Order Placed': <Package className="h-6 w-6" />,
  'Shipped': <Rocket className="h-6 w-6" />,
  'In Transit': <Package className="h-6 w-6" />,
  'Delivered': <PackageCheck className="h-6 w-6" />,
};

const statuses: Status[] = ['Order Placed', 'Shipped', 'In Transit', 'Delivered'];

export default function TrackOrderPage() {
  const [trackingId, setTrackingId] = useState('');
  const [currentTrackingData, setCurrentTrackingData] = useState(trackingData['MKU12345']);

  const handleTrack = () => {
    // In a real app, you would fetch this data
    if (trackingData[trackingId]) {
      setCurrentTrackingData(trackingData[trackingId]);
    } else {
      //setCurrentTrackingData(null);
    }
  };
  
  const currentStatusIndex = statuses.indexOf(currentTrackingData.status);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Track Your Order</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Enter your tracking ID to see the latest shipment status.</p>
          </div>

          <div className="flex gap-2 mb-12">
            <Input
              type="text"
              placeholder="Enter your tracking ID (e.g. MKU12345)"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="flex-grow rounded-full"
            />
            <Button onClick={handleTrack} className="rounded-full">
              <Search className="mr-2 h-4 w-4" /> Track
            </Button>
          </div>

          {currentTrackingData && (
            <Card className="rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Tracking Details for #{trackingId || 'MKU12345'}</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Timeline visual */}
                <div className="flex justify-between items-center mb-10">
                  {statuses.map((status, index) => (
                    <div key={status} className="flex flex-col items-center text-center">
                      <div className={cn("rounded-full h-12 w-12 flex items-center justify-center", index <= currentStatusIndex ? 'bg-primary text-primary-foreground' : 'bg-gray-200 text-gray-500')}>
                        {statusIcons[status]}
                      </div>
                      <p className={cn("mt-2 text-sm font-medium", index <= currentStatusIndex ? 'text-primary' : 'text-gray-500')}>{status}</p>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <div className="absolute left-6 top-0 h-full w-0.5 bg-gray-200"></div>
                  {currentTrackingData.history.map((item, index) => (
                    <div key={index} className="relative pl-12 pb-8">
                       <div className={cn("absolute left-[1.1rem] top-1 h-4 w-4 rounded-full", index === 0 ? "bg-primary ring-4 ring-background" : "bg-gray-300")}></div>
                      <p className="font-semibold">{item.status}</p>
                      <p className="text-sm text-gray-500">{item.location}</p>
                      <p className="text-sm text-gray-400">{item.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
