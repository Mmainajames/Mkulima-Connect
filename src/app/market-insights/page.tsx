'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Wand2, DollarSign, Lightbulb } from 'lucide-react';

import { MainLayout } from '@/components/main-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getPricingSuggestionAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import type { PricingGuidanceOutput } from '@/ai/flows/farmers-pricing-guidance';

const formSchema = z.object({
  produceType: z.string().min(2, { message: 'Produce name must be at least 2 characters.' }),
  quantity: z.coerce.number().min(1, { message: 'Quantity must be at least 1.' }),
  quality: z.enum(['premium', 'standard', 'fair']),
  location: z.string().min(2, { message: 'Location must be at least 2 characters.' }),
});

export default function MarketInsightsPage() {
  const [result, setResult] = useState<PricingGuidanceOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      produceType: '',
      quantity: 100,
      quality: 'standard',
      location: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    const response = await getPricingSuggestionAction(values);

    if (response.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: response.error,
      });
    } else if (response.data) {
      setResult(response.data);
    }
    setIsLoading(false);
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Wand2 className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
              AI Pricing Assistant
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              Get data-driven pricing recommendations to maximize your profits.
            </p>
          </div>

          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="produceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Produce Type</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Tomatoes" {...field} className="rounded-full" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quantity (in kg)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="e.g., 100" {...field} className="rounded-full" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="quality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quality</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-full">
                                <SelectValue placeholder="Select quality" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="premium">Premium</SelectItem>
                              <SelectItem value="standard">Standard</SelectItem>
                              <SelectItem value="fair">Fair</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Market Location</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Kisumu" {...field} className="rounded-full" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" disabled={isLoading} className="w-full rounded-full" size="lg">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Get Pricing Guidance'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {result && (
            <Card className="mt-12 rounded-2xl shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Pricing Recommendation</CardTitle>
                <CardDescription>
                  Based on current market conditions for your inputs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-full">
                     <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Suggested Price</p>
                    <p className="text-3xl font-bold">
                      KES {result.suggestedPrice.toLocaleString()} / kg
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Reasoning</p>
                    <p className="text-base">{result.reasoning}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
