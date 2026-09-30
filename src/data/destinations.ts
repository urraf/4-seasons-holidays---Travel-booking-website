export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export interface Destination {
  id: string;
  name: string;
  country: string;
  season: Season;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  highlights: string[];
  bestMonths: string[];
  avgTemp: string;
  priceFrom: number;
  rating: number;
  region: string;
}

export const destinations: Destination[] = [
  // ===== SPRING & SUMMER =====
  {
    id: 'kashmir',
    name: 'Kashmir Spring & Summer',
    country: 'India',
    season: 'spring',
    tagline: 'Kashmiri Jashn-e-Bahaar — Royal Shikara & Tulip Sojourn',
    description: 'Watch the Kashmir valley burst into bloom as almond blossoms and Asia\'s largest Tulip Garden paint Srinagar in vivid hues. Glide across mirror-still Dal Lake on private hand-carved shikaras, walk through lush Mughal gardens, and ride horses through green Baisaran valley meadows in Pahalgam.',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150458?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1597074866923-dc0589150458?w=800&q=80',
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800&q=80',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80',
    ],
    highlights: ['Dal Lake Royal Shikara Ride', 'Srinagar Tulip Garden Festival', 'Mughal Gardens Nishat & Shalimar', 'Pahalgam & Betaab Valley Meadow'],
    bestMonths: ['March', 'April', 'May', 'June', 'July', 'August'],
    avgTemp: '14–26°C',
    priceFrom: 19500,
    rating: 4.9,
    region: 'North India',
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    country: 'India',
    season: 'spring',
    tagline: 'Meghalaya Cloud-Whispers — Abode of Clouds',
    description: 'Wander through living root bridges woven by Khasi elders over centuries, sail down the glass-clear waters of Dawki River, and listen to the thunder of Nohkalikai waterfalls cascading down mist-shrouded green cliffs in Cherrapunji.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    ],
    highlights: ['Cherrapunji Nohkalikai Falls', 'Dawki Crystal Clear River', 'Living Root Bridges Hike', 'Shillong Peak View'],
    bestMonths: ['March', 'April', 'May'],
    avgTemp: '15–24°C',
    priceFrom: 18500,
    rating: 4.8,
    region: 'North East India',
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath & Rishikesh',
    country: 'India',
    season: 'spring',
    tagline: 'Devbhoomi Kedarnath Mystics — Sacred Peaks',
    description: 'Journey into the sacred heart of Uttarakhand. Behold the ancient Kedarnath temple standing amidst towering Himalayan snow peaks, experience the soul-stirring evening Ganga Aarti at Rishikesh, and trek through green alpine valleys.',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab06cf6f?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1605649487212-47bdab06cf6f?w=800&q=80',
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    ],
    highlights: ['Kedarnath Himalayan Temple', 'Rishikesh Ganga Aarti', 'Lakshman Jhula Walk', 'Chopta Tungnath Trek'],
    bestMonths: ['May', 'June'],
    avgTemp: '10–20°C',
    priceFrom: 16500,
    rating: 4.9,
    region: 'North India',
  },

  // ===== SUMMER =====
  {
    id: 'ladakh',
    name: 'Ladakh',
    country: 'India',
    season: 'summer',
    tagline: 'Ladakhi Azure Horizon — High Passes & Pangong Tso',
    description: 'Traverse Khardung La, the world\'s highest motorable pass. Marvel at the shifting turquoise hues of Pangong Tso lake, explore ancient cliffside Buddhist monasteries at Thiksey, and ride double-humped camels through Nubra Valley sand dunes.',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=800&q=80',
      'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800&q=80',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80',
    ],
    highlights: ['Pangong Tso Azure Lake', 'Khardung La Pass Drive', 'Thiksey Monastery Tour', 'Nubra Valley Camel Safari'],
    bestMonths: ['June', 'July', 'August', 'September'],
    avgTemp: '15–25°C',
    priceFrom: 26500,
    rating: 4.9,
    region: 'Himalayas',
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    season: 'summer',
    tagline: 'Balinese Temple Whispers — Emerald Canopies',
    description: 'Where emerald rice terraces cascade down volcanic slopes, incense drifts from ancient sea temples, and turquoise waves break on serene shores. Experience luxury cliffside villas, private yoga sessions above jungle canopies, and romantic sunset beach dining.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80',
    ],
    highlights: ['Tegallalang Rice Terraces', 'Uluwatu Temple Sunset', 'Ubud Art & Jungle Villa', 'Nusa Penida Snorkelling'],
    bestMonths: ['May', 'June', 'July', 'August'],
    avgTemp: '27–30°C',
    priceFrom: 48000,
    rating: 4.8,
    region: 'Luxury Islands',
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    season: 'summer',
    tagline: 'Maldivian Lagoon Azure — Overwater Sanctuaries',
    description: 'Step off the seaplane onto powdery white sand, dive into water so clear it feels like flying, and fall asleep in an overwater villa with glass floors above coral reefs. The ultimate tropical luxury island escape.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
      'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80',
    ],
    highlights: ['Overwater Villa Stay', 'Sunset Dolphin Cruise', 'Coral Reef Snorkelling', 'Private Beach Dinner'],
    bestMonths: ['May', 'June', 'July', 'August'],
    avgTemp: '28–31°C',
    priceFrom: 78000,
    rating: 4.9,
    region: 'Luxury Islands',
  },

  // ===== AUTUMN =====
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    country: 'India',
    season: 'autumn',
    tagline: 'Rajputana Royal Riyaasat — Land of Kings',
    description: 'Step into the golden grandeur of royal Rajasthan. Ride camels over Thar desert dunes at sunset in Jaisalmer, sail across Lake Pichola in Udaipur, marvel at Jaipur\'s Hawa Mahal, and sleep in centuries-old heritage palaces.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80',
      'https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?w=800&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    ],
    highlights: ['Jaisalmer Desert Safari', 'Udaipur Lake Pichola Cruise', 'Jaipur Forts Tour', 'Heritage Palace Stay'],
    bestMonths: ['October', 'November', 'December'],
    avgTemp: '18–28°C',
    priceFrom: 24500,
    rating: 4.9,
    region: 'North & West India',
  },
  {
    id: 'kerala',
    name: 'Kerala',
    country: 'India',
    season: 'autumn',
    tagline: 'Keraleeyam Abode — God\'s Own Country',
    description: 'Float along tranquil emerald backwaters aboard a luxury hand-crafted houseboat in Alleppey, breathe mist-clad air amidst rolling tea gardens in Munnar, and rejuvenate with authentic Ayurvedic therapies under coconut palms.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    ],
    highlights: ['Alleppey Luxury Houseboat Cruise', 'Munnar Tea Plantation Tour', 'Kovalam Beach Sunset', 'Ayurvedic Wellness Spa'],
    bestMonths: ['October', 'November', 'December'],
    avgTemp: '23–30°C',
    priceFrom: 19500,
    rating: 4.8,
    region: 'South India',
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    country: 'India',
    season: 'autumn',
    tagline: 'Himachali Devbhoomi — Golden Valleys & Deodars',
    description: 'As the monsoon recedes, Himachal Pradesh reveals its most romantic face: crystal-clear skies, golden deodar forests, apple orchards in full harvest, and snow-dusted Himalayan peaks surrounding Shimla, Kullu, and Kasauli.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
      'https://images.unsplash.com/photo-1585136917228-4e10e1b1e3e5?w=800&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    ],
    highlights: ['Kullu Valley Autumn Trek', 'Shimla Heritage Ridge Walk', 'Apple Orchard Harvest Visit', 'Kasauli Pine Woods Tour'],
    bestMonths: ['September', 'October', 'November'],
    avgTemp: '10–22°C',
    priceFrom: 15500,
    rating: 4.7,
    region: 'North India',
  },

  // ===== WINTER =====
  {
    id: 'kashmir-winter',
    name: 'Kashmir Winter Snowfall',
    country: 'India',
    season: 'winter',
    tagline: 'Kashmiri Barf-e-Zabaan — Gulmarg Snow & Frozen Lakes',
    description: 'Experience Kashmir transformed into a fairy-tale winter wonderland! Ride the world-famous Gulmarg Gondola over pristine white snowfields, ski down Apharwat peak, sledge through Sonamarg snow, and sip hot kehwa in cozy heated houseboats.',
    image: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548777123-e216912df7d8?w=800&q=80',
      'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80',
      'https://images.unsplash.com/photo-1553524913-efba3f0b391d?w=800&q=80',
    ],
    highlights: ['Gulmarg Gondola Snow Ride', 'Apharwat Skiing & Snowboard', 'Heated Luxury Houseboat Stay', 'Sonamarg Snow Sledging'],
    bestMonths: ['December', 'January', 'February'],
    avgTemp: '-4–8°C',
    priceFrom: 21500,
    rating: 4.95,
    region: 'North India',
  },
  {
    id: 'goa',
    name: 'Goa',
    country: 'India',
    season: 'winter',
    tagline: 'Goan Velvet Shores — Sun-Kissed Fiesta',
    description: 'Unwind on golden palm-draped beaches, wander cobblestone Portuguese quarters in Fontainhas, cruise the Mandovi river at sunset, and savour fresh seafood paired with feni on pristine private shores.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    ],
    highlights: ['Palolem & Agonda Beach Relax', 'Old Goa Basilica & Fontainhas', 'Mandovi Sunset Yacht Cruise', 'Beachside Seafood Dining'],
    bestMonths: ['November', 'December', 'January', 'February'],
    avgTemp: '20–30°C',
    priceFrom: 17500,
    rating: 4.8,
    region: 'South & West Coast',
  },
  {
    id: 'manali',
    name: 'Manali & Kasauli',
    country: 'India',
    season: 'winter',
    tagline: 'Snow Sojourn — Himalayan Winter Wonderland',
    description: 'Transform into a fairy-tale winter dream as deep snow covers Solang Valley and Kasauli hills. Enjoy ski adventures, sip hot chocolate by roaring fireplace hearths in timber chalets, and trek to frozen mountain streams.',
    image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80',
      'https://images.unsplash.com/photo-1553524913-efba3f0b391d?w=800&q=80',
      'https://images.unsplash.com/photo-1548777123-e216912df7d8?w=800&q=80',
    ],
    highlights: ['Solang Valley Skiing & Snowboard', 'Rohtang Pass Snow View', 'Kasauli Heritage Walk', 'Cozy Log Cabin Fireplace'],
    bestMonths: ['December', 'January', 'February'],
    avgTemp: '-2–10°C',
    priceFrom: 16000,
    rating: 4.7,
    region: 'North India',
  },
  {
    id: 'andaman',
    name: 'Andaman & Nicobar',
    country: 'India',
    season: 'winter',
    tagline: 'Andaman Emerald Seas — Coral & White Havens',
    description: 'Escape to India\'s most pristine island paradise. Walk Asia\'s finest Radhanagar Beach on Havelock Island, scuba dive through colorful living coral reefs, and watch glowing bioluminescent waves under starry tropical skies.',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    ],
    highlights: ['Radhanagar Beach Havelock', 'Elephant Beach Scuba Diving', 'Cellular Jail Light & Sound', 'Bioluminescent Kayaking'],
    bestMonths: ['November', 'December', 'January', 'February'],
    avgTemp: '22–30°C',
    priceFrom: 29500,
    rating: 4.9,
    region: 'Luxury Islands',
  },
];

export const getDestinationsBySeason = (season: Season): Destination[] =>
  destinations.filter((d) => d.season === season);

export const getDestinationById = (id: string): Destination | undefined =>
  destinations.find((d) => d.id === id);
