export const travelInfo = {
  baggage: {
    icon: "fa-suitcase",
    title: "Baggage Information",
    items: [
      "Each passenger can bring 1 piece of luggage (up to 50 lbs) free of charge",
      "Additional luggage costs $10 per piece",
      "Oversized items (sports equipment, musical instruments) may require special arrangements",
      "Valuable items should be kept with you at all times"
    ]
  },
  documents: {
    icon: "fa-id-card",
    title: "Required Documents",
    items: [
      "Valid photo ID required for all passengers over 18",
      "E-ticket or printed ticket confirmation",
      "For international routes: valid passport and any required visas",
      "Student/senior discount cards if applicable"
    ]
  },
  amenities: {
    icon: "fa-bus",
    title: "Onboard Amenities",
    items: [
      { icon: "fa-wifi", text: "Free Wi-Fi on most routes (subject to availability)" },
      { icon: "fa-plug", text: "Power outlets at every seat on premium buses" },
      { icon: "fa-toilet", text: "Restrooms available on all long-distance routes" },
      { icon: "fa-utensils", text: "Snacks and beverages available for purchase on select routes" }
    ]
  },
  accessibility: {
    icon: "fa-wheelchair",
    title: "Accessibility",
    items: [
      "Wheelchair accessible buses available (please request 48 hours in advance)",
      "Priority seating for elderly and passengers with disabilities",
      "Service animals welcome onboard",
      "Special assistance available upon request"
    ]
  }
};

export const travelFAQs = [
  {
    question: "How early should I arrive before departure?",
    answer: "We recommend arriving at least 30 minutes before scheduled departure to allow time for boarding and luggage handling."
  },
  {
    question: "Can I change or cancel my ticket?",
    answer: "Yes, tickets can be changed or canceled up to 24 hours before departure. A fee may apply depending on your ticket type."
  },
  {
    question: "Are pets allowed on the bus?",
    answer: "Only service animals are permitted on our buses. Unfortunately, we cannot accommodate pets at this time."
  },
  {
    question: "Is there a lost and found service?",
    answer: "Yes, if you've left something on one of our buses, please contact our customer service within 14 days."
  }
]; 