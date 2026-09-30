export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Art of Slow Travel: From Kashmiri Valleys to Keraleeyam Backwaters',
    slug: 'art-of-slow-travel',
    excerpt: 'In a world obsessed with rushed itineraries, slow travel invites you to linger, connect, and truly experience India\'s rich heritage and natural sanctuaries.',
    content: `The travel industry has long sold us on the idea that more is more—hit ten cities in a week, tick off landmarks, and hurry home. But a quiet revolution is underway. Slow travel, the art of immersing yourself deeply in fewer places, is transforming how we explore India.

Instead of sprinting through hill stations, imagine spending a full morning on a hand-carved shikara on Dal Lake in Srinagar, watching saffron Kehwa steam into the crisp spring air. Instead of racing between beaches, spend three quiet nights aboard a traditional houseboat floating along Alleppey backwaters.

**The Science of Slowing Down**

Research shows that our strongest travel memories aren't formed by how many places we visit, but by the emotional depth of our experiences. A quiet evening conversation with a local Khasi elder at Meghalaya's living root bridges will imprint far more vividly than ten rushed photo stops.

**How to Experience India Mindfully**

1. Choose one state or region per journey
2. Spend at least 3–4 nights per sanctuary
3. Savor authentic regional cuisine—ask local hosts, not search engines
4. Walk through ancient villages and heritage quarters
5. Leave room for serendipity—don't over-schedule

At 4 Seasons Holidays, every itinerary is designed with slow travel philosophy. We build in free mornings, private local encounters, and the luxury of unhurried time.`,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
    author: 'Meera Kapoor',
    date: 'September 15, 2024',
    readTime: '6 min read',
    category: 'Travel Philosophy',
    tags: ['Slow Travel', 'India', 'Mindful'],
  },
  {
    id: 'b2',
    title: 'High Passes & Azure Waters: A Photographer\'s Guide to Summer in Ladakh',
    slug: 'ladakh-photography-guide',
    excerpt: 'From camera settings to altitude preparation, everything you need to capture the surreal landscapes of Pangong Tso and Nubra Valley.',
    content: `There are few landscapes on Earth as raw and humbling as Ladakh. The contrast of harsh mountain granite, fluttering colorful prayer flags, and the glass-like azure reflection of Pangong Tso Lake creates a photographer's dream.

**When to Go**

The high-altitude summer season runs from June to September when Khardung La and Chang La passes are fully open and temperatures are pleasant (15–25°C).

**Must-Capture Spots**

- **Pangong Tso**: Arrive by 3 PM to catch the dramatic color transformation from turquoise to deep indigo at golden hour.
- **Thiksey Monastery**: Capture the morning prayer ceremony as sunlight illuminates the multi-tiered red and white gompa.
- **Hunder Sand Dunes**: Photograph Bactrian double-humped camels against cold desert dunes at sunset.

**Camera Tips**

- Use circular polarizers to tame harsh high-altitude reflections.
- ISO: Keep low (100–400) during day; use tripod for starfields at night.
- Keep batteries warm—mountain nights get chilly even in summer.

**The Golden Rule**: Remember to put the camera down for 10 minutes and just take in the silence of the Himalayas.`,
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=1200&q=80',
    author: 'Vikram Singh',
    date: 'August 22, 2024',
    readTime: '8 min read',
    category: 'Photography',
    tags: ['Ladakh', 'Himalayas', 'Photography', 'Summer'],
  },
  {
    id: 'b3',
    title: 'Rajputana in Autumn: Forts, Dunes & Royal Palaces',
    slug: 'rajasthan-autumn-royal-guide',
    excerpt: 'As monsoon recedes, Rajasthan comes alive with crisp desert winds, glowing havelis, and romantic lake cruises in Udaipur.',
    content: `October and November mark the finest time to explore Rajasthan. The scorching summer heat gives way to pleasant autumn breezes, ideal for exploring massive forts and desert safaris.

**Jaisalmer — The Golden City**

Nothing beats watching the sun dip behind Sam Sand Dunes while seated on camelback, followed by folk music, Kalbelia dance, and royal desert dining under a blanket of stars.

**Udaipur — City of Lakes**

Sail across Lake Pichola as the golden hour turns Jagmandir Island Palace into shimmering gold. Walk through City Palace galleries filled with peacock mosaics and mirrored courtrooms.

**Jaipur — The Pink City**

Ascend Amer Fort on elephant back, explore the pink stone facade of Hawa Mahal, and indulge in royal Rajasthani Thali featuring Dal Baati Churma and Laal Maas.`,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80',
    author: 'Aiko Tanaka',
    date: 'July 10, 2024',
    readTime: '7 min read',
    category: 'Destinations',
    tags: ['Rajasthan', 'Autumn', 'Royal Heritage', 'Culture'],
  },
  {
    id: 'b4',
    title: 'The Ultimate Packing List: One Bag for Himalayan Cold & Island Beaches',
    slug: 'ultimate-packing-list-all-seasons',
    excerpt: 'Whether you\'re heading to snow-draped Manali or tropical Andaman & Maldives, this packing guide lets you travel light without sacrificing comfort.',
    content: `After years of over-packing, our luxury concierges have perfected the single-bag packing strategy for Indian and island expeditions.

**The Core Wardrobe**

- 3 breathable merino wool / linen shirts
- 2 pairs of versatile pants (slim chinos & quick-dry trousers)
- 1 lightweight packable down jacket
- 1 rain shell / windbreaker
- Comfortable walking shoes & beach sandals

**Layer for the Season**

- **Himalaya Winter (Manali/Kashmir)**: Add thermal base layers, fleece, beanie, and gloves.
- **Island Summer (Goa/Andaman/Bali/Maldives)**: Add quick-dry swimwear, linen shirts, and UV sunglasses.
- **Desert Autumn (Rajasthan)**: Light cottons for day, light jacket for desert nights.

**The Rule of Threes**

Three tops, three bottoms, three footwear styles. Pack light, move freely, and spend your journey discovering memories rather than managing luggage.`,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80',
    author: 'Meera Kapoor',
    date: 'June 5, 2024',
    readTime: '5 min read',
    category: 'Tips & Guides',
    tags: ['Packing', 'Tips', 'All Seasons'],
  },
];

export const getBlogBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
