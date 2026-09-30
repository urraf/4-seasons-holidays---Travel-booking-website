export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  location: string;
  destination: string;
  season: string;
  rating: number;
  text: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya & Arjun Mehta',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    location: 'Mumbai, Maharashtra',
    destination: 'Kashmir Spring & Summer',
    season: 'Spring',
    rating: 5,
    text: 'Our spring trip to Kashmir with 4 Seasons Holidays was pure magic! The tulip gardens in Srinagar were bursting with color, our Dal Lake luxury houseboat was super cozy with hot kehwa, and the shikara rides at sunset were unforgettable.',
    date: 'April 2024',
  },
  {
    id: 't2',
    name: 'Dr. Siddharth & Meera Kapoor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    location: 'Bengaluru, Karnataka',
    destination: 'Kedarnath & Rishikesh',
    season: 'Spring',
    rating: 5,
    text: 'Visiting Kedarnath Dham and Rishikesh Ganga Aarti was a spiritual experience of a lifetime. The team organized VIP darshan, excellent mountain guides, and high-altitude luxury camps. Flawless management!',
    date: 'May 2024',
  },
  {
    id: 't3',
    name: 'Rohan & Neha Sharma',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    location: 'New Delhi, NCR',
    destination: 'Manali & Kasauli',
    season: 'Winter',
    rating: 5,
    text: 'Our winter snow escape to Manali and Solang Valley was breathtaking! Waking up to deep white snow outside our heated wooden chalet, skiing with trained instructors, and sipping hot chocolate by the fireplace was surreal.',
    date: 'January 2025',
  },
  {
    id: 't4',
    name: 'Ananya & Vikram Verma',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80',
    location: 'Gurugram, Haryana',
    destination: 'Kerala Backwaters',
    season: 'Autumn',
    rating: 5,
    text: 'The private luxury Kettuvallam houseboat cruise in Alleppey and Munnar tea estate resort exceeded all our expectations. Authentic Karimeen fish curry, serene backwaters, and rejuvenating Ayurvedic massages!',
    date: 'October 2024',
  },
  {
    id: 't5',
    name: 'Vikram & Radhika Sengupta',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&q=80',
    location: 'Kolkata, West Bengal',
    destination: 'Ladakh High Passes',
    season: 'Summer',
    rating: 5,
    text: 'Crossing Khardung La pass and seeing the turquoise water of Pangong Tso at sunrise was unbelievable. 4 Seasons Holidays provided 4x4 SUVs, oxygen cylinders on board, and top glamping tents. Truly professional!',
    date: 'July 2024',
  },
  {
    id: 't6',
    name: 'Rajesh & Sunita Agarwal Family',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    location: 'Surat, Gujarat',
    destination: 'Rajasthan Royal Palaces',
    season: 'Autumn',
    rating: 5,
    text: 'We booked the Rajputana Royal Riyaasat package for our 25th anniversary with our whole family. Camel safaris in Jaisalmer desert, Lake Pichola boat ride in Udaipur, and palace stays made us feel like royalty!',
    date: 'November 2024',
  },
];
