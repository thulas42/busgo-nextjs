# BusGo - Modern Bus Booking Platform

BusGo is a modern, user-friendly bus booking platform built with Next.js and Firebase. This application provides a seamless experience for users to book bus tickets, explore routes, find station information, and access travel deals.

## Features

- **User Authentication**: Secure login and registration system using Firebase Authentication
- **Route Exploration**: Browse popular routes and schedules
- **Station Information**: View detailed information about bus stations and amenities
- **Special Deals**: Access exclusive discounts and promotional offers
- **Travel Information**: Helpful guides and FAQs for travelers
- **Responsive Design**: Optimized for all devices from mobile to desktop

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/busgo.git
   cd busgo
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with your Firebase configuration:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your-project.firebaseio.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
   ```

4. Seed the database with initial data:
   ```bash
   npm run seed
   # or
   yarn seed
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
busgo/
├── public/            # Static assets
├── scripts/           # Utility scripts (including database seeding)
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable React components
│   ├── data/          # Static data and sample content
│   ├── lib/           # Utility functions and Firebase setup
│   └── services/      # Firebase service functions for data operations
├── .env.local         # Environment variables (not in repo)
├── next.config.mjs    # Next.js configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Firebase Setup

1. Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password method)
3. Create a Firestore database
4. Set up appropriate security rules for Firestore
5. Add a web app to your Firebase project and copy the configuration
6. Update your `.env.local` file with the Firebase configuration

## Firebase Services

The application uses several Firebase services:

- **Authentication**: For user sign-up, sign-in, and account management
- **Firestore**: For storing and retrieving data like:
  - Routes and schedules
  - Station information and amenities
  - Special deals and promotions
  - Travel information and FAQs
  - User bookings and preferences
- **Storage**: For storing images and other media files

## Data Seeding

The project includes a seed script to populate your Firebase database with initial data:

```bash
npm run seed
```

This script will:
1. Clear existing data from all collections
2. Seed the database with sample routes, stations, deals, and other information
3. Set up the necessary structure for your application to function properly

## Pages

- **Home**: Landing page with featured routes and promotions
- **Schedule**: Browse bus schedules and popular routes
- **Stations**: View information about bus stations and amenities
- **Deals**: Explore special discounts and promotional offers
- **Travel Info**: Access helpful guides and FAQs for travelers
- **Help**: Get assistance and support information
- **Sign In/Sign Up**: User authentication pages

## Deployment

This application is deployed on Vercel and can be accessed at [https://busgo.vercel.app](https://busgo.vercel.app) (replace with your actual URL).

The deployment process uses Vercel's continuous integration:
- Main branch is automatically deployed to production
- Pull requests generate preview deployments
- Environment variables are securely managed in the Vercel dashboard

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)