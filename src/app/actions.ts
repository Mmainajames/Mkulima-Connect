// @/app/actions.ts
'use server';

import {
  getPricingGuidance,
  type PricingGuidanceInput,
} from '@/ai/flows/farmers-pricing-guidance';
import { z } from 'zod';

const formSchema = z.object({
  produceType: z.string().min(1, 'Produce type is required'),
  quantity: z.coerce.number().min(1, 'Quantity must be at least 1'),
  quality: z.enum(['premium', 'standard', 'fair']),
  location: z.string().min(1, 'Location is required'),
});

export async function getPricingSuggestionAction(
  values: z.infer<typeof formSchema>
) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid input.' };
  }

  try {
    const result = await getPricingGuidance(validatedFields.data as PricingGuidanceInput);
    return { data: result };
  } catch (error) {
    console.error('AI Flow Error:', error);
    return { error: 'Failed to get pricing guidance. Please try again later.' };
  }
}
