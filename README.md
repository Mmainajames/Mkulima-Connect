# **Vibe Coding 4-3-2 Hackathon**

## Project Description
This project is written, and deployed using Google's Firebase Studio.
The project is in line with the 2nd SDG- Zero Hunger
The application aims to bridge the gap between farmers and buyers, particularly those who buy produce in bulk with focus on reducing post harvest losses.

## How it Works
- Farmers create an account and place listing of their produce with desired pricing/unit

- On the other hand, buyers make a search, make an offer to the farmers. Both parties negotiate and once they agree on the price the buyer pays then the farmer initiates shipment which is closely monitored until it gets to the buyer. If there is any dispute, they inform the company which in turn takes over the matter till conclusion.  

- Farmers get valuable Realtime AI-generated Insights about pricing of various crops in different regions. Such data allows them to make informed decision about regions they can fetch good prices for their produce.

## The Prompt 
You are designing the **Mkulima Connect platform**, a modern agricultural marketplace connecting farmers directly with buyers to reduce post-harvest losses, enable fair negotiations, and ensure secure payments with shipment tracking.  

The platform must reflect an **agriculture-first aesthetic**: clean, minimal, professional, with **green (growth), earthy tones (soil, sustainability), and white accents (trust & transparency)**. Use modern typography and consistent spacing. The provided logo (green crop in a container frame) should be visible in the header and login screens.

### 🎨 Design Language & Styling
- Primary colors: Green (#4CAF50), Deep Green (#2E7D32).
- Secondary colors: Earth Brown (#6D4C41), Light Beige (#F5F5DC).
- Accent colors: White (#FFFFFF), Soft Grey (#EEEEEE).
- Typography: Bold headlines, readable sans-serif for body text.
- Style: Clean, grid-based, modern UI, rounded corners (2xl), soft shadows.

 1.**Landing Page/Home**

[Header]
  - Logo (left)
  - Nav (Home, About, Pricing, Login/Signup)

[Hero Section]
  - Background: soft green gradient / farm imagery
  - Tagline: “From Soil to Sale, Seamlessly Connected”
  - CTA Buttons: [I am a Farmer] [I am a Buyer]
  -The CTA Buttons should be such that once a user clicks, they direct them to login to their respective dashboards (i.e. Farmer or Buyer)

[Benefits Section - 3 Cards Horizontally]
  - Card 1: Reduce Post-Harvest Losses (icon: crop)
  - Card 2: Fair Negotiation & Prices (icon: handshake)
  - Card 3: Secure Payments & Tracking (icon: shield/truck)

[Demo Flow Section]
  - Horizontal Step Cards: (List Produce → Make Offer → Pay → Track Shipment)
  - Each with simple icon + caption

[Footer]
  - Links: Terms, Privacy, Contact
  - Social icons
  

2.Authentication (Firebase) 

[Centered Card]
  - Logo at top
  - Tabs: [Login] [Sign Up]
  - Input fields: Email, Password
  - Social login buttons: Google, Facebook
  - Role Selection (Farmer / Buyer)
  - CTA Button: [Continue]

3. Farmer Dashboard

[Sidebar Navigation]
  - Dashboard
  - My Listings
  - Messages
  - Transactions
  - Settings

[Main Content Area]
  - Header: “Welcome, [Farmer Name]”
  - Button: [Create New Listing]

  [Listing Grid - Cards]
    - Image of produce
    - Title + Category
    - Price per unit
    - Quantity available
    - Buyers interested (icon + count)
    - Edit/Delete buttons
 
 4.Buyer Dashboard 

[Top Bar]
  - Search Bar (with filters: category, location, price range)

[Listing Grid - Cards]
  - Produce Image
  - Farmer Name + Region
  - Price per unit
  - Available quantity
  - Button: [Make Offer]

[Offer Modal]
  - Selected produce details
  - Input: Quantity desired
  - Input: Offer price per unit
  - Button: [Send Offer]

 5. Negotiating & Messaging

[Chat Window]
  - Sidebar: List of conversations
  - Main area:
    - Header: Farmer/Buyer Name
    - Message bubbles (green for user, grey for other)
    - Structured offer card inside chat
      - Offer details: Price, Quantity
      - Buttons: [Accept] [Counter] [Decline]
    - Input field + Send button

 6. Transactions & Payments (Intasend)

[Checkout Modal]
  - Summary Card:
    - Produce Name
    - Price/unit x Quantity
    - Commission breakdown
    - Total Amount
  - Payment Options: M-Pesa, Bank Card
  - CTA: [Pay Securely]

[Transaction History Table]
  - Columns: Date | Produce | Amount | Status | Receipt Download

7. Pricing & Tiers

[Comparison Table - 3 Columns]
  - Freemium Tier
    - Up to 25,000 for first 3 sales
    - Then 1% commission
  - Tier 2
    - 1% commission for 50k – 100k
  - Pro Tier
    - 3% commission above 100k
  - CTA: [Upgrade Plan]

8. Shipment Tracking

[Tracking Card]
  - Order ID
  - Tracking Bar (4 steps: Confirmed → Preparing → Out for Delivery → Delivered)
  - Status icons (checkmarks)
  - Optional Map Placeholder (future GPS integration)

9. Admin Dashboard

[Sidebar]
  - Users
  - Transactions
  - Disputes
  - Reports

[Main Content]
  - Analytics Cards (Total Transactions, Commission Revenue, Top Produce)
  - User management table
  - Dispute resolution panel

### 🧩 Components
- Reusable cards (produce, offers, transactions).
- Modals for checkout, offers, confirmations.
- Tables for transaction history.
- Notification system for offers, payments, shipments.

### 🔒 Security & Trust
- SSL secure badge on checkout.
- Buyer protection note under payments.
- Verified badge for KYC users.


### 📱 Responsiveness
- Mobile-first design (farmers often on smartphones).
- Simple bottom nav on mobile for dashboard, listings, messages, profile.

The UI must feel modern, farmer-friendly, investor-ready, and agriculture-themed, while being fully optimized for transactions, negotiations, payments, and shipment tracking.

## Visit the Platform
[src/app/page.tsx](https://studio--mkulima-connect-n9ou0.us-central1.hosted.app) 


