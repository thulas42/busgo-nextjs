# BusGo - Bus Booking Platform

![BusGo Logo](public/busgo-logo.png)

BusGo is a modern bus booking platform built with Next.js and Firebase, designed to provide a seamless experience for booking bus tickets across South Africa.

## 🚀 Live Demo

Check out the live demo: [BusGo App](https://busgo-nextjs.vercel.app/)

## ✨ Features

- **Location Autocomplete**: Search for South African cities with a custom-built autocomplete component
- **Route Search**: Find bus routes between cities with flexible date options
- **Responsive Design**: Fully responsive UI that works on mobile, tablet, and desktop
- **Interactive UI**: Modern, user-friendly interface with animations and transitions
- **Travel Information**: Comprehensive travel guides and FAQs
- **Station Information**: Details about bus stations and their amenities
- **Special Deals**: Promotional offers and discounts
- **Mock Data**: Simulated backend with realistic data for demonstration purposes

## 🛠️ Technologies Used

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Firebase (Firestore, Authentication)
- **Deployment**: Vercel
- **State Management**: React Hooks
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Font Awesome

## 📋 Project Structure

```
busgo-nextjs/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # Reusable React components
│   ├── contexts/       # React context providers
│   ├── data/           # Mock data for development
│   ├── lib/            # Utility libraries (Firebase, etc.)
│   └── services/       # API service functions
├── scripts/            # Build and deployment scripts
├── .env.local          # Environment variables (example)
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/busgo-nextjs.git
   cd busgo-nextjs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with your Firebase configuration:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

   Alternatively, for development without Firebase:
   ```
   NEXT_PUBLIC_USE_MOCK_DATA=true
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

The project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Set the environment variables
4. Deploy!

## 📱 Mobile Responsiveness

BusGo is designed to work seamlessly across all device sizes:

- **Mobile**: Optimized layout with hamburger menu
- **Tablet**: Adjusted grid layouts for medium screens
- **Desktop**: Full-featured experience with enhanced visuals

## 🧪 Testing

Run the test suite with:

```bash
npm test
# or
yarn test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [Vercel](https://vercel.com/)

## 📞 Contact

For any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com).

---

Built with ❤️ by [Your Name](https://github.com/yourusername)