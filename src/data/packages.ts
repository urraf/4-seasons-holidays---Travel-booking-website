import type { Season } from './destinations';

export interface Package {
  id: string;
  title: string;
  destinationId: string;
  season: Season;
  duration: string;
  nights: number;
  pricePerPerson: number;
  originalPrice: number;
  groupSize: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  included: string[];
  excluded: string[];
  itinerary: ItineraryDay[];
  tags: string[];
  featured: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals: string;
  accommodation: string;
}

export const packages: Package[] = [
  // 1. KASHMIR SPRING & SUMMER
  {
    id: 'kashmiri-kaifiyaat-royal',
    title: 'Kashmiri Jashn-e-Bahaar — Royal Shikara & Tulip Sojourn',
    destinationId: 'kashmir',
    season: 'spring',
    duration: '6 Days / 5 Nights',
    nights: 5,
    pricePerPerson: 19500,
    originalPrice: 26000,
    groupSize: '2–8 Persons',
    difficulty: 'Easy',
    included: [
      'Private airport transfers in Srinagar in luxury cab',
      '5 nights stay (2 nights royal lake houseboat + 3 nights 4-star resort)',
      'Daily authentic Kashmiri Wazwan & breakfast',
      'Sunset Shikara ride on Dal Lake with steaming Kehwa',
      'Guided Mughal Gardens & Asia Tulip Garden entry tickets',
      'Pahalgam & Betaab Valley private cab tour',
      'Gulmarg Gondola ride tickets (Phase 1)',
    ],
    excluded: ['Flights to/from Srinagar', 'Personal shopping & tipping', 'Travel insurance'],
    itinerary: [
      { day: 1, title: 'Arrival in Srinagar & Royal Houseboat Check-in', description: 'Warm welcome at Srinagar Airport. Transfer to a hand-carved luxury houseboat on Dal Lake. Enjoy a romantic sunset shikara ride with steaming saffron kehwa.', meals: 'Welcome Dinner', accommodation: 'Luxury Lake Houseboat, Srinagar' },
      { day: 2, title: 'Mughal Gardens & Asia\'s Largest Tulip Garden', description: 'Explore Nishat Bagh, Shalimar Bagh, and the vibrant Indira Gandhi Memorial Tulip Garden bursting with 1.5 million blooming tulips.', meals: 'Breakfast, Dinner', accommodation: 'Luxury Lake Houseboat, Srinagar' },
      { day: 3, title: 'Pahalgam — Valley of Shepherds', description: 'Scenic drive along lidder river to Pahalgam. Pony ride through Baisaran valley meadows and visit Betaab Valley.', meals: 'Breakfast, Dinner', accommodation: 'Grand Palace Resort, Srinagar' },
      { day: 4, title: 'Gulmarg Meadows & Gondola Ride', description: 'Ascend to snow-dusted Apharwat Peak on the famous Gulmarg Gondola. Walk through spring wildflower meadows.', meals: 'Breakfast, Dinner', accommodation: 'Grand Palace Resort, Srinagar' },
      { day: 5, title: 'Sonamarg — Meadow of Gold', description: 'Day excursion to Sonamarg along Sindh River. Optional pony ride to Thajiwas Glacier.', meals: 'Breakfast, Dinner', accommodation: 'Grand Palace Resort, Srinagar' },
      { day: 6, title: 'Departure from Paradise', description: 'Leisurely breakfast overlooking Dal Lake. Transfer to Srinagar Airport for your journey home.', meals: 'Breakfast', accommodation: '—' },
    ],
    tags: ['Honeymoon', 'Family', 'Nature', 'Luxury'],
    featured: true,
  },

  // 2. MEGHALAYA
  {
    id: 'meghalaya-cloud-whispers',
    title: 'Meghalaya Cloud-Whispers — Living Root & Dawki Glass River',
    destinationId: 'meghalaya',
    season: 'spring',
    duration: '5 Days / 4 Nights',
    nights: 4,
    pricePerPerson: 18500,
    originalPrice: 24000,
    groupSize: '2–10 Persons',
    difficulty: 'Moderate',
    included: [
      'Guwahati airport pick up & drop in private SUV',
      '4 nights boutique eco-resort stay',
      'Breakfast and Khasi local dinners',
      'Boating on crystal clear Dawki Umngot river',
      'Double-Decker Living Root Bridge guided hike',
      'Cherrapunji Nohkalikai & Seven Sisters waterfalls tour',
    ],
    excluded: ['Flights/Trains to Guwahati', 'Personal expenses', 'Adventure gear hire'],
    itinerary: [
      { day: 1, title: 'Guwahati to Shillong — Scotland of the East', description: 'Drive from Guwahati through pine-scented hills. Stop at Umiam Lake for water sports. Evening stroll in Police Bazar.', meals: 'Dinner', accommodation: 'Heritage Club Resort, Shillong' },
      { day: 2, title: 'Cherrapunji Waterfalls & Caves', description: 'Explore Nohkalikai Falls, Mawsmai Cave, and Seven Sisters Falls framed by spring mist.', meals: 'Breakfast, Dinner', accommodation: 'Cherrapunji Holiday Resort' },
      { day: 3, title: 'Living Root Bridge Trek', description: 'Trek down to the ancient Double-Decker Living Root Bridge in Nongriat. Swim in turquoise natural rock pools.', meals: 'Breakfast, Dinner', accommodation: 'Cherrapunji Holiday Resort' },
      { day: 4, title: 'Dawki Glass River & Mawlynnong', description: 'Visit Asia\'s cleanest village Mawlynnong. Experience boating on the translucent glass waters of Dawki Umngot River.', meals: 'Breakfast, Dinner', accommodation: 'Heritage Club Resort, Shillong' },
      { day: 5, title: 'Shillong Peak & Departure', description: 'Panoramic view from Shillong Peak. Transfer back to Guwahati airport.', meals: 'Breakfast', accommodation: '—' },
    ],
    tags: ['Adventure', 'Nature', 'Trekking'],
    featured: true,
  },

  // 3. KEDARNATH
  {
    id: 'kedarnath-devbhoomi-mystics',
    title: 'Devbhoomi Kedarnath Mystics — Sacred Ganges & Holy Yatra',
    destinationId: 'kedarnath',
    season: 'spring',
    duration: '6 Days / 5 Nights',
    nights: 5,
    pricePerPerson: 16500,
    originalPrice: 22000,
    groupSize: '2–12 Persons',
    difficulty: 'Challenging',
    included: [
      'Haridwar / Dehradun transfers',
      '5 nights hotel & luxury camp stays',
      'Daily sattvik meals (Breakfast & Dinner)',
      'Kedarnath temple VIP darshan assistance',
      'Rishikesh Ganga Aarti & Triveni Ghat visit',
      'Experienced mountain Yatra guide',
    ],
    excluded: ['Helicopter tickets (can be arranged)', 'Pony/Palki charges', 'Personal items'],
    itinerary: [
      { day: 1, title: 'Dehradun/Haridwar to Guptkashi', description: 'Drive along Alaknanda and Mandakini rivers with stops at Devprayag and Rudraprayag sangam.', meals: 'Dinner', accommodation: 'Luxury Camp, Guptkashi' },
      { day: 2, title: 'Trek to Sacred Kedarnath Temple', description: 'Early morning drive to Gaurikund. Trek up to Kedarnath Dham surrounded by majestic snow-clad peaks. Evening Aarti.', meals: 'Breakfast, Dinner', accommodation: 'GMVN Lodge / Camp, Kedarnath' },
      { day: 3, title: 'Kedarnath Morning Darshan & Descent', description: 'Early morning temple abhishekam and darshan. Trek back down to Gaurikund and transfer to Guptkashi.', meals: 'Breakfast, Dinner', accommodation: 'Luxury Camp, Guptkashi' },
      { day: 4, title: 'Guptkashi to Rishikesh', description: 'Scenic mountain drive to Rishikesh. Evening attend the mesmerizing Ganga Aarti at Parmarth Niketan.', meals: 'Breakfast, Dinner', accommodation: 'Riverside Resort, Rishikesh' },
      { day: 5, title: 'Rishikesh Yoga & Spiritual Tour', description: 'Morning yoga session by the Ganges. Visit Lakshman Jhula, Ram Jhula, and Beatles Ashram.', meals: 'Breakfast, Dinner', accommodation: 'Riverside Resort, Rishikesh' },
      { day: 6, title: 'Departure', description: 'Morning dip in the Ganges. Transfer to Dehradun Airport or Haridwar station.', meals: 'Breakfast', accommodation: '—' },
    ],
    tags: ['Spiritual', 'Trekking', 'Culture'],
    featured: true,
  },

  // 4. LADAKH
  {
    id: 'ladakh-azure-horizon',
    title: 'Ladakhi Azure Horizon — Pangong Tso & Khardung La Expedition',
    destinationId: 'ladakh',
    season: 'summer',
    duration: '7 Days / 6 Nights',
    nights: 6,
    pricePerPerson: 26500,
    originalPrice: 34000,
    groupSize: '2–10 Persons',
    difficulty: 'Moderate',
    included: [
      'Leh Kushok Bakula airport transfers',
      '6 nights hotel & glamping tent stay',
      'Daily breakfast and dinner',
      'Inner Line Permits for Pangong Tso & Nubra',
      'Private 4x4 SUV for all mountain sightseeing',
      'Oxygen cylinder on board in vehicle',
      'Guided monastery tours',
    ],
    excluded: ['Flights to Leh', 'Camel rides', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Arrive in Leh & Acclimatisation', description: 'Welcome at Leh Kushok Bakula Airport. Rest for high altitude acclimatisation. Evening visit to Shanti Stupa.', meals: 'Dinner', accommodation: 'Grand Dragon Hotel, Leh' },
      { day: 2, title: 'Leh Monasteries & Hall of Fame', description: 'Explore Thiksey Monastery, Hemis Monastery, Shey Palace, and Magnetic Hill.', meals: 'Breakfast, Dinner', accommodation: 'Grand Dragon Hotel, Leh' },
      { day: 3, title: 'Khardung La Pass to Nubra Valley', description: 'Cross Khardung La (17,582 ft). Arrive in Hunder sand dunes for double-humped Bactrian camel rides.', meals: 'Breakfast, Dinner', accommodation: 'Luxury Organic Tents, Hunder' },
      { day: 4, title: 'Nubra to Pangong Tso Lake', description: 'Drive via Shyok River to the world-famous Pangong Tso Lake. Stargazing at night by the shore.', meals: 'Breakfast, Dinner', accommodation: 'Luxury Lake Camp, Pangong' },
      { day: 5, title: 'Pangong Sunrise to Leh', description: 'Witness changing blue colors of Pangong Lake at sunrise. Drive back to Leh via Chang La Pass.', meals: 'Breakfast, Dinner', accommodation: 'Grand Dragon Hotel, Leh' },
      { day: 6, title: 'Sangam & Alchi Monastery', description: 'Visit the confluence of Zanskar and Indus rivers. Optional river rafting. Evening shopping in Leh Bazaar.', meals: 'Breakfast, Dinner', accommodation: 'Grand Dragon Hotel, Leh' },
      { day: 7, title: 'Departure', description: 'Early morning transfer to Leh Airport.', meals: 'Breakfast', accommodation: '—' },
    ],
    tags: ['Adventure', 'Photography', 'Road Trip'],
    featured: true,
  },

  // 5. BALI
  {
    id: 'bali-temple-whispers',
    title: 'Balinese Temple Whispers — Ubud Canopies & Sunset Clifftop',
    destinationId: 'bali',
    season: 'summer',
    duration: '7 Days / 6 Nights',
    nights: 6,
    pricePerPerson: 48000,
    originalPrice: 62000,
    groupSize: '2–8 Persons',
    difficulty: 'Easy',
    included: [
      'Airport transfers in Denpasar',
      '6 nights luxury private pool villa & resort',
      'Daily breakfast & 3 specialty dinners',
      'Ubud rice terrace & swing experience',
      'Uluwatu cliff sunset with Kecak dance',
      'Nusa Penida speedboat day trip & snorkelling',
      'Balinese traditional spa massage',
    ],
    excluded: ['Flights to Bali', 'Visa fees', 'Personal shopping'],
    itinerary: [
      { day: 1, title: 'Arrive in Bali', description: 'Welcome at Denpasar Airport with flower garlands. Private transfer to Seminyak beach resort.', meals: 'Dinner', accommodation: 'Seminyak Beach Resort' },
      { day: 2, title: 'Ubud Rice Terraces & Jungle Swing', description: 'Visit Tegallalang rice terraces, Sacred Monkey Forest, and Balinese coffee plantations.', meals: 'Breakfast, Lunch', accommodation: 'Ubud Private Pool Villa' },
      { day: 3, title: 'Water Temple & Spa Rejuvenation', description: 'Blessing ritual at Tirta Empul temple followed by a 2-hour Balinese flower bath spa.', meals: 'Breakfast', accommodation: 'Ubud Private Pool Villa' },
      { day: 4, title: 'Nusa Penida Island Tour', description: 'Speedboat to Nusa Penida. Visit Kelingking T-Rex beach and snorkelling with manta rays.', meals: 'Breakfast, Lunch', accommodation: 'Uluwatu Clifftop Resort' },
      { day: 5, title: 'Uluwatu Sunset & Fire Dance', description: 'Relax at Padang Padang beach. Sunset at Uluwatu Cliff Temple with Kecak Fire Dance.', meals: 'Breakfast, Dinner', accommodation: 'Uluwatu Clifftop Resort' },
      { day: 6, title: 'Canggu Beach & Sunset Dinner', description: 'Explore trendy Canggu cafes and beach clubs. Candlelight seafood dinner on Jimbaran beach.', meals: 'Breakfast, Dinner', accommodation: 'Canggu Beach Hotel' },
      { day: 7, title: 'Departure', description: 'Leisurely breakfast. Transfer to Denpasar Airport.', meals: 'Breakfast', accommodation: '—' },
    ],
    tags: ['Honeymoon', 'Luxury', 'Romance'],
    featured: true,
  },

  // 6. MALDIVES
  {
    id: 'maldivian-lagoon-azure',
    title: 'Maldivian Lagoon Azure — Overwater Villa Retreat',
    destinationId: 'maldives',
    season: 'summer',
    duration: '5 Days / 4 Nights',
    nights: 4,
    pricePerPerson: 78000,
    originalPrice: 98000,
    groupSize: '2–4 Persons',
    difficulty: 'Easy',
    included: [
      'Seaplane transfers from Malé Airport',
      '4 nights in luxury Overwater Villa with ocean pool',
      'Full board / All-inclusive gourmet meal plan',
      'Sunset dolphin cruise on wooden dhoni',
      'Guided coral reef snorkelling excursion',
      'Private beach candlelight dinner',
    ],
    excluded: ['International flights', 'Water sports equipment hire', 'Spa treatments'],
    itinerary: [
      { day: 1, title: 'Seaplane Arrival in Paradise', description: 'Scenic seaplane flyover over turquoise atolls. Welcome drink and check-in to overwater villa.', meals: 'All-inclusive', accommodation: 'Luxury Overwater Villa' },
      { day: 2, title: 'Snorkelling & Lagoon Kayaking', description: 'Guided reef snorkelling with sea turtles and rays. Sunset dolphin watching cruise.', meals: 'All-inclusive', accommodation: 'Luxury Overwater Villa' },
      { day: 3, title: 'Sandbank Picnic & Sunset Dinner', description: 'Boat trip to a deserted sandbank. Evening private beach dinner under starry tropical skies.', meals: 'All-inclusive', accommodation: 'Luxury Overwater Villa' },
      { day: 4, title: 'Island Wellness & Underwater Dining', description: 'Morning deck yoga. Relax with spa therapies and optional underwater restaurant lunch.', meals: 'All-inclusive', accommodation: 'Luxury Overwater Villa' },
      { day: 5, title: 'Departure', description: 'Final breakfast overlooking the lagoon. Seaplane transfer back to Malé Airport.', meals: 'Breakfast', accommodation: '—' },
    ],
    tags: ['Honeymoon', 'Luxury', 'Islands'],
    featured: true,
  },

  // 7. RAJASTHAN
  {
    id: 'rajputana-royal-riyaasat',
    title: 'Rajputana Royal Riyaasat — Heritage Palaces & Desert Safari',
    destinationId: 'rajasthan',
    season: 'autumn',
    duration: '8 Days / 7 Nights',
    nights: 7,
    pricePerPerson: 24500,
    originalPrice: 32000,
    groupSize: '2–10 Persons',
    difficulty: 'Easy',
    included: [
      'Pick up & drop in Jaipur / Udaipur in private AC cab',
      '7 nights in heritage palace hotels & luxury desert camp',
      'Daily breakfast and traditional Rajasthani dinners',
      'Camel safari & sunset dune dinner with Kalbelia dance',
      'Boating on Lake Pichola in Udaipur',
      'Guided tours of Amer Fort, City Palace, and Jaisalmer Fort',
    ],
    excluded: ['Flights/Trains', 'Monument entry fees', 'Personal shopping'],
    itinerary: [
      { day: 1, title: 'Arrival in Pink City Jaipur', description: 'Welcome in Jaipur. Check in to a historic Haveli hotel. Visit Chokhi Dhani for village cultural evening.', meals: 'Dinner', accommodation: 'Heritage Haveli, Jaipur' },
      { day: 2, title: 'Jaipur Forts & Palaces', description: 'Elephant ride / jeep ride to Amer Fort. Explore Hawa Mahal, City Palace, and Jantar Mantar.', meals: 'Breakfast, Dinner', accommodation: 'Heritage Haveli, Jaipur' },
      { day: 3, title: 'Jaipur to Jodhpur — Blue City', description: 'Drive to Jodhpur. Tour the massive Mehrangarh Fort and Umaid Bhawan Palace.', meals: 'Breakfast, Dinner', accommodation: 'Ajit Bhawan Palace, Jodhpur' },
      { day: 4, title: 'Jodhpur to Jaisalmer Desert', description: 'Drive to Golden City Jaisalmer. Transfer to Sam Sand Dunes for sunset camel safari and folk dance.', meals: 'Breakfast, Royal Dune Dinner', accommodation: 'Luxury Swiss Tents, Sam Dunes' },
      { day: 5, title: 'Jaisalmer Fort & Patwon Ki Haveli', description: 'Explore the living Golden Fort, Patwon Ki Haveli, and serene Gadisar Lake.', meals: 'Breakfast, Dinner', accommodation: 'Fort View Heritage Hotel' },
      { day: 6, title: 'Jaisalmer to Udaipur — City of Lakes', description: 'Scenic drive across Aravalli hills to Udaipur. Evening Lake Pichola boat cruise at golden hour.', meals: 'Breakfast, Dinner', accommodation: 'Fateh Garh Palace, Udaipur' },
      { day: 7, title: 'Udaipur City Palace & Jagmandir', description: 'Guided tour of Udaipur City Palace, Saheliyon Ki Bari, and Jagdish Temple.', meals: 'Breakfast, Royal Farewell Dinner', accommodation: 'Fateh Garh Palace, Udaipur' },
      { day: 8, title: 'Departure', description: 'Leisurely breakfast. Transfer to Udaipur Airport.', meals: 'Breakfast', accommodation: '—' },
    ],
    tags: ['Culture', 'Heritage', 'Family', 'Luxury'],
    featured: true,
  },

  // 8. KERALA
  {
    id: 'keraleeyam-gods-abode',
    title: 'Keraleeyam Abode — Backwater Houseboat & Munnar Tea Hills',
    destinationId: 'kerala',
    season: 'autumn',
    duration: '6 Days / 5 Nights',
    nights: 5,
    pricePerPerson: 19500,
    originalPrice: 26000,
    groupSize: '2–8 Persons',
    difficulty: 'Easy',
    included: [
      'Cochin airport pick up & drop in private AC car',
      '5 nights stay (1 night luxury Kettuvallam houseboat + 4 nights luxury resort)',
      'All meals on houseboat (Authentic Karimeen & Sadya)',
      'Munnar tea plantation & Mattupetty Dam tour',
      'Periyar wildlife boat safari in Thekkady',
      'Ayurvedic full-body spa treatment',
    ],
    excluded: ['Flights to Cochin', 'Personal expenses', 'Tips'],
    itinerary: [
      { day: 1, title: 'Arrive in Cochin to Munnar', description: 'Welcome at Cochin Airport. Drive through Cheeyappara waterfalls to misty Munnar tea hills.', meals: 'Dinner', accommodation: 'Tea County Resort, Munnar' },
      { day: 2, title: 'Munnar Tea Gardens & Eravikulam', description: 'Visit Tata Tea Museum, Eravikulam National Park (Nilgiri Tahr), and Mattupetty Dam lake.', meals: 'Breakfast, Dinner', accommodation: 'Tea County Resort, Munnar' },
      { day: 3, title: 'Munnar to Thekkady Spice Hills', description: 'Drive to Thekkady spice plantations. Boat safari on Periyar Lake to spot wild elephants.', meals: 'Breakfast, Dinner', accommodation: 'Spice Village, Thekkady' },
      { day: 4, title: 'Alleppey Luxury Houseboat Cruise', description: 'Board your private air-conditioned Kettuvallam houseboat. Cruise through narrow backwater canals.', meals: 'Breakfast, Lunch, Dinner', accommodation: 'Private Luxury Houseboat, Alleppey' },
      { day: 5, title: 'Alleppey to Kovalam Beach', description: 'Disembark houseboat. Drive to Kovalam beach. Afternoon Ayurvedic spa massage.', meals: 'Breakfast, Dinner', accommodation: 'Leela Kovalam Beach Resort' },
      { day: 6, title: 'Trivandrum Sightseeing & Departure', description: 'Visit Padmanabhaswamy Temple. Transfer to Trivandrum Airport.', meals: 'Breakfast', accommodation: '—' },
    ],
    tags: ['Honeymoon', 'Nature', 'Wellness'],
    featured: true,
  },

  // 9. HIMACHAL AUTUMN
  {
    id: 'himachali-devbhoomi-deodars',
    title: 'Himachali Devbhoomi — Deodar Valleys & Shimla Ridge',
    destinationId: 'himachal',
    season: 'autumn',
    duration: '6 Days / 5 Nights',
    nights: 5,
    pricePerPerson: 15500,
    originalPrice: 21000,
    groupSize: '2–10 Persons',
    difficulty: 'Easy',
    included: [
      'Chandigarh / Delhi private transfers',
      '5 nights luxury pine resort stay',
      'Daily breakfast and dinner',
      'Shimla Ridge & Mall Road heritage walk',
      'Kufri nature park & Jakhoo temple visit',
      'Apple orchard walk & cider tasting',
    ],
    excluded: ['Flights/Trains', 'Activity charges', 'Personal items'],
    itinerary: [
      { day: 1, title: 'Chandigarh to Shimla', description: 'Drive through Himalayan foothills to Shimla. Evening heritage walk on Mall Road and Ridge.', meals: 'Dinner', accommodation: 'Oberoi Cecil / Heritage Resort, Shimla' },
      { day: 2, title: 'Kufri & Mashobra Apple Orchards', description: 'Visit Kufri, Chini Bungalow, and Mashobra apple orchards in autumn golden harvest.', meals: 'Breakfast, Dinner', accommodation: 'Oberoi Cecil, Shimla' },
      { day: 3, title: 'Shimla to Kasauli Pine Woods', description: 'Drive to quiet colonial hill station Kasauli. Walk Gilbert Trail surrounded by autumn deodars.', meals: 'Breakfast, Dinner', accommodation: 'Kasauli Pine Resort' },
      { day: 4, title: 'Kullu Valley Excursion', description: 'Full day drive through Kullu valley alongside Beas river. Visit shawls factory and Naggar Castle.', meals: 'Breakfast, Dinner', accommodation: 'Kasauli Pine Resort' },
      { day: 5, title: 'Chail Palace & Highest Cricket Ground', description: 'Day trip to Chail Palace and world\'s highest cricket pitch surrounded by deodars.', meals: 'Breakfast, Dinner', accommodation: 'Kasauli Pine Resort' },
      { day: 6, title: 'Departure', description: 'Leisurely breakfast. Transfer to Chandigarh Airport / Railway Station.', meals: 'Breakfast', accommodation: '—' },
    ],
    tags: ['Family', 'Nature', 'Culture'],
    featured: false,
  },

  // 10. GOA
  {
    id: 'goan-sun-kissed-velvet',
    title: 'Goan Velvet Shores — Sun-Kissed Fiesta & Latin Heritage',
    destinationId: 'goa',
    season: 'winter',
    duration: '5 Days / 4 Nights',
    nights: 4,
    pricePerPerson: 17500,
    originalPrice: 23000,
    groupSize: '2–8 Persons',
    difficulty: 'Easy',
    included: [
      'Goa airport / railway station transfers in AC cab',
      '4 nights 4-star beachfront resort stay',
      'Daily breakfast & 2 candle-light beach dinners',
      'Mandovi River luxury yacht sunset cruise',
      'Old Goa UNESCO Churches & Fontainhas Latin Quarter tour',
      'Spice plantation tour with authentic Goan lunch',
    ],
    excluded: ['Flights to Goa', 'Water sports activities', 'Personal shopping'],
    itinerary: [
      { day: 1, title: 'Arrival in Goa & Beach Sunset', description: 'Transfer to South Goa beachfront resort. Evening stroll along white sands of Palolem / Varca.', meals: 'Dinner', accommodation: 'Taj Exotica / Alila Diwa, Goa' },
      { day: 2, title: 'Old Goa & Fontainhas Latin Quarter', description: 'Visit Basilica of Bom Jesus, Se Cathedral, and walk through colorful Portuguese villas in Panjim.', meals: 'Breakfast, Goan Lunch', accommodation: 'Taj Exotica, Goa' },
      { day: 3, title: 'Mandovi Sunset Yacht Cruise', description: 'Morning relax at private resort pool/beach. Evening luxury yacht cruise on Mandovi River with live music.', meals: 'Breakfast, Beach Dinner', accommodation: 'Taj Exotica, Goa' },
      { day: 4, title: 'Spice Plantation & Dudhsagar Waterfalls', description: 'Visit Sahakari spice farm and optional jeep safari to Dudhsagar Waterfalls.', meals: 'Breakfast, Dinner', accommodation: 'Taj Exotica, Goa' },
      { day: 5, title: 'Departure', description: 'Morning beach walks. Transfer to Goa Airport (Dabolim/Mopa).', meals: 'Breakfast', accommodation: '—' },
    ],
    tags: ['Honeymoon', 'Beach', 'Luxury'],
    featured: true,
  },

  // 11. MANALI & KASAULI
  {
    id: 'manali-kasauli-snow-sojourn',
    title: 'Himachali Snow Sojourn — Solang Valley Skiing & Log Chalets',
    destinationId: 'manali',
    season: 'winter',
    duration: '6 Days / 5 Nights',
    nights: 5,
    pricePerPerson: 16000,
    originalPrice: 22000,
    groupSize: '2–10 Persons',
    difficulty: 'Moderate',
    included: [
      'Chandigarh / Delhi cab transfers',
      '5 nights luxury log chalet & heated resort stay',
      'Daily breakfast and dinner',
      'Solang Valley snow sports & skiing entry',
      'Atal Tunnel & Sissu snow valley tour',
      'Old Manali Cafe crawl & Hadimba temple visit',
      'Bonfire evening with hot spiced wine',
    ],
    excluded: ['Flight/Train', 'Ski equipment rental', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Drive to Manali & Chalet Check-in', description: 'Drive through snowy mountain valleys to Manali. Check-in to a heated wooden chalet with fireplace.', meals: 'Welcome Dinner', accommodation: 'Luxury Chalet, Manali' },
      { day: 2, title: 'Solang Valley Snow Sports', description: 'Full day at Solang Valley. Enjoy skiing, snowmobiling, and paragliding against white peaks.', meals: 'Breakfast, Dinner', accommodation: 'Luxury Chalet, Manali' },
      { day: 3, title: 'Atal Tunnel & Sissu Snow Valley', description: 'Drive through Atal Tunnel to Sissu in Lahaul valley surrounded by frozen waterfalls.', meals: 'Breakfast, Dinner', accommodation: 'Luxury Chalet, Manali' },
      { day: 4, title: 'Hadimba Temple & Old Manali', description: 'Visit ancient Hadimba Devi Temple amidst snow-covered cedars. Cafe crawl in Old Manali.', meals: 'Breakfast, Dinner', accommodation: 'Luxury Chalet, Manali' },
      { day: 5, title: 'Kasauli Snow View Excursion', description: 'Drive to Kasauli. Walk Mall Road and enjoy bonfire by mountain views.', meals: 'Breakfast, Bonfire Dinner', accommodation: 'Kasauli Pine Resort' },
      { day: 6, title: 'Departure', description: 'Breakfast. Transfer back to Chandigarh / Delhi.', meals: 'Breakfast', accommodation: '—' },
    ],
    tags: ['Snow', 'Skiing', 'Adventure'],
    featured: true,
  },

  // 12. ANDAMAN
  {
    id: 'andaman-emerald-seas',
    title: 'Andaman Emerald Seas — Havelock Coral & Radhanagar Haven',
    destinationId: 'andaman',
    season: 'winter',
    duration: '6 Days / 5 Nights',
    nights: 5,
    pricePerPerson: 29500,
    originalPrice: 38000,
    groupSize: '2–8 Persons',
    difficulty: 'Easy',
    included: [
      'Port Blair airport transfers',
      '5 nights luxury island resort stay',
      'Daily breakfast & dinner',
      'Makruzz luxury catamaran ferry Port Blair ↔ Havelock',
      'Guided Scuba Diving / Snorkelling at Elephant Beach',
      'Visit Radhanagar Beach (Asia\'s Best Beach)',
      'Cellular Jail Light & Sound show tickets',
    ],
    excluded: ['Flights to Port Blair', 'Personal shopping', 'Water sports upgrades'],
    itinerary: [
      { day: 1, title: 'Arrive in Port Blair & Cellular Jail', description: 'Welcome at Port Blair Airport. Visit Corbyn\'s Cove beach and evening Light & Sound Show at Cellular Jail.', meals: 'Dinner', accommodation: 'Sinclairs Bayview, Port Blair' },
      { day: 2, title: 'Catamaran to Havelock & Radhanagar Beach', description: 'Board high-speed Makruzz catamaran to Havelock Island. Sunset at world-famous Radhanagar Beach.', meals: 'Breakfast, Dinner', accommodation: 'Taj Exotica / Barefoot Resort, Havelock' },
      { day: 3, title: 'Elephant Beach Scuba & Coral Reefs', description: 'Speedboat to Elephant Beach. Complimentary introductory scuba dive / sea walk amidst vibrant coral reefs.', meals: 'Breakfast, Dinner', accommodation: 'Taj Exotica, Havelock' },
      { day: 4, title: 'Kalapathar Beach & Neil Island Ferry', description: 'Sunrise at Kalapathar Beach. Ferry to quiet Neil Island (Shaheed Dweep). Visit Natural Rock Bridge.', meals: 'Breakfast, Dinner', accommodation: 'Sea Shell Resort, Neil Island' },
      { day: 5, title: 'Neil Island Beaches to Port Blair', description: 'Explore Bharatpur & Laxmanpur beaches. Evening catamaran back to Port Blair. Farewell seafood dinner.', meals: 'Breakfast, Dinner', accommodation: 'Sinclairs Bayview, Port Blair' },
      { day: 6, title: 'Departure', description: 'Leisurely breakfast. Transfer to Port Blair Airport.', meals: 'Breakfast', accommodation: '—' },
    ],
    tags: ['Islands', 'Scuba', 'Honeymoon', 'Luxury'],
    featured: true,
  },

  // 13. KASHMIR WINTER
  {
    id: 'kashmiri-barf-e-zabaan-winter',
    title: 'Kashmiri Barf-e-Zabaan — Winter Gulmarg & Snowfall Expedition',
    destinationId: 'kashmir-winter',
    season: 'winter',
    duration: '6 Days / 5 Nights',
    nights: 5,
    pricePerPerson: 21500,
    originalPrice: 28000,
    groupSize: '2–8 Persons',
    difficulty: 'Moderate',
    included: [
      'Private 4x4 snow-equipped vehicle transfers in Srinagar',
      '5 nights heated stay (2 nights luxury heated houseboat + 3 nights 4-star Gulmarg resort)',
      'Daily authentic Kashmiri Wazwan & breakfast',
      'Gulmarg Gondola Phase 1 snow tickets',
      'Guided Apharwat skiing & snowmobiling session',
      'Sonamarg snow sledge ride & Thajiwas glacier view',
      'Evening saffron kehwa by heated bukhari fireplace',
    ],
    excluded: ['Flights to Srinagar', 'Personal heavy snow boots hire', 'Travel insurance'],
    itinerary: [
      { day: 1, title: 'Arrive in Srinagar & Heated Houseboat Welcome', description: 'Warm welcome at snowy Srinagar airport. Transfer to a luxury heated houseboat on frozen Dal Lake with hot kehwa.', meals: 'Welcome Dinner', accommodation: 'Luxury Heated Houseboat, Dal Lake' },
      { day: 2, title: 'Snowy Srinagar & Pari Mahal View', description: 'Visit snow-covered Nishat Bagh, Shalimar Bagh, and historic Shankaracharya Temple with panoramic views of white Srinagar.', meals: 'Breakfast, Dinner', accommodation: 'Luxury Heated Houseboat, Dal Lake' },
      { day: 3, title: 'Drive to Gulmarg — Winter Capital of Asia', description: 'Scenic drive through pine forests covered in deep white snow to Gulmarg. Check-in to luxury heated ski resort.', meals: 'Breakfast, Dinner', accommodation: 'Khyber Himalayan Resort, Gulmarg' },
      { day: 4, title: 'Gulmarg Gondola & Apharwat Peak Skiing', description: 'Board Asia\'s highest cable car Gulmarg Gondola to Phase 2 (13,780 ft). Enjoy skiing and snowmobiling on white powder.', meals: 'Breakfast, Dinner', accommodation: 'Khyber Himalayan Resort, Gulmarg' },
      { day: 5, title: 'Sonamarg Snow Sledge & Thajiwas Glacier', description: 'Day trip to Sonamarg Valley of Gold turned Valley of Snow. Enjoy sledge rides over white snowfields.', meals: 'Breakfast, Dinner', accommodation: 'Khyber Himalayan Resort, Gulmarg' },
      { day: 6, title: 'Departure from Winter Wonderland', description: 'Leisurely breakfast. Transfer to Srinagar Airport for your return flight.', meals: 'Breakfast', accommodation: '—' },
    ],
    tags: ['Snow', 'Skiing', 'Honeymoon', 'Luxury'],
    featured: true,
  },
];

export const getPackagesByDestination = (destinationId: string): Package[] =>
  packages.filter((p) => p.destinationId === destinationId);

export const getPackageById = (id: string): Package | undefined =>
  packages.find((p) => p.id === id);

export const getFeaturedPackages = (): Package[] =>
  packages.filter((p) => p.featured);
