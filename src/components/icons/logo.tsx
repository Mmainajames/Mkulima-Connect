import { Leaf } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center" aria-label="Mkulima Connect Home">
      <Leaf className="h-7 w-7 text-primary" />
      <span className="ml-2 text-xl font-headline font-bold text-gray-800 dark:text-white">
        Mkulima Connect
      </span>
    </div>
  );
}
