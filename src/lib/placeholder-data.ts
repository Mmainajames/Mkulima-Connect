export type Produce = {
  id: number;
  name: string;
  farmer: string;
  location: string;
  price: number;
  quantity: number;
  quality: 'Premium' | 'Standard' | 'Fair';
  imageUrl: string;
};

export const produceListings: Produce[] = [
  {
    id: 1,
    name: 'Tomatoes',
    farmer: 'Grace Mwangi',
    location: 'Kisumu',
    price: 120,
    quantity: 500,
    quality: 'Premium',
    imageUrl: 'https://picsum.photos/seed/tomatoes/400/300',
  },
  {
    id: 2,
    name: 'Maize (Corn)',
    farmer: 'David Otieno',
    location: 'Eldoret',
    price: 50,
    quantity: 2000,
    quality: 'Standard',
    imageUrl: 'https://picsum.photos/seed/maize/400/300',
  },
  {
    id: 3,
    name: 'Cabbages',
    farmer: 'Mary Wanjiru',
    location: 'Nakuru',
    price: 80,
    quantity: 300,
    quality: 'Premium',
    imageUrl: 'https://picsum.photos/seed/cabbages/400/300',
  },
  {
    id: 4,
    name: 'Carrots',
    farmer: 'Samuel Maina',
    location: 'Nairobi',
    price: 150,
    quantity: 250,
    quality: 'Premium',
    imageUrl: 'https://picsum.photos/seed/carrots/400/300',
  },
  {
    id: 5,
    name: 'Sukuma Wiki (Kale)',
    farmer: 'Grace Mwangi',
    location: 'Kisumu',
    price: 40,
    quantity: 1000,
    quality: 'Standard',
    imageUrl: 'https://picsum.photos/seed/kale/400/300',
  },
  {
    id: 6,
    name: 'Potatoes',
    farmer: 'David Otieno',
    location: 'Eldoret',
    price: 90,
    quantity: 1500,
    quality: 'Fair',
    imageUrl: 'https://picsum.photos/seed/potatoes/400/300',
  },
  {
    id: 7,
    name: 'Onions',
    farmer: 'Mary Wanjiru',
    location: 'Nakuru',
    price: 110,
    quantity: 400,
    quality: 'Standard',
    imageUrl: 'https://picsum.photos/seed/onions/400/300',
  },
  {
    id: 8,
    name: 'Mangoes',
    farmer: 'Samuel Maina',
    location: 'Nairobi',
    price: 200,
    quantity: 600,
    quality: 'Premium',
    imageUrl: 'https://picsum.photos/seed/mangoes/400/300',
  },
];

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joined: string;
  role: 'Farmer' | 'Buyer';
};

export const users: User[] = [
  { id: 'usr_1', name: 'Grace Mwangi', email: 'grace.m@example.com', avatar: 'https://picsum.photos/id/431/40/40', joined: '2023-01-15', role: 'Farmer' },
  { id: 'usr_2', name: 'David Otieno', email: 'david.o@example.com', avatar: 'https://picsum.photos/id/433/40/40', joined: '2023-02-20', role: 'Farmer' },
  { id: 'usr_3', name: 'Michael Owuor', email: 'michael.resto@example.com', avatar: 'https://picsum.photos/id/64/40/40', joined: '2023-03-10', role: 'Buyer' },
  { id: 'usr_4', name: 'Mary Wanjiru', email: 'mary.w@example.com', avatar: 'https://picsum.photos/id/447/40/40', joined: '2023-04-05', role: 'Farmer' },
  { id: 'usr_5', name: 'Urban Eats Ltd.', email: 'orders@urbaneats.com', avatar: '', joined: '2023-05-21', role: 'Buyer' },
  { id: 'usr_6', name: 'Samuel Maina', email: 'sam.maina@example.com', avatar: 'https://picsum.photos/id/502/40/40', joined: '2023-06-18', role: 'Farmer' },
];

export type Dispute = {
  id: string;
  orderId: string;
  user: string;
  reason: string;
  status: 'Open' | 'Resolved';
  date: string;
};

export const disputes: Dispute[] = [
    { id: 'dpt_1', orderId: 'ORD-1024', user: 'Michael Owuor', reason: 'Quality not as described', status: 'Open', date: '2023-10-25' },
    { id: 'dpt_2', orderId: 'ORD-1011', user: 'Urban Eats Ltd.', reason: 'Late delivery', status: 'Open', date: '2023-10-22' },
    { id: 'dpt_3', orderId: 'ORD-987', user: 'David Otieno', reason: 'Payment not received', status: 'Resolved', date: '2023-09-15' },
];
