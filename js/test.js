// Create a package collection object to hold all package sets
const packageSets = {
  trekking: {
    title: "Goa Trekking Packages",
    containerId: "trekking-package-list",
    packages: [
      // Trekking packages
    ]
  },
  adventure: {
    title: "Exclusive Goa Adventure & Active Packages: Thrill-Seeker's Paradise",
    containerId: "adventure-package-list",
    packages: [
      // Adventure packages
    ]
  },
  cultural: {
    title: "Exclusive Goa Cultural Heritage Packages: Journey Through Time",
    containerId: "cultural-package-list",
    packages: [
      // Cultural packages
    ]
  },
  wildlife: {
    title: "Exclusive Goa Wildlife & Nature Packages: Biodiversity Discovery Journeys",
    containerId: "wildlife-package-list",
    packages: [
      // Wellness packages
    ]
  }
};

packageSets.trekking.packages = [
  {
    id: 1,
    mini_title: "Dudhsagar Falls Adventure Trek",
    title: "Dudhsagar Falls Adventure Trek - The Waterfall Explorer's Dream",
    description: "Embark on an unforgettable journey through the heart of Goa's spectacular Western Ghats with our signature Dudhsagar Falls Adventure Trek. This immersive 2-day experience takes you deep into Goa's lush wilderness to witness India's fifth tallest waterfall in all its magnificent glory. As you traverse verdant forest trails teeming with exotic flora and fauna, expert guides will share fascinating insights about the unique ecosystem that makes this region a biodiversity hotspot.\n\nDay one begins with a scenic drive to Kulem railway station, followed by an exhilarating trek through dense forest canopies, crossing bubbling streams and encountering diverse wildlife. The moment the magnificent 310-meter-high Dudhsagar Falls comes into view—its milky white cascades thundering down the mountainside—will leave you breathless. Spend the afternoon swimming in crystal-clear natural pools beneath the falls, where the refreshing mist creates a magical atmosphere unlike anywhere else in Goa.\n\nAs twilight approaches, our team will set up a comfortable campsite where you'll enjoy an authentic Goan dinner under starlit skies. The night spent in quality tents amid the sounds of the forest and the distant roar of the waterfall creates memories that will last a lifetime. Wake to a spectacular sunrise illuminating the falls, followed by a hearty breakfast before exploring upper viewpoints that offer panoramic vistas perfect for photography enthusiasts.\n\nThe descent trek brings new perspectives of the landscape, culminating in a visit to a traditional spice plantation where you'll learn about Goa's agricultural heritage while enjoying a delicious lunch surrounded by aromatic spices. This comprehensive package includes all necessary equipment, meals featuring local cuisine, professional guides trained in wilderness first aid, and comfortable transportation—everything designed to make your Dudhsagar adventure both safe and unforgettable.",
    photos: ["images/Packages/trekking/1.jpg", "images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg"],
    itinerary: [
      { day: "Day 1", time: "6:00 AM", activity: "Pickup from hotel in North Goa" },
      { day: "Day 1", time: "8:00 AM", activity: "Arrive at Kulem railway station, trek briefing and safety instructions" },
      { day: "Day 1", time: "9:00 AM", activity: "Begin trek through the lush Western Ghats forest trails" },
      { day: "Day 1", time: "12:30 PM", activity: "Packed lunch at a scenic viewpoint" },
      { day: "Day 1", time: "2:30 PM", activity: "Reach Dudhsagar Falls base" },
      { day: "Day 1", time: "3:00 PM", activity: "Swimming and relaxation at the natural pool beneath the falls" },
      { day: "Day 1", time: "5:00 PM", activity: "Setup camp near the falls" },
      { day: "Day 1", time: "7:00 PM", activity: "Bonfire dinner and overnight stay in tents" },
      { day: "Day 2", time: "6:00 AM", activity: "Sunrise viewing and morning tea" },
      { day: "Day 2", time: "7:30 AM", activity: "Breakfast at campsite" },
      { day: "Day 2", time: "9:00 AM", activity: "Trek to the upper viewpoints of Dudhsagar Falls" },
      { day: "Day 2", time: "12:00 PM", activity: "Begin descent trek" },
      { day: "Day 2", time: "2:00 PM", activity: "Lunch at local spice plantation" },
      { day: "Day 2", time: "3:30 PM", activity: "Spice plantation tour" },
      { day: "Day 2", time: "5:00 PM", activity: "Return journey to hotel" }
    ],
    includes: [
      "Professional trekking guide",
      "Camping equipment",
      "All meals",
      "Transportation from/to hotel",
      "Spice plantation visit",
      "Photography service"
    ]
  },
  {
    id: 2,
    mini_title: "Netravali Wildlife Sanctuary Trek",
    title: "Netravali Wildlife Sanctuary Trek - A Hidden Gem of Goa",
    description: "Discover one of Goa's best-kept secrets with our exclusive 3-day Netravali Wildlife Sanctuary Trek. This immersive wilderness journey takes you deep into the sanctuary's 211 square kilometers of protected biodiversity—a pristine haven for nature enthusiasts seeking an authentic connection with Goa's inland treasures. Far from the coastal crowds, Netravali offers a rare glimpse into the untouched Western Ghats ecosystem, recognized as a UNESCO World Heritage site for its exceptional biodiversity.\n\nYour adventure begins with a scenic drive through rural Goan villages to reach the sanctuary's entrance, where experienced naturalists will introduce you to the ecological significance of this remarkable habitat. The first day's trek winds through diverse ecosystems—from dense evergreen forests to open grasslands—bringing you to the mesmerizing Bubbling Lake (Vajrashakti), a natural phenomenon where gas bubbles continuously rise from the lakebed, creating a mystical atmosphere steeped in local legends.\n\nAccommodations at the historic forest rest house immerse you in nature while ensuring comfort after each day's exploration. Day two offers exceptional wildlife opportunities with a dawn bird watching excursion—where over 130 species including the Malabar pied hornbill and Indian pitta may be spotted—followed by a trek to the secluded Savari Waterfall, where you'll enjoy a gourmet picnic lunch amid nature's symphony. The afternoon nature interpretation walk with a wildlife expert reveals fascinating insights into the sanctuary's ecosystem, including medicinal plants used by local communities for generations.\n\nThe final day combines natural and cultural heritage with a visit to the ancient Mainapi rock carvings, followed by an authentic lunch in a Konkani home where you'll taste traditional dishes prepared with local ingredients. The journey concludes at Tanshikar Spice Farm, where sustainable organic farming practices preserve Goa's agricultural heritage. Throughout the expedition, our expert guides enhance your experience with their profound knowledge of local ecology, ensuring this trek delivers not just adventure but a deeper understanding of Goa's incredible biodiversity.",
    photos: ["images/Packages/trekking/2.jpg", "images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg"],
    itinerary: [
      { day: "Day 1", time: "7:00 AM", activity: "Pickup from hotel in South Goa" },
      { day: "Day 1", time: "9:30 AM", activity: "Arrive at Netravali Wildlife Sanctuary" },
      { day: "Day 1", time: "10:00 AM", activity: "Trek briefing and equipment check" },
      { day: "Day 1", time: "10:30 AM", activity: "Begin trek through the sanctuary's diverse ecosystems" },
      { day: "Day 1", time: "1:00 PM", activity: "Packed lunch amid nature" },
      { day: "Day 1", time: "2:30 PM", activity: "Visit to Bubbling Lake (Vajrashakti)" },
      { day: "Day 1", time: "4:30 PM", activity: "Arrive at base camp" },
      { day: "Day 1", time: "6:00 PM", activity: "Dinner and night stay in forest rest house" },
      { day: "Day 2", time: "5:30 AM", activity: "Early morning bird watching tour" },
      { day: "Day 2", time: "8:00 AM", activity: "Breakfast at camp" },
      { day: "Day 2", time: "9:30 AM", activity: "Trek to Savari Waterfall" },
      { day: "Day 2", time: "12:30 PM", activity: "Picnic lunch at waterfall" },
      { day: "Day 2", time: "2:00 PM", activity: "Nature interpretation walk with wildlife expert" },
      { day: "Day 2", time: "5:00 PM", activity: "Return to camp" },
      { day: "Day 2", time: "7:00 PM", activity: "Dinner and stargazing session" },
      { day: "Day 3", time: "6:30 AM", activity: "Breakfast at camp" },
      { day: "Day 3", time: "8:00 AM", activity: "Trek to Mainapi Heritage Site" },
      { day: "Day 3", time: "11:00 AM", activity: "Explore ancient rock carvings" },
      { day: "Day 3", time: "1:00 PM", activity: "Lunch at local Konkani home" },
      { day: "Day 3", time: "2:30 PM", activity: "Visit Tanshikar Spice Farm" },
      { day: "Day 3", time: "4:00 PM", activity: "Return journey to hotel" }
    ],
    includes: [
      "Expert naturalist guide",
      "Accommodation in forest rest house",
      "All meals (including authentic Goan cuisine)",
      "Wildlife spotting equipment",
      "Entry fees to all sites"
    ]
  },
  {
    id: 3,
    mini_title: "Coastal Cliffs Trek - A One-Day Adventure",
    title: "Coastal Cliffs Trek - A One-Day Adventure Along Goa’s Stunning Shores",
    description: "Experience the dramatic beauty of Goa's southern coastline with our Coastal Cliffs Trek, a perfect single-day adventure showcasing the stunning contrast between golden beaches and towering sea cliffs. This carefully crafted journey begins at the historic Cabo de Rama Fort—named after the Hindu mythological figure Lord Rama—where Portuguese colonial architecture meets breathtaking ocean views. After exploring the fort's ancient ramparts and hearing tales of its colorful history spanning over 500 years, you'll begin the coastal trek along paths less traveled by typical tourists.\n\nAs you traverse the cliff-top trails, the panoramic vistas of the Arabian Sea stretching to the horizon create perfect photo opportunities at every turn. Your knowledgeable guide will point out unique geological formations, endemic coastal plants that thrive in this challenging environment, and seabirds soaring on thermal currents rising from the cliffs. The first segment of the trek leads to the hidden paradise of Cola Beach—a pristine crescent of golden sand accessible primarily by sea or foot, ensuring an uncrowded experience unlike Goa's more popular beaches.\n\nMidday brings a special treat: a freshly prepared seafood lunch featuring the day's catch, served directly on the beach under swaying palms. After time to relax and swim in the turquoise waters, the journey continues to the spectacular Agonda viewpoint, where lucky trekkers often spot dolphins playing in the bay below. The afternoon light casts an enchanting glow across the coastline as you make your way down to award-winning Agonda Beach, consistently rated among Asia's finest shores.\n\nThe day culminates with a guided sunset meditation session on the beach, allowing you to connect deeply with the natural rhythm of the ocean and sky before returning to your hotel refreshed and inspired. This trek perfectly balances physical activity with cultural insights and natural beauty, making it ideal for travelers seeking to experience Goa's coastal splendor beyond the typical beach experience.",
    photos: ["images/Packages/trekking/3.jpg", "images/coastal1.jpg", "images/coastal2.jpg", "images/coastal3.jpg"],
    itinerary: [
      { day: "Day 1", time: "7:00 AM", activity: "Pickup from hotel" },
      { day: "Day 1", time: "8:00 AM", activity: "Arrive at Cabo de Rama Fort" },
      { day: "Day 1", time: "8:30 AM", activity: "Historical tour of the Portuguese fort" },
      { day: "Day 1", time: "9:30 AM", activity: "Begin coastal cliff trek along the Arabian Sea" },
      { day: "Day 1", time: "11:30 AM", activity: "Reach secluded Cola Beach" },
      { day: "Day 1", time: "12:30 PM", activity: "Freshly prepared seafood lunch on beach" },
      { day: "Day 1", time: "2:00 PM", activity: "Continue trek to Agonda viewpoint" },
      { day: "Day 1", time: "3:30 PM", activity: "Dolphin watching from clifftop" },
      { day: "Day 1", time: "4:30 PM", activity: "Descend to Agonda Beach" },
      { day: "Day 1", time: "5:30 PM", activity: "Sunset meditation session" },
      { day: "Day 1", time: "6:30 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Experienced local guide",
      "Seafood lunch and refreshments",
      "Transfer from/to hotel",
      "Beach activities",
      "Photography service"
    ]
  },
  {
    id: 4,
    mini_title: "Bhagwan Mahavir Wildlife Sanctuary",
    title: "Bhagwan Mahavir Wildlife Sanctuary Multi-Day Trek - 4 Days",
    description: "Our premium 4-Day Bhagwan Mahavir Wildlife Sanctuary Trek represents the ultimate deep-dive into Goa's magnificent inland wilderness. Covering Goa's largest protected area—spanning over 240 square kilometers of pristine Western Ghats—this expedition offers serious nature enthusiasts an unparalleled opportunity to disconnect from civilization and reconnect with nature's grandeur. The sanctuary, home to diverse wildlife including the elusive black panther, Indian bison, and over 200 bird species, provides the perfect backdrop for this transformative journey.\n\nThe adventure begins near Mollem, where our wildlife specialists provide comprehensive orientation about the sanctuary's ecological significance and the sustainable trekking practices we'll follow. The first day's journey traverses deciduous forests bursting with biodiversity, culminating at the dramatic Devil's Canyon viewpoint where the Mhadei River has carved a spectacular gorge through ancient rock. Each night features carefully selected campsites in clearings that optimize both comfort and immersion in nature, with quality equipment and hearty meals prepared by our experienced trek team.\n\nDay two's highlight is the visit to Tambdi Surla Temple—a 12th-century architectural marvel and Goa's oldest Hindu temple. Built from basalt in the Kadamba-Yadava style, this remote temple survived Portuguese destruction due to its hidden location deep within the forest. The afternoon trek follows ancient pilgrimage routes to a secluded campsite beside a pristine stream, where the evening brings a unique guided experience focusing on the fascinating nocturnal sounds of the forest.\n\nThe journey continues to Sonsogor waterfall on day three—a hidden cascade rarely visited by tourists—where you'll enjoy swimming in natural pools surrounded by pristine forest. The trek then ascends to the sanctuary's highest accessible point, offering breathtaking panoramic views across Goa's verdant hinterland. The final day combines natural and cultural experiences with visits to a specialist butterfly conservatory and a medicinal plant garden, where you'll learn how traditional knowledge of forest plants continues to influence modern medicine.\n\nThroughout this immersive expedition, our professional guides—trained in wilderness first aid, wildlife tracking, and forest ecology—ensure both your safety and a profound educational experience. This trek is ideal for those seeking a genuine wilderness adventure that reveals Goa's lesser-known natural treasures far beyond its famous beaches.",
    photos: ["images/Packages/trekking/4.jpg", "images/wildlife1.jpg", "images/wildlife2.jpg", "images/wildlife3.jpg"],
    itinerary: [
      { day: "Day 1", time: "6:30 AM", activity: "Pickup from hotel in Panjim" },
      { day: "Day 1", time: "8:30 AM", activity: "Arrive at sanctuary entrance near Mollem" },
      { day: "Day 1", time: "9:00 AM", activity: "Trek briefing and wildlife spotting introduction" },
      { day: "Day 1", time: "10:00 AM", activity: "Begin trek through deciduous forests" },
      { day: "Day 1", time: "1:00 PM", activity: "Lunch at forest clearing" },
      { day: "Day 1", time: "3:30 PM", activity: "Reach Devil's Canyon viewpoint" },
      { day: "Day 1", time: "5:00 PM", activity: "Arrive at first camp" },
      { day: "Day 1", time: "7:00 PM", activity: "Dinner and wildlife presentation" },

      { day: "Day 2", time: "6:00 AM", activity: "Sunrise trek to bird watching point" },
      { day: "Day 2", time: "8:00 AM", activity: "Breakfast at camp" },
      { day: "Day 2", time: "9:30 AM", activity: "Trek to ancient temple ruins" },
      { day: "Day 2", time: "12:30 PM", activity: "Packed lunch at scenic spot" },
      { day: "Day 2", time: "2:00 PM", activity: "Continue trek to Tambdi Surla Temple" },
      { day: "Day 2", time: "4:00 PM", activity: "Explore 12th-century temple architecture" },
      { day: "Day 2", time: "6:00 PM", activity: "Camp setup near stream" },
      { day: "Day 2", time: "7:30 PM", activity: "Dinner and night forest sounds experience" },

      { day: "Day 3", time: "6:30 AM", activity: "Morning meditation and yoga" },
      { day: "Day 3", time: "8:00 AM", activity: "Breakfast at camp" },
      { day: "Day 3", time: "9:30 AM", activity: "Trek to Sonsogor waterfall" },
      { day: "Day 3", time: "12:00 PM", activity: "Swimming and relaxation at waterfall" },
      { day: "Day 3", time: "2:00 PM", activity: "Packed lunch" },
      { day: "Day 3", time: "3:30 PM", activity: "Continue trek to highest point of sanctuary" },
      { day: "Day 3", time: "6:00 PM", activity: "Reach final campsite" },
      { day: "Day 3", time: "7:30 PM", activity: "Special Goan dinner and cultural stories" },

      { day: "Day 4", time: "7:00 AM", activity: "Breakfast at camp" },
      { day: "Day 4", time: "8:30 AM", activity: "Begin descending trek" },
      { day: "Day 4", time: "11:00 AM", activity: "Visit to butterfly conservatory" },
      { day: "Day 4", time: "1:00 PM", activity: "Lunch at eco-resort" },
      { day: "Day 4", time: "2:30 PM", activity: "Short trek to medicinal plant garden" },
      { day: "Day 4", time: "4:00 PM", activity: "Return journey to hotel" }
    ],

    includes: [
      "Professional wildlife guide and trekking expert",
      "All camping equipment (tents, sleeping bags)",
      "All meals (vegetarian and non-vegetarian options)",
      "Wildlife spotting equipment (binoculars, field guides)",
      "First aid and emergency support",
      "Transportation from/to hotel"
    ]
  },
  {
    id: 5,
    mini_title: "Moonlight Trek to Chapora Fort",
    title: "Moonlight Trek to Chapora Fort - Evening Special",
    description: "Experience Goa's coastal majesty from a completely different perspective with our exclusive Moonlight Trek to Chapora Fort, an enchanting evening journey combining history, breathtaking views, and the magical ambiance of twilight on the Arabian Sea. This specialized trek transforms the familiar into the extraordinary by exploring one of North Goa's iconic landmarks during the most atmospheric hours of the day—sunset through moonrise.\n\nThe adventure begins at vibrant Vagator Beach in the golden afternoon light, with a brief introduction to the historical significance of Chapora Fort in Goa's complex past. As you ascend the winding path up Chapora Hill during 'magic hour,' the warm light bathes the landscape in a photographer's dream palette of gold and amber. Your expert guide will pause at strategic viewpoints, revealing how this strategic position controlled maritime access to the Chapora River—a crucial advantage fought over by successive rulers including the Adil Shahi dynasty and Portuguese colonizers.\n\nUpon reaching the fort's imposing ruins just before sunset, you'll explore the centuries-old fortifications while your guide brings history to life with tales of naval battles, political intrigue, and the fort's famous recent appearance in iconic Indian cinema. The carefully timed arrival positions you perfectly for the main attraction: watching the sun melt into the Arabian Sea horizon from the fort's western ramparts—a spectacle that transforms the sky into a canvas of spectacular colors reflected on the ocean below.\n\nAs twilight deepens into dusk, enjoy an exclusive dining experience unlike any other—a specially prepared traditional Goan dinner served at a private setting within the fort grounds, featuring authentic dishes that connect you to the region's rich culinary heritage. After dinner, as moonlight bathes the landscape in silver, begin the magical descent trek illuminated by traditional lanterns, creating a mystical atmosphere that connects you to travelers of centuries past who navigated these same paths by similar light.\n\nThe evening culminates with a private beach bonfire under star-filled skies, where your guide will point out constellations and share local legends associated with the night sky. This uniquely timed trek offers a completely different experience of Goa's landscape, revealing how the changing light transforms familiar terrain into something magical and mysterious—perfect for couples seeking romance, photographers chasing unique light, or anyone wanting to experience Goa's beauty from a different perspective.",
    photos: ["images/Packages/trekking/5.jpg", "images/chapora1.jpg", "images/chapora2.jpg", "images/chapora3.jpg"],
    itinerary: [
      { day: "Day 1", time: "3:00 PM", activity: "Pickup from hotel in North Goa" },
      { day: "Day 1", time: "4:00 PM", activity: "Arrive at Vagator Beach base point" },
      { day: "Day 1", time: "4:30 PM", activity: "Begin trek up Chapora Hill during golden hour" },
      { day: "Day 1", time: "5:30 PM", activity: "Reach Chapora Fort" },
      { day: "Day 1", time: "6:00 PM", activity: "Historical tour of the fort" },
      { day: "Day 1", time: "6:30 PM", activity: "Sunset viewing from fort walls" },
      { day: "Day 1", time: "7:30 PM", activity: "Special dinner setup on fort grounds" },
      { day: "Day 1", time: "8:30 PM", activity: "Begin moonlight descent trek with lanterns" },
      { day: "Day 1", time: "9:30 PM", activity: "Beach bonfire and stargazing session" },
      { day: "Day 1", time: "10:30 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Expert guide with knowledge of fort history",
      "Special sunset dinner with Goan delicacies",
      "Traditional lanterns for night trek",
      "Photography service",
      "Beach bonfire arrangement",
      "Transportation from/to hotel"
    ]
  }
];

packageSets.cultural.packages = [
  {
    id: 1,
    mini_title: "Portuguese Colonial Legacy Tour",
    title: "Portuguese Colonial Legacy Tour - Architectural Marvels & European Heritage",
    description: `Immerse yourself in Goa's fascinating Portuguese colonial history with our comprehensive Portuguese Colonial Legacy Tour—a meticulously crafted 3-day journey through magnificent churches, historic mansions, and cultural landmarks that reveal the profound European influence that shaped Goa over 451 years of colonial rule.

Unlike typical sightseeing tours, this thoughtfully designed experience goes beyond famous facades to provide meaningful context through expert narration, private access to restricted areas, and authentic interactions with keepers of Portuguese-Goan heritage.

Throughout this immersive cultural experience, our expert guides—trained in colonial history, architecture, and Indo-Portuguese cultural fusion—provide scholarly context while ensuring comfortable logistics between sites. This package delivers far deeper understanding than standard tours, revealing how four and a half centuries of Portuguese presence created Goa's unique cultural landscape that remains distinct from the rest of India.`,
    photos: [
      "images/Packages/cultural/1.jpg",
      "images/portuguese1.jpg",
      "images/portuguese2.jpg",
      "images/portuguese3.jpg"
    ],
    itinerary: [
      // Day 1: Old Goa's Sacred Heritage
      { day: "Day 1", time: "8:30 AM", activity: "Pickup from your hotel in Goa" },
      { day: "Day 1", time: "9:30 AM", activity: "Arrive at UNESCO World Heritage Site of Old Goa" },
      { day: "Day 1", time: "10:00 AM", activity: "Guided exploration of Basilica of Bom Jesus with special access" },
      { day: "Day 1", time: "11:30 AM", activity: "Visit to Sé Cathedral - Asia's largest church" },
      { day: "Day 1", time: "1:00 PM", activity: "Traditional Portuguese-Goan lunch at heritage restaurant" },
      { day: "Day 1", time: "2:30 PM", activity: "Archaeological Museum tour with specialist guide" },
      { day: "Day 1", time: "4:00 PM", activity: "Ferry to Divar Island" },
      { day: "Day 1", time: "4:30 PM", activity: "Visit to traditional Portuguese-Goan home" },
      { day: "Day 1", time: "6:00 PM", activity: "Authentic family dinner with cultural stories" },
      { day: "Day 1", time: "8:00 PM", activity: "Return to hotel" },

      // Day 2: Fontainhas - The Latin Quarter
      { day: "Day 2", time: "9:00 AM", activity: "Breakfast at hotel" },
      { day: "Day 2", time: "10:00 AM", activity: "Walking tour of Fontainhas Latin Quarter" },
      { day: "Day 2", time: "12:00 PM", activity: "Traditional bakery visit with bread-making demonstration" },
      { day: "Day 2", time: "1:00 PM", activity: "Authentic Portuguese-Goan lunch experience" },
      { day: "Day 2", time: "3:00 PM", activity: "Visit to private collection of colonial artifacts" },
      { day: "Day 2", time: "4:30 PM", activity: "Azulejos tile appreciation workshop" },
      { day: "Day 2", time: "6:00 PM", activity: "Fado music performance with wine tasting" },
      { day: "Day 2", time: "7:30 PM", activity: "Dinner at contemporary Portuguese-influenced restaurant" },
      { day: "Day 2", time: "9:00 PM", activity: "Return to hotel" },

      // Day 3: Heritage Mansions & Colonial Lifestyle
      { day: "Day 3", time: "8:30 AM", activity: "Breakfast at hotel" },
      { day: "Day 3", time: "9:30 AM", activity: "Departure to Chandor village" },
      { day: "Day 3", time: "10:30 AM", activity: "Exclusive tour of Menezes Braganza Mansion" },
      { day: "Day 3", time: "12:30 PM", activity: "Traditional lunch at heritage property" },
      { day: "Day 3", time: "2:00 PM", activity: "Visit to Quepem's Palácio do Deão" },
      { day: "Day 3", time: "3:30 PM", activity: "Guided garden tour with botanical heritage" },
      { day: "Day 3", time: "4:30 PM", activity: "Portuguese-Goan tea experience with traditional sweets" },
      { day: "Day 3", time: "6:00 PM", activity: "Cultural heritage reflection session" },
      { day: "Day 3", time: "7:30 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Specialist architectural historian guide throughout the tour",
      "All entrance fees to historical sites and museums",
      "Special access to restricted areas in heritage buildings",
      "Private visit to traditional Portuguese-Goan home",
      "Authentic Portuguese-influenced Goan meals as specified in itinerary",
      "All transportation in comfortable air-conditioned vehicle",
      "Azulejos tile appreciation workshop with materials",
      "Fado music performance with wine tasting",
      "Heritage mansion visits with special private access",
      "Portuguese-Goan tea experience with traditional sweets",
      "Professional photography of architectural highlights (digital copies provided)",
      "Detailed cultural heritage information booklet",
      "Bottled water throughout the journey",
      "All applicable taxes, GST and heritage conservation contributions"
    ]
  },
  {
    id: 2,
    mini_title: "Sacred Goa Spiritual Journey",
    title: "Sacred Goa Spiritual Journey - Temples, Churches & Beyond",
    description: `Embark on a profound exploration of Goa's remarkably diverse spiritual landscape with our Sacred Goa Spiritual Journey—a thoughtfully designed 3-day experience that transcends ordinary religious tourism to reveal the deep spiritual connections that have shaped this unique region for centuries.
    
    This carefully balanced itinerary explores sacred sites across multiple faiths, providing meaningful insights into how Hinduism, Catholicism, and other spiritual traditions have coexisted and influenced each other to create Goa's distinctive spiritual character.

    Throughout this carefully crafted journey, our knowledgeable guides—with backgrounds in comparative religion and local spiritual traditions—provide thoughtful context that helps you understand both historical significance and living spiritual practices. This package offers genuine opportunities for spiritual appreciation across traditions, revealing how Goa's unique religious landscape contributes to its distinctive identity and continuing heritage.`,
    photos: [
      "images/Packages/cultural/2.jpg",
      "images/spiritual1.jpg",
      "images/spiritual2.jpg",
      "images/spiritual3.jpg"
    ],
    itinerary: [
      // Day 1: Ancient Roots & Colonial Faith
      { day: "Day 1", time: "8:00 AM", activity: "Pickup from your hotel in Goa" },
      { day: "Day 1", time: "9:30 AM", activity: "Visit to 12th-century Mahadeva Temple in Tambdi Surla" },
      { day: "Day 1", time: "11:00 AM", activity: "Traditional Hindu blessing ceremony" },
      { day: "Day 1", time: "12:00 PM", activity: "Visit to Brahma temple at Carambolim" },
      { day: "Day 1", time: "1:30 PM", activity: "Vegetarian lunch prepared according to temple traditions" },
      { day: "Day 1", time: "3:00 PM", activity: "Exploration of Basilica of Bom Jesus in Old Goa" },
      { day: "Day 1", time: "4:30 PM", activity: "Visit to adjacent Se Cathedral" },
      { day: "Day 1", time: "5:30 PM", activity: "Interfaith discussion with local religious representatives" },
      { day: "Day 1", time: "7:00 PM", activity: "Dinner featuring dishes from different Goan communities" },
      { day: "Day 1", time: "8:30 PM", activity: "Return to hotel" },

      // Day 2: Diverse Spiritual Expressions
      { day: "Day 2", time: "8:30 AM", activity: "Breakfast at hotel" },
      { day: "Day 2", time: "9:30 AM", activity: "Visit to Safa Masjid with cultural expert" },
      { day: "Day 2", time: "11:00 AM", activity: "Exploration of Shantadurga Temple" },
      { day: "Day 2", time: "12:30 PM", activity: "Traditional Saraswat lunch experience" },
      { day: "Day 2", time: "2:30 PM", activity: "Visit to Konkani household with ancestral shrine" },
      { day: "Day 2", time: "4:00 PM", activity: "Participation in traditional spiritual ceremonies" },
      { day: "Day 2", time: "5:30 PM", activity: "Evening aarti ceremony at riverside temple" },
      { day: "Day 2", time: "7:00 PM", activity: "Dinner with cultural performance" },
      { day: "Day 2", time: "8:30 PM", activity: "Return to hotel" },

      // Day 3: Personal Spiritual Connection
      { day: "Day 3", time: "6:00 AM", activity: "Optional sunrise yoga and meditation (beach location)" },
      { day: "Day 3", time: "8:00 AM", activity: "Breakfast at hotel" },
      { day: "Day 3", time: "9:30 AM", activity: "Visit to Shri Mangeshi Temple" },
      { day: "Day 3", time: "11:30 AM", activity: "Meeting with temple scholars" },
      { day: "Day 3", time: "1:00 PM", activity: "Traditional Goan-Hindu lunch" },
      { day: "Day 3", time: "2:30 PM", activity: "Visit to Reis Magos Church" },
      { day: "Day 3", time: "4:00 PM", activity: "Sunset reflection ceremony" },
      { day: "Day 3", time: "5:30 PM", activity: "Closing spiritual discussion" },
      { day: "Day 3", time: "7:00 PM", activity: "Farewell dinner with cultural elements" },
      { day: "Day 3", time: "8:30 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Expert theological guide with knowledge of multiple faith traditions",
      "All entrance fees to temples, churches, mosques and sacred sites",
      "Traditional Hindu blessing ceremony",
      "Interfaith discussion with local religious representatives",
      "All meals as specified in itinerary (vegetarian options always available)",
      "Transportation in comfortable air-conditioned vehicle",
      "Donations to all religious sites visited",
      "Participation in traditional spiritual ceremonies",
      "Sunrise yoga and meditation session with instructor (optional)",
      "Meeting with temple scholars and religious leaders",
      "Sunset reflection ceremony materials",
      "Spiritual guidebook covering Goa's religious diversity",
      "Prayer materials appropriate for different faiths",
      "Bottled water throughout the journey",
      "All applicable taxes and religious site conservation contributions"
    ]
  },
  {
    id: 3,
    mini_title: "Goan Culinary Heritage Expedition",
    title: "Goan Culinary Heritage Expedition - Flavors Through Time",
    description: `Embark on a sensory journey through Goa's extraordinary gastronomic landscape with our Goan Culinary Heritage Expedition—an immersive 3-day exploration that reveals how history, cultural exchange, and local ingredients have created one of India's most distinctive regional cuisines.

Unlike typical food tours focusing only on famous dishes, this comprehensive experience traces culinary evolution through Portuguese colonial influence, indigenous Konkani traditions, and the fascinating fusion that occurred over centuries of cultural intermingling, all while providing hands-on cooking experiences with master chefs and home cooks preserving ancestral recipes.

Throughout this gastronomic adventure, our culinary experts—including food historians, professional chefs, and community cooks—provide rich context connecting each dish to Goa's complex cultural tapestry. This package delivers both immediate sensory pleasure and deeper cultural understanding, revealing how Goa's extraordinary history can be tasted in every bite of its distinctive cuisine.`,
    photos: [
      "images/Packages/cultural/3.jpg",
      "images/culinary1.jpg",
      "images/culinary2.jpg",
      "images/culinary3.jpg"
    ],
    itinerary: [
      // Day 1: Portuguese-Goan Fusion
      { day: "Day 1", time: "7:00 AM", activity: "Pickup from your hotel in Goa" },
      { day: "Day 1", time: "7:30 AM", activity: "Guided exploration of Mapusa Market with chef" },
      { day: "Day 1", time: "9:30 AM", activity: "Visit to traditional spice plantation" },
      { day: "Day 1", time: "11:00 AM", activity: "Interactive spice identification workshop" },
      { day: "Day 1", time: "12:30 PM", activity: "Traditional plantation lunch with spice education" },
      { day: "Day 1", time: "2:30 PM", activity: "Cooking class in heritage Portuguese-Goan home" },
      { day: "Day 1", time: "5:30 PM", activity: "Enjoy feast of prepared Portuguese-influenced dishes" },
      { day: "Day 1", time: "7:00 PM", activity: "Feni and port wine appreciation session" },
      { day: "Day 1", time: "8:30 PM", activity: "Return to hotel" },

      // Day 2: Hindu-Goan Traditions & Local Specialties
      { day: "Day 2", time: "8:30 AM", activity: "Breakfast at hotel" },
      { day: "Day 2", time: "9:30 AM", activity: "Saraswat Brahmin cooking class" },
      { day: "Day 2", time: "12:00 PM", activity: "Lunch featuring prepared vegetarian specialties" },
      { day: "Day 2", time: "2:00 PM", activity: "Visit to traditional poder (baker)" },
      { day: "Day 2", time: "3:30 PM", activity: "Bread-making workshop" },
      { day: "Day 2", time: "5:00 PM", activity: "Visit to fishing village" },
      { day: "Day 2", time: "6:00 PM", activity: "Seafood preparation demonstration" },
      { day: "Day 2", time: "7:00 PM", activity: "Traditional seafood feast in village home" },
      { day: "Day 2", time: "9:00 PM", activity: "Return to hotel" },

      // Day 3: Artisanal Heritage & Contemporary Innovations
      { day: "Day 3", time: "9:00 AM", activity: "Breakfast at hotel" },
      { day: "Day 3", time: "10:00 AM", activity: "Visit to cashew feni distillery with tasting" },
      { day: "Day 3", time: "11:30 AM", activity: "Artisanal food producer visits (chorizo, balchão, vinegar)" },
      { day: "Day 3", time: "1:30 PM", activity: "Traditional pickle and preserve making workshop" },
      { day: "Day 3", time: "3:00 PM", activity: "Sweet-making demonstration (bebinca, dodol, pinaca)" },
      { day: "Day 3", time: "5:00 PM", activity: "Rest and refresh at hotel" },
      { day: "Day 3", time: "7:00 PM", activity: "Curated tasting menu at acclaimed restaurant" },
      { day: "Day 3", time: "9:30 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Professional chef guide for market tour",
      "All cooking class sessions with ingredients and equipment",
      "Market visit with ingredient shopping",
      "Spice plantation tour with spice identification workshop",
      "All meals mentioned in itinerary including special dining experiences",
      "Transportation in comfortable air-conditioned vehicle",
      "Traditional cooking demonstrations in authentic settings",
      "Hands-on cooking sessions (3 distinct cuisines)",
      "Feni and port wine appreciation session with tastings",
      "Bread-making workshop with traditional baker",
      "Seafood preparation demonstration with fishing community",
      "Visit to cashew feni distillery with tasting",
      "Artisanal food producer visits (chorizo, balchão, vinegar)",
      "Sweet-making demonstration (bebinca, dodol, pinaca)",
      "Curated tasting menu at acclaimed restaurant",
      "Comprehensive recipe collection of all dishes prepared",
      "Curated selection of Goan spice blends to take home",
      "Bottled water throughout the journey",
      "All applicable taxes and service charges"
    ]
  },
  {
    id: 4,
    mini_title: "Village Lifestyles of Goa",
    title: "Village Lifestyles of Goa - Rural Cultural Immersion",
    description: `Experience the soul of authentic Goa beyond tourist trails with our immersive Village Lifestyles of Goa package—a thoughtfully designed 3-day journey into the heart of rural communities where ancient traditions, sustainable practices, and genuine hospitality reveal a Goa few visitors ever discover.

This carefully crafted cultural immersion connects you with village artisans, farmers, and families who maintain centuries-old ways of life while adapting to the modern world, offering profound insights into Goan cultural identity through meaningful personal interactions rather than staged tourist demonstrations.

Throughout this immersive journey, our community facilitators—themselves from local villages—provide thoughtful context while ensuring respectful interaction with host communities. This package transcends superficial cultural tourism to create genuine connections with rural Goans maintaining living traditions that define the region's authentic character beyond beach resorts and tourist attractions.`,
    photos: [
      "images/Packages/cultural/4.jpeg",
      "images/village1.jpg",
      "images/village2.jpg",
      "images/village3.jpg"
    ],
    itinerary: [
      // Day 1: Traditional Livelihoods & Sustainable Practices
      { day: "Day 1", time: "8:00 AM", activity: "Pickup from your hotel in Goa" },
      { day: "Day 1", time: "9:00 AM", activity: "Visit to traditional pottery village" },
      { day: "Day 1", time: "10:00 AM", activity: "Hands-on pottery workshop with master artisans" },
      { day: "Day 1", time: "12:30 PM", activity: "Home-cooked lunch with potter family" },
      { day: "Day 1", time: "2:00 PM", activity: "Seasonal agricultural experience (cashew/paddy)" },
      { day: "Day 1", time: "4:00 PM", activity: "Traditional toddy tapping demonstration" },
      { day: "Day 1", time: "5:30 PM", activity: "Village evening rituals and interactions" },
      { day: "Day 1", time: "7:00 PM", activity: "Community dinner with local families" },
      { day: "Day 1", time: "8:30 PM", activity: "Return to hotel or optional homestay" },

      // Day 2: Village Crafts & Cultural Expression
      { day: "Day 2", time: "8:30 AM", activity: "Breakfast at accommodation" },
      { day: "Day 2", time: "9:30 AM", activity: "Traditional kunbi weaving household visit" },
      { day: "Day 2", time: "11:00 AM", activity: "Natural dyeing and basic weaving experience" },
      { day: "Day 2", time: "1:00 PM", activity: "Lunch with weaver family" },
      { day: "Day 2", time: "2:30 PM", activity: "Visit to master coir rope makers" },
      { day: "Day 2", time: "4:00 PM", activity: "Folk music immersion with village musicians" },
      { day: "Day 2", time: "5:30 PM", activity: "Participation in village festival preparations (seasonal)" },
      { day: "Day 2", time: "7:00 PM", activity: "Community dinner with cultural sharing" },
      { day: "Day 2", time: "8:30 PM", activity: "Return to hotel or continue homestay" },

      // Day 3: Traditional Wellness & Domestic Arts
      { day: "Day 3", time: "8:00 AM", activity: "Breakfast at accommodation" },
      { day: "Day 3", time: "9:00 AM", activity: "Visit to traditional herbal medicine practitioner" },
      { day: "Day 3", time: "10:30 AM", activity: "Medicinal preparation workshop" },
      { day: "Day 3", time: "12:30 PM", activity: "Healing foods lunch experience" },
      { day: "Day 3", time: "2:00 PM", activity: "Village home cooking session" },
      { day: "Day 3", time: "4:30 PM", activity: "Community service activity (optional)" },
      { day: "Day 3", time: "6:00 PM", activity: "Traditional farewell ceremony" },
      { day: "Day 3", time: "7:30 PM", activity: "Final dinner with host community" },
      { day: "Day 3", time: "9:00 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Community facilitator from local villages",
      "Hands-on pottery workshop with master artisans",
      "Seasonal agricultural experience participation",
      "Traditional toddy tapping demonstration and tasting",
      "All meals as specified (authentic village cuisine)",
      "Homestay option (1-2 nights) or return transfers to hotel",
      "Natural dyeing and basic weaving experience with materials",
      "Visit to master coir rope makers with demonstration",
      "Folk music immersion with village musicians",
      "Participation in village festival preparations (seasonal)",
      "Traditional herbal medicine practitioner consultation",
      "Medicinal preparation workshop with materials",
      "Village home cooking session with ingredients",
      "Community service activity materials (optional)",
      "Traditional farewell ceremony",
      "Handcrafted village souvenir",
      "Transportation in suitable vehicle (including rural access)",
      "Translation services for local dialects",
      "Contribution to village development fund",
      "All applicable taxes and community fees"
    ]
  },
  {
    id: 5,
    mini_title: "Festivals of Goa Experience",
    title: "Festivals of Goa Experience - Celebration & Tradition",
    description: `Immerse yourself in the vibrant celebratory spirit of Goa with our exceptional Festivals of Goa Experience—a dynamic cultural journey that synchronizes with the region's most significant celebrations to provide authentic participation rather than mere observation.

This specialized package adapts to Goa's festival calendar, allowing you to meaningfully engage with celebrations that reveal profound aspects of Goan identity through shared joy, spiritual devotion, and community traditions maintained for generations. Rather than viewing festivals as a tourist spectator, you'll be guided into appropriate participation that respects local customs while creating unforgettable personal connections.

Throughout the festival period, specially arranged meals showcase traditional festival cuisine—dishes prepared only during specific celebrations that often hold symbolic significance and cultural memory. By synchronizing your visit with these significant cultural moments, you'll experience dimensions of Goan heritage impossible to access during ordinary tourism, creating memories of shared celebration that reveal the true spirit of this extraordinary cultural crossroads.`,
    photos: [
      "images/Packages/cultural/5.jpeg",
      "images/festival1.jpg",
      "images/festival2.jpg",
      "images/festival3.jpg"
    ],
    itinerary: [
      // Day 1: Festival Preparation & Cultural Context
      { day: "Day 1", time: "9:00 AM", activity: "Pickup from your hotel in Goa" },
      { day: "Day 1", time: "10:00 AM", activity: "Orientation session with cultural expert on Shigmo significance" },
      { day: "Day 1", time: "11:30 AM", activity: "Visit to village preparing for Shigmo celebrations" },
      { day: "Day 1", time: "1:00 PM", activity: "Traditional pre-festival lunch with community members" },
      { day: "Day 1", time: "2:30 PM", activity: "Participation in folk dance rehearsal for procession" },
      { day: "Day 1", time: "4:00 PM", activity: "Visit to artisans creating Shigmo decorations and floats" },
      { day: "Day 1", time: "5:30 PM", activity: "Assist with decoration of community celebration space" },
      { day: "Day 1", time: "7:00 PM", activity: "Dinner with festival committee members" },
      { day: "Day 1", time: "8:30 PM", activity: "Evening folk music session" },
      { day: "Day 1", time: "10:00 PM", activity: "Return to hotel" },

      // Day 2: Main Festival Celebrations
      { day: "Day 2", time: "10:00 AM", activity: "Late breakfast at hotel" },
      { day: "Day 2", time: "11:30 AM", activity: "Visit to temple ceremonies marking festival beginning" },
      { day: "Day 2", time: "1:00 PM", activity: "Festival special lunch with local family" },
      { day: "Day 2", time: "3:00 PM", activity: "Privileged viewing position for main Shigmo procession" },
      { day: "Day 2", time: "5:00 PM", activity: "Guided participation in appropriate community celebrations" },
      { day: "Day 2", time: "7:00 PM", activity: "Traditional festival dinner experience" },
      { day: "Day 2", time: "8:30 PM", activity: "Evening folk performances and celebrations" },
      { day: "Day 2", time: "10:30 PM", activity: "Return to hotel" },

      // Day 3: Spiritual Aspects & Reflection
      { day: "Day 3", time: "9:00 AM", activity: "Breakfast at hotel" },
      { day: "Day 3", time: "10:30 AM", activity: "Visit to culminating religious ceremonies" },
      { day: "Day 3", time: "12:00 PM", activity: "Meeting with community elders to discuss festival significance" },
      { day: "Day 3", time: "1:30 PM", activity: "Final festival special meal" },
      { day: "Day 3", time: "3:00 PM", activity: "Participation in closing rituals where appropriate" },
      { day: "Day 3", time: "4:30 PM", activity: "Cultural reflection session with festival performers" },
      { day: "Day 3", time: "6:00 PM", activity: "Farewell dinner with festival hosts" },
      { day: "Day 3", time: "8:00 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Cultural expert specializing in specific festival traditions",
      "Orientation session on festival significance and etiquette",
      "Participation in pre-festival preparations with community",
      "All festival special meals as mentioned in itinerary",
      "Transportation in comfortable air-conditioned vehicle",
      "Privileged viewing positions for processions and performances",
      "Guided participation in appropriate community celebrations",
      "Meetings with key festival participants and organizers",
      "Special access to community celebrations not open to tourists",
      "Festival-specific cultural activities (varies by celebration)",
      "Traditional clothing rental if required for appropriate participation",
      "Festival special food tastings",
      "Cultural reflection sessions with performers",
      "Festival-specific souvenir",
      "Festival guidebook with historical and cultural context",
      "Professional photography of key festival moments",
      "Contributions to festival community organizations",
      "All applicable taxes and festival participation fees"
    ]
  }
];

packageSets.wildlife.packages = [
  {
    id: 1,
    mini_title: "Western Ghats Wilderness Expedition",
    title: "Western Ghats Wilderness Expedition - Rainforest & Wildlife",
    description: `Venture into one of the world's greatest biodiversity hotspots with our comprehensive Western Ghats Wilderness Expedition—an expertly guided 3-day journey into the spectacular forests and wildlife sanctuaries that form Goa's eastern frontier.

This immersive experience reveals a side of Goa completely unknown to beach tourists, where ancient rainforests harbor exceptional wildlife, rare plant species, and pristine ecosystems recognized by UNESCO as a World Heritage site. Unlike typical wildlife tours, our expedition combines professional naturalist expertise with comfortable logistics to ensure meaningful encounters with nature while supporting critical conservation efforts.`,
    photos: [
      "images/Packages/wildlife/1.jpeg",
      "images/western-ghats1.jpg",
      "images/western-ghats2.jpg",
      "images/western-ghats3.jpg"
    ],
    itinerary: [
      // Day 1: Bhagwan Mahavir Wildlife Sanctuary
      { day: "Day 1", time: "6:00 AM", activity: "Early pickup from your hotel in Goa" },
      { day: "Day 1", time: "7:30 AM", activity: "Arrive at sanctuary entrance for orientation" },
      { day: "Day 1", time: "8:00 AM", activity: "Morning guided forest walk with naturalist" },
      { day: "Day 1", time: "11:00 AM", activity: "Butterfly observation at prime habitat locations" },
      { day: "Day 1", time: "12:30 PM", activity: "Lunch at forest rest house with wildlife viewing" },
      { day: "Day 1", time: "2:30 PM", activity: "Jeep safari through remote sanctuary regions" },
      { day: "Day 1", time: "5:30 PM", activity: "Evening wildlife observation at watering hole" },
      { day: "Day 1", time: "7:00 PM", activity: "Dinner at accommodation" },
      { day: "Day 1", time: "8:30 PM", activity: "Optional night wilderness walk (permit dependent)" },
      { day: "Day 1", time: "10:00 PM", activity: "Overnight at wildlife sanctuary accommodation" },

      // Day 2: Mhadei Wildlife Sanctuary
      { day: "Day 2", time: "6:00 AM", activity: "Early morning tea/coffee" },
      { day: "Day 2", time: "6:30 AM", activity: "Dawn bird watching in prime habitat" },
      { day: "Day 2", time: "9:00 AM", activity: "Breakfast at field station" },
      { day: "Day 2", time: "10:00 AM", activity: "Trek to hidden waterfall through pristine forest" },
      { day: "Day 2", time: "12:30 PM", activity: "Picnic lunch at waterfall location" },
      { day: "Day 2", time: "2:00 PM", activity: "Wildlife tracking and sign identification walk" },
      { day: "Day 2", time: "4:30 PM", activity: "Visit to scenic vista point overlooking sanctuary" },
      { day: "Day 2", time: "6:00 PM", activity: "Return to accommodation" },
      { day: "Day 2", time: "7:30 PM", activity: "Dinner with wildlife presentation" },
      { day: "Day 2", time: "8:30 PM", activity: "Nocturnal wildlife observation (seasonal)" },

      // Day 3: Cotigao Wildlife Sanctuary & Indigenous Knowledge
      { day: "Day 3", time: "6:30 AM", activity: "Breakfast at accommodation" },
      { day: "Day 3", time: "7:30 AM", activity: "Transfer to Cotigao Wildlife Sanctuary" },
      { day: "Day 3", time: "8:30 AM", activity: "Morning nature walk in dry deciduous habitat" },
      { day: "Day 3", time: "10:30 AM", activity: "Visit to wildlife rehabilitation center" },
      { day: "Day 3", time: "12:00 PM", activity: "Meet with indigenous Velip community guides" },
      { day: "Day 3", time: "1:00 PM", activity: "Traditional forest ingredients lunch" },
      { day: "Day 3", time: "2:30 PM", activity: "Indigenous knowledge forest walk" },
      { day: "Day 3", time: "4:30 PM", activity: "Conservation discussion with local experts" },
      { day: "Day 3", time: "6:00 PM", activity: "Closing wildlife observation session" },
      { day: "Day 3", time: "7:30 PM", activity: "Return journey to your hotel" }
    ],
    includes: [
      "Professional wildlife naturalist with Western Ghats expertise",
      "Additional specialist guide for groups of 6 or more",
      "All sanctuary and forest entry permits",
      "Jeep safari in Bhagwan Mahavir Wildlife Sanctuary",
      "Accommodation for 2 nights in wildlife lodges or forest rest houses",
      "All meals (breakfast, lunch, dinner) as specified in itinerary",
      "Transportation in comfortable safari-suitable vehicle",
      "Wildlife spotting equipment (binoculars, spotting scopes, field guides)",
      "Night wildlife walk (subject to forest department permission)",
      "Bird watching sessions with specialist guide",
      "Visit to wildlife rehabilitation center",
      "Traditional meal with Velip indigenous community",
      "Conservation contribution to local wildlife initiatives",
      "Wildlife checklist and expedition log",
      "Professional naturalist presentation on Western Ghats biodiversity",
      "First aid kit and emergency communication device",
      "Bottled water and trail snacks throughout",
      "All applicable taxes, wildlife sanctuary fees and conservation charges"
    ]
  },
  {
    id: 2,
    mini_title: "Avian Paradise: Birding Across Goa",
    title: "Avian Paradise: Birding Across Goa - Feathered Treasures",
    description: `Discover why Goa ranks among India's premier birding destinations with our specialized Avian Paradise: Birding Across Goa package—an expertly guided 3-day exploration of the region's exceptional avian diversity across multiple habitat types.

Designed by ornithologists specifically for bird enthusiasts of all experience levels, this comprehensive birding adventure provides access to prime locations where over 450 bird species have been recorded, including Western Ghats endemics, migratory visitors, and rare specialties that make Goa a bucket-list destination for global birders.`,
    photos: [
      "images/Packages/wildlife/2.png",
      "images/birding1.jpg",
      "images/birding2.jpg",
      "images/birding3.jpg"
    ],
    itinerary: [
      // Day 1: Wetlands & Riverine Habitats
      { day: "Day 1", time: "5:30 AM", activity: "Early pickup from your hotel in Goa" },
      { day: "Day 1", time: "6:15 AM", activity: "Arrive at Carambolim Lake for dawn birding" },
      { day: "Day 1", time: "9:00 AM", activity: "Field breakfast with continued bird observation" },
      { day: "Day 1", time: "10:30 AM", activity: "Birding in surrounding agricultural habitats" },
      { day: "Day 1", time: "12:30 PM", activity: "Lunch at local restaurant" },
      { day: "Day 1", time: "2:00 PM", activity: "Private boat birding excursion on Zuari River" },
      { day: "Day 1", time: "4:30 PM", activity: "Birding at Curtorim wetlands" },
      { day: "Day 1", time: "6:30 PM", activity: "Dinner with day's species list review" },
      { day: "Day 1", time: "8:00 PM", activity: "Return to hotel or optional owling excursion" },
      { day: "Day 1", time: "9:30 PM", activity: "Overnight at accommodation" },

      // Day 2: Western Ghats Forest Birds
      { day: "Day 2", time: "5:30 AM", activity: "Early breakfast at accommodation" },
      { day: "Day 2", time: "6:30 AM", activity: "Arrive at Bhagwan Mahavir Sanctuary for dawn chorus" },
      { day: "Day 2", time: "7:00 AM", activity: "Forest birding focusing on endemic species" },
      { day: "Day 2", time: "10:30 AM", activity: "Refreshment break with continued observation" },
      { day: "Day 2", time: "11:30 AM", activity: "Specialized birding in bamboo habitat" },
      { day: "Day 2", time: "1:00 PM", activity: "Picnic lunch in forest setting" },
      { day: "Day 2", time: "2:30 PM", activity: "Afternoon birding at stream and forest edges" },
      { day: "Day 2", time: "5:00 PM", activity: "Evening birding for crepuscular species" },
      { day: "Day 2", time: "7:00 PM", activity: "Dinner at accommodation" },
      { day: "Day 2", time: "8:30 PM", activity: "Optional owling expedition (seasonal)" },

      // Day 3: Coastal & Mangrove Specialties
      { day: "Day 3", time: "6:00 AM", activity: "Breakfast at accommodation" },
      { day: "Day 3", time: "7:00 AM", activity: "Morning birding at Morjim Beach" },
      { day: "Day 3", time: "9:30 AM", activity: "Shorebird identification session" },
      { day: "Day 3", time: "11:00 AM", activity: "Transfer to Salim Ali Bird Sanctuary" },
      { day: "Day 3", time: "12:00 PM", activity: "Lunch at local restaurant" },
      { day: "Day 3", time: "1:30 PM", activity: "Boat expedition through mangrove sanctuary" },
      { day: "Day 3", time: "4:00 PM", activity: "Specialized hummingbird garden observation" },
      { day: "Day 3", time: "5:30 PM", activity: "Final species list compilation and review" },
      { day: "Day 3", time: "6:30 PM", activity: "Farewell dinner with birding highlights discussion" },
      { day: "Day 3", time: "8:00 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Expert ornithologist guide specializing in Goan avifauna",
      "Additional birding guide for groups of 6 or more",
      "Professional spotting scope and field guides",
      "All sanctuary and forest entry permits",
      "Boat excursions on Zuari River and Salim Ali Bird Sanctuary",
      "All transportation in birding-suitable vehicle",
      "Field breakfast during prime birding hours",
      "All meals as specified in itinerary",
      "Specialized birding in various habitats (wetlands, forests, coastal)",
      "Optional owling excursion (weather permitting)",
      "Digital checklist of observed species",
      "Bird photography guidance",
      "Visit to specialized hummingbird garden",
      "Contribution to bird conservation initiatives",
      "First aid kit and field necessities",
      "Bottled water and field refreshments",
      "All applicable taxes and sanctuary fees"
    ]
  },
  {
    id: 3,
    mini_title: "Marine Discovery Expedition",
    title: "Marine Discovery Expedition - Underwater Goa",
    description: `Experience the spectacular marine ecosystems of the Arabian Sea with our immersive Marine Discovery Expedition—a comprehensive 3-day underwater adventure revealing the remarkable aquatic biodiversity that thrives along Goa's 105-kilometer coastline.
   
   Unlike typical beach tourism focusing only on surface pleasures, this specialized package combines expert marine biology guidance with various water exploration techniques to connect you intimately with diverse marine habitats—from vibrant coral reefs and mysterious shipwrecks to rich mangrove nurseries and open-ocean ecosystems. Whether you're an experienced diver or complete novice, our carefully designed program provides appropriate options for all comfort levels while delivering fascinating insights into marine conservation and ecosystem function.`,
    photos: [
      "images/Packages/wildlife/3.jpeg",
      "images/marine1.jpg",
      "images/marine2.jpg",
      "images/marine3.jpg"
    ],
    itinerary: [
      // Day 1: Reef Ecosystems & Marine Introduction
      { day: "Day 1", time: "8:00 AM", activity: "Pickup from your hotel in Goa" },
      { day: "Day 1", time: "9:00 AM", activity: "Marine environment orientation with biologist" },
      { day: "Day 1", time: "10:30 AM", activity: "Boat departure to Grande Island" },
      { day: "Day 1", time: "11:00 AM", activity: "Guided snorkeling at protected reef (or diving for certified divers)" },
      { day: "Day 1", time: "1:00 PM", activity: "Lunch aboard boat with marine observation" },
      { day: "Day 1", time: "2:30 PM", activity: "Exploration of 'Suzy's Wreck' site (diving/glass-bottom boat)" },
      { day: "Day 1", time: "4:30 PM", activity: "Return to shore" },
      { day: "Day 1", time: "5:00 PM", activity: "Marine laboratory session examining collected plankton" },
      { day: "Day 1", time: "7:00 PM", activity: "Seafood dinner with marine ecosystem discussion" },
      { day: "Day 1", time: "8:30 PM", activity: "Return to hotel" },

      // Day 2: Mangrove Ecosystems & Citizen Science
      { day: "Day 2", time: "8:30 AM", activity: "Breakfast at hotel" },
      { day: "Day 2", time: "9:30 AM", activity: "Transfer to Chapora River mangroves" },
      { day: "Day 2", time: "10:00 AM", activity: "Safety briefing and kayaking introduction" },
      { day: "Day 2", time: "10:30 AM", activity: "Guided kayaking exploration of mangrove ecosystem" },
      { day: "Day 2", time: "12:30 PM", activity: "Picnic lunch in mangrove setting" },
      { day: "Day 2", time: "2:00 PM", activity: "Citizen science marine conservation project participation" },
      { day: "Day 2", time: "4:30 PM", activity: "Beach cleanup activity and debris analysis" },
      { day: "Day 2", time: "5:30 PM", activity: "Marine biology presentation with underwater photography" },
      { day: "Day 2", time: "7:00 PM", activity: "Dinner at coastal restaurant" },
      { day: "Day 2", time: "8:30 PM", activity: "Return to hotel" },

      // Day 3: Dolphin Research & Underwater Trail
      { day: "Day 3", time: "7:30 AM", activity: "Breakfast at hotel" },
      { day: "Day 3", time: "8:30 AM", activity: "Dolphin research briefing at marine center" },
      { day: "Day 3", time: "9:00 AM", activity: "Boat departure for dolphin research excursion" },
      { day: "Day 3", time: "11:00 AM", activity: "Data recording and behavior observation" },
      { day: "Day 3", time: "12:30 PM", activity: "Lunch aboard research vessel" },
      { day: "Day 3", time: "1:30 PM", activity: "Transfer to Grande Island" },
      { day: "Day 3", time: "2:00 PM", activity: "Underwater trail experience with marine interpretation" },
      { day: "Day 3", time: "4:00 PM", activity: "Traditional fishing demonstration with local family" },
      { day: "Day 3", time: "5:30 PM", activity: "Sustainable seafood beach preparation and dinner" },
      { day: "Day 3", time: "7:30 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Marine biologist guide specializing in Arabian Sea ecosystems",
      "Cetacean expert for dolphin research excursion",
      "Standard snorkeling equipment (mask, snorkel, fins)",
      "Boat excursions to Grande Island reef systems",
      "Glass-bottom boat tour for non-snorkelers",
      "Guided kayaking in mangrove ecosystems with equipment",
      "All meals as specified in the itinerary",
      "Sustainable seafood experiences",
      "Marine laboratory session with microscopes",
      "Citizen science marine conservation project participation",
      "Beach cleanup materials and analysis tools",
      "Underwater trail experience with interpretation",
      "Dolphin research data collection participation",
      "Traditional fishing demonstration with local family",
      "Marine conservation contribution",
      "Detailed marine life identification materials",
      "Transportation between marine sites",
      "Bottled water throughout"
    ]
  },
  {
    id: 4,
    mini_title: "Spice Plantation & Wellness Retreat",
    title: "Spice Plantation & Herbal Wellness Retreat - Natural Healing",
    description: `Immerse yourself in nature's medicinal bounty with our rejuvenating Spice Plantation & Herbal Wellness Retreat—a thoughtfully curated 3-day experience combining Goa's renowned spice gardens with traditional healing practices for comprehensive mind-body restoration.
  
  Unlike conventional spa retreats, this unique package connects wellness directly to natural ecosystems through guided exploration of organic spice plantations, personalized Ayurvedic consultations, and hands-on learning about botanical medicine traditions that have flourished in Goa for centuries. Whether seeking stress relief, natural health knowledge, or simply deeper connection with tropical plant wisdom, this balanced program delivers authentic wellness experiences rooted in Goa's rich botanical heritage.`,
    photos: [
      "images/Packages/wildlife/4.jpg",
      "images/spice1.jpg",
      "images/spice2.jpg",
      "images/spice3.jpg"
    ],
    itinerary: [
      // Day 1: Spice Plantation Immersion & Natural Remedies
      { day: "Day 1", time: "8:30 AM", activity: "Pickup from your hotel in Goa" },
      { day: "Day 1", time: "9:30 AM", activity: "Arrival at organic spice plantation" },
      { day: "Day 1", time: "10:00 AM", activity: "Comprehensive plantation tour with master botanist" },
      { day: "Day 1", time: "12:00 PM", activity: "Organic plantation lunch featuring estate-grown ingredients" },
      { day: "Day 1", time: "1:30 PM", activity: "Traditional home remedies workshop" },
      { day: "Day 1", time: "3:30 PM", activity: "Spice-infused steam treatment experience" },
      { day: "Day 1", time: "5:00 PM", activity: "Evening tea and relaxation in plantation gardens" },
      { day: "Day 1", time: "6:30 PM", activity: "Rasayana longevity dinner with wellness explanation" },
      { day: "Day 1", time: "8:00 PM", activity: "Return to accommodation or optional plantation stay" },

      // Day 2: Ayurvedic Personalization & Botanical Wisdom
      { day: "Day 2", time: "7:00 AM", activity: "Morning herbal tea in plantation setting" },
      { day: "Day 2", time: "8:00 AM", activity: "Light breakfast according to Ayurvedic principles" },
      { day: "Day 2", time: "9:30 AM", activity: "Personal Ayurvedic consultation and dosha assessment" },
      { day: "Day 2", time: "11:30 AM", activity: "Customized herbal formulation preparation" },
      { day: "Day 2", time: "1:00 PM", activity: "Balanced Ayurvedic lunch" },
      { day: "Day 2", time: "2:30 PM", activity: "Pharmacy in the forest medicinal plant walk" },
      { day: "Day 2", time: "4:00 PM", activity: "Personalized herbal product creation workshop" },
      { day: "Day 2", time: "6:00 PM", activity: "Constitution-appropriate dinner" },
      { day: "Day 2", time: "7:30 PM", activity: "Evening relaxation practice" },
      { day: "Day 2", time: "8:30 PM", activity: "Return to accommodation" },

      // Day 3: Integrated Wellness Experience
      { day: "Day 3", time: "6:30 AM", activity: "Morning yoga and meditation in plantation setting" },
      { day: "Day 3", time: "8:00 AM", activity: "Constitution-specific breakfast" },
      { day: "Day 3", time: "9:30 AM", activity: "Traditional Abhyanga synchronized massage treatment" },
      { day: "Day 3", time: "11:00 AM", activity: "Shirodhara therapy experience" },
      { day: "Day 3", time: "12:30 PM", activity: "Light rejuvenation lunch" },
      { day: "Day 3", time: "2:00 PM", activity: "Personalized wellness cooking class" },
      { day: "Day 3", time: "4:30 PM", activity: "Final relaxation session and wellness plan review" },
      { day: "Day 3", time: "6:00 PM", activity: "Farewell dinner featuring created recipes" },
      { day: "Day 3", time: "7:30 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Comprehensive spice plantation tour with master botanist",
      "Organic plantation lunch featuring estate-grown ingredients",
      "Traditional home remedies workshop with Ayurvedic practitioner",
      "Spice-infused steam treatment in traditional wooden chamber",
      "Rasayana longevity dinner with wellness explanation",
      "Personalized Ayurvedic consultation with qualified practitioner",
      "Customized herbal formulation preparation",
      "Medicinal plant identification walk with ethnobotanist",
      "Personalized herbal product creation workshop",
      "Constitution-appropriate meals as specified in itinerary",
      "Morning yoga and meditation sessions",
      "Traditional Abhyanga synchronized massage",
      "Shirodhara therapy experience",
      "Personalized wellness cooking class",
      "All meals as specified in the itinerary",
      "Comfortable air-conditioned transportation",
      "Bottled water throughout",
      "Expert guides and practitioners throughout the program",
      "Contribution to plantation sustainability projects",
      "Herbal wellness gift pack including personalized formulations"
    ]
  },
  {
    id: 5,
    mini_title: "Goan Geology & Landscape Expedition",
    title: "Goan Geology & Landscape Expedition - Earth Science Adventure",
    description: `Discover the fascinating forces that shaped Goa's spectacular landscapes with our unique Goan Geology & Landscape Expedition—an intellectually stimulating 3-day journey revealing the remarkable earth science stories hidden beneath this beautiful region.

Unlike typical nature tours focusing only on visible wildlife and plants, this specialized package unveils Goa's geological wonders through expert interpretation that connects ancient rock formations, dramatic laterite plateaus, and meandering river systems to the broader story of Earth's dynamic processes. Whether you're a dedicated geology enthusiast or simply curious about how landscapes form, this comprehensive exploration provides fascinating insights into the physical foundations that create Goa's diverse natural environments.`,
    photos: [
      "images/Packages/wildlife/5.jpg",
      "images/geology1.jpg",
      "images/geology2.jpg",
      "images/geology3.jpg"
    ],
    itinerary: [
      // Day 1: Ancient Rock Formations & Mining Heritage
      { day: "Day 1", time: "7:30 AM", activity: "Pickup from your hotel in Goa" },
      { day: "Day 1", time: "9:30 AM", activity: "Arrive at Dudhsagar Falls base" },
      { day: "Day 1", time: "10:00 AM", activity: "Geological interpretation of waterfall formations" },
      { day: "Day 1", time: "12:00 PM", activity: "Field lunch with continued observation" },
      { day: "Day 1", time: "1:30 PM", activity: "Visit to abandoned iron mines with mineral exploration" },
      { day: "Day 1", time: "3:30 PM", activity: "Laterite formation interpretation" },
      { day: "Day 1", time: "5:00 PM", activity: "Rock and mineral identification workshop" },
      { day: "Day 1", time: "7:00 PM", activity: "Dinner with geological history presentation" },
      { day: "Day 1", time: "8:30 PM", activity: "Return to accommodation" },

      // Day 2: Coastal Geological Features
      { day: "Day 2", time: "8:00 AM", activity: "Breakfast at accommodation" },
      { day: "Day 2", time: "9:00 AM", activity: "Visit to laterite sea cliffs at Vagator" },
      { day: "Day 2", time: "10:30 AM", activity: "Beach formation and dynamics explanation" },
      { day: "Day 2", time: "12:00 PM", activity: "Lunch at coastal restaurant" },
      { day: "Day 2", time: "1:30 PM", activity: "Chapora River estuary geomorphology exploration" },
      { day: "Day 2", time: "3:30 PM", activity: "Shell midden archaeological-geological site visit" },
      { day: "Day 2", time: "5:00 PM", activity: "Sunset coastal erosion observation" },
      { day: "Day 2", time: "7:00 PM", activity: "Seafood dinner with marine geology discussion" },
      { day: "Day 2", time: "8:30 PM", activity: "Return to accommodation" },

      // Day 3: Inland Water Systems & Plateau Landscapes
      { day: "Day 3", time: "7:30 AM", activity: "Breakfast at accommodation" },
      { day: "Day 3", time: "8:30 AM", activity: "Visit to 'Bubbling Lake' (Kesarval Spring)" },
      { day: "Day 3", time: "10:30 AM", activity: "Laterite plateau ecology and geology" },
      { day: "Day 3", time: "12:30 PM", activity: "Field lunch at scenic viewpoint" },
      { day: "Day 3", time: "2:00 PM", activity: "Rivona cave formation exploration" },
      { day: "Day 3", time: "4:00 PM", activity: "Panoramic viewpoint of Zuari River basin" },
      { day: "Day 3", time: "5:30 PM", activity: "Geological summary session with sample collection review" },
      { day: "Day 3", time: "7:00 PM", activity: "Farewell dinner with earth science highlights" },
      { day: "Day 3", time: "8:30 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Expert geologist guide specializing in Western Ghats formations",
      "Comprehensive interpretation of Dudhsagar Falls' geological history",
      "Guided exploration of abandoned iron mines",
      "Mineral and rock identification workshop",
      "Geological study of laterite sea cliffs at Vagator",
      "Chapora River estuary sedimentation analysis",
      "Shell midden archaeological and geological site visit",
      "Visit to 'Bubbling Lake' to study groundwater dynamics",
      "Laterite plateau ecology and geology explanation",
      "Exploration of Rivona cave formations with archaeological context",
      "Panoramic viewpoint exploration of Zuari River basin",
      "All field equipment (rock hammers, hand lenses, geological charts)",
      "All meals as specified in itinerary",
      "Air-conditioned transportation between sites",
      "Geological field notebook and sample collection",
      "Contribution to geological conservation initiatives",
      "Professional geological presentation and Q&A session",
      "Detailed geological map of visited areas",
      "First aid kit and emergency communication equipment",
      "Bottled water throughout the expedition",
      "All applicable taxes, park entry fees, and conservation charges"
    ]
  }
];

packageSets.adventure.packages = [
  {
    id: 1,
    mini_title: "Goa Multi-Sport Adventure",
    title: "Goa Multi-Sport Adventure - Ultimate Active Experience",
    description: `Experience Goa's diverse landscapes through exhilarating physical challenges with our comprehensive Goa Multi-Sport Adventure—an action-packed 3-day journey combining water sports, land adventures, and aerial experiences designed for active travelers seeking variety and excitement.

Unlike single-activity adventures, this thoughtfully sequenced package builds progressive thrills while exploring dramatically different Goan environments—from rushing rivers and dense forests to coastal cliffs and pristine beaches. Whether you're an established adventure enthusiast or newcomer to active travel, our professional guides customize each activity to your experience level while ensuring both safety and genuine adventure across multiple sport disciplines.`,
    photos: [
      "images/Packages/adventure/1.jpg",
      "images/sport1.jpg",
      "images/sport2.jpg",
      "images/sport3.jpg"
    ],
    itinerary: [
      // Day 1: Water & Vertical Challenges
      { day: "Day 1", time: "8:00 AM", activity: "Pickup from your hotel in Goa" },
      { day: "Day 1", time: "9:00 AM", activity: "Kayaking orientation and safety briefing" },
      { day: "Day 1", time: "9:30 AM", activity: "Guided kayaking expedition on Mandovi River" },
      { day: "Day 1", time: "12:30 PM", activity: "Riverside lunch with adventure briefing" },
      { day: "Day 1", time: "2:00 PM", activity: "Rock climbing at natural formations near Arambol" },
      { day: "Day 1", time: "5:00 PM", activity: "Sunset rappelling down coastal cliffs" },
      { day: "Day 1", time: "7:00 PM", activity: "Adventure dinner with day's highlights review" },
      { day: "Day 1", time: "8:30 PM", activity: "Return to hotel" },

      // Day 2: Trail & River Adventures
      { day: "Day 2", time: "7:30 AM", activity: "Breakfast at hotel" },
      { day: "Day 2", time: "8:30 AM", activity: "Transfer to Western Ghats foothills" },
      { day: "Day 2", time: "9:30 AM", activity: "Mountain bike fitting and safety orientation" },
      { day: "Day 2", time: "10:00 AM", activity: "Guided mountain biking expedition" },
      { day: "Day 2", time: "12:30 PM", activity: "Picnic lunch at scenic viewpoint" },
      { day: "Day 2", time: "2:30 PM", activity: "Continue biking to pristine river location" },
      { day: "Day 2", time: "3:30 PM", activity: "Stand-up paddleboarding instruction" },
      { day: "Day 2", time: "5:00 PM", activity: "Optional SUP yoga session" },
      { day: "Day 2", time: "6:30 PM", activity: "Dinner at riverside restaurant" },
      { day: "Day 2", time: "8:00 PM", activity: "Return to hotel" },

      // Day 3: Sky & Sea Excitement
      { day: "Day 3", time: "8:00 AM", activity: "Breakfast at hotel" },
      { day: "Day 3", time: "9:00 AM", activity: "Transfer to beach location" },
      { day: "Day 3", time: "9:30 AM", activity: "Extended parasailing experience with instruction" },
      { day: "Day 3", time: "11:00 AM", activity: "Introductory windsurfing lesson" },
      { day: "Day 3", time: "1:00 PM", activity: "Beachside lunch with water sports briefing" },
      { day: "Day 3", time: "2:30 PM", activity: "Progressive jet ski adventures" },
      { day: "Day 3", time: "4:30 PM", activity: "Group banana boat experience" },
      { day: "Day 3", time: "5:30 PM", activity: "Sunset refreshments and adventure certificate presentation" },
      { day: "Day 3", time: "7:00 PM", activity: "Farewell dinner at beach restaurant" },
      { day: "Day 3", time: "8:30 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Certified adventure specialists for each activity (kayaking, climbing, mountain biking, paddleboarding, parasailing, windsurfing, jet ski)",
      "All necessary activity equipment including safety gear",
      "Quality mountain bikes with full suspension",
      "Professional-grade climbing equipment with safety systems",
      "River kayaks with appropriate safety equipment",
      "Stand-up paddleboards and instruction",
      "Extended parasailing experience",
      "Introductory windsurfing lesson with equipment",
      "Progressive jet ski adventure with guide",
      "Banana boat experience",
      "All transportation between adventure locations",
      "Meals as specified in itinerary (3 lunches, 3 dinners)",
      "Energy snacks and hydration during activities",
      "Adventure certificate of completion",
      "First aid and safety equipment at all locations",
      "Activity photos in digital format",
      "All applicable activity taxes and insurance",
      "Adventure logbook documenting experiences"
    ]
  },
  {
    id: 2,
    mini_title: "Whitewater Rafting & River Adventures",
    title: "Whitewater Rafting & River Adventures - Monsoon Thrills",
    description: `Experience the spectacular transformation of Goa's rivers during monsoon season with our exhilarating Whitewater Rafting & River Adventures package—a specialized 3-day journey timed perfectly to capture the thrilling seasonal surge of Goa's inland waterways.

Unlike typical beach-focused Goan holidays, this unique adventure reveals the dynamic inland water systems that come alive between June and September, when monsoon rains create world-class rafting conditions across multiple river systems. Designed for both rafting enthusiasts and adventurous first-timers, this carefully structured program builds progressive whitewater experiences while incorporating diverse river-based activities that connect you intimately with Goa's monsoon-transformed landscapes.`,
    photos: [
      "images/Packages/adventure/2.jpg",
      "images/rafting1.jpg",
      "images/rafting2.jpg",
      "images/rafting3.jpg"
    ],
    itinerary: [
      // Day 1: Introduction to River Adventures
      { day: "Day 1", time: "8:00 AM", activity: "Pickup from your hotel in Goa" },
      { day: "Day 1", time: "9:30 AM", activity: "Arrive at Mhadei River base" },
      { day: "Day 1", time: "10:00 AM", activity: "Comprehensive rafting orientation and safety briefing" },
      { day: "Day 1", time: "10:30 AM", activity: "Begin Class I-II whitewater rafting expedition" },
      { day: "Day 1", time: "1:00 PM", activity: "Riverside lunch with river ecology discussion" },
      { day: "Day 1", time: "2:30 PM", activity: "Introduction to river kayaking with professional instruction" },
      { day: "Day 1", time: "5:00 PM", activity: "Free time for swimming in safe river sections" },
      { day: "Day 1", time: "6:30 PM", activity: "Unique riverside dining experience" },
      { day: "Day 1", time: "8:30 PM", activity: "Return to hotel or riverside accommodation" },

      // Day 2: Mahadayi River Expedition
      { day: "Day 2", time: "7:30 AM", activity: "Breakfast at accommodation" },
      { day: "Day 2", time: "8:30 AM", activity: "Transfer to Mahadayi River start point" },
      { day: "Day 2", time: "9:30 AM", activity: "Advanced rafting briefing and equipment preparation" },
      { day: "Day 2", time: "10:00 AM", activity: "Begin full-day Class II-III rafting expedition" },
      { day: "Day 2", time: "12:30 PM", activity: "Lunch at seasonal waterfall location" },
      { day: "Day 2", time: "1:30 PM", activity: "Continue rafting through premier rapid sections" },
      { day: "Day 2", time: "3:30 PM", activity: "Body floating experience in calm river sections" },
      { day: "Day 2", time: "5:00 PM", activity: "Optional cliff jumping at safe locations" },
      { day: "Day 2", time: "6:30 PM", activity: "Post-adventure dinner with expedition photos review" },
      { day: "Day 2", time: "8:30 PM", activity: "Return to accommodation" },

      // Day 3: Canyoning & Wild Swimming
      { day: "Day 3", time: "8:00 AM", activity: "Breakfast at accommodation" },
      { day: "Day 3", time: "9:00 AM", activity: "Transfer to canyoning start point" },
      { day: "Day 3", time: "9:30 AM", activity: "Canyoning safety briefing and equipment fitting" },
      { day: "Day 3", time: "10:00 AM", activity: "Begin guided canyoning expedition through monsoon-fed canyon" },
      { day: "Day 3", time: "1:00 PM", activity: "Picnic lunch in canyon setting" },
      { day: "Day 3", time: "2:30 PM", activity: "Hike to seasonal plunge waterfall viewpoint" },
      { day: "Day 3", time: "4:00 PM", activity: "Guided wild swimming experience in natural pools" },
      { day: "Day 3", time: "6:00 PM", activity: "Farewell celebration with adventure highlights video" },
      { day: "Day 3", time: "7:30 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Internationally certified whitewater rafting guides",
      "Professional canyoning instructors",
      "All specialist river equipment and rafts",
      "Professional-grade personal flotation devices",
      "Whitewater helmets and safety equipment",
      "River kayaking equipment and instruction",
      "Canyoning gear including harnesses and helmets",
      "All meals as specified in itinerary (3 lunches, 3 dinners)",
      "Riverside dining experience",
      "Transportation to all river locations",
      "Cliff jumping safety supervision",
      "Wild swimming guide at natural pools",
      "Adventure photos and videos in digital format",
      "River safety instruction and training",
      "Waterproof containers for personal items",
      "First aid and swift water rescue equipment",
      "All applicable permits and river usage fees",
      "Monsoon season river expedition certificate"
    ]
  },
  {
    id: 3,
    mini_title: "Mountain Biking & Cycle Tours",
    title: "Mountain Biking & Cycle Tours - Two-Wheel Exploration",
    description: `Discover Goa's hidden landscapes and vibrant cultures through human-powered adventure with our comprehensive Mountain Biking & Cycle Tours package—a perfectly balanced 3-day journey combining thrilling off-road terrain, scenic coastal paths, and charming rural byways impossible to experience through motorized travel.

Unlike standard bicycle rentals or brief guided rides, this thoughtfully structured program provides progressive cycling experiences across dramatically different Goan environments—from challenging single-track forest trails and plantation paths to serene coastal routes and village backroads. Whether you're an experienced mountain biker seeking technical challenges or casual cyclist wanting scenic exploration, our expert guides customize each ride to create your perfect two-wheeled adventure.`,
    photos: [
      "images/Packages/adventure/3.jpg",
      "images/cycling1.jpg",
      "images/cycling2.jpg",
      "images/cycling3.jpg"
    ],
    itinerary: [
      // Day 1: Forest Trails & Natural Wonders
      { day: "Day 1", time: "7:30 AM", activity: "Pickup from your hotel in Goa" },
      { day: "Day 1", time: "8:30 AM", activity: "Arrive at cycling base for professional bike fitting" },
      { day: "Day 1", time: "9:00 AM", activity: "Safety briefing and mountain biking technique instruction" },
      { day: "Day 1", time: "9:30 AM", activity: "Begin guided forest trail expedition in Western Ghats foothills" },
      { day: "Day 1", time: "11:30 AM", activity: "Reach panoramic viewpoint for rest and photos" },
      { day: "Day 1", time: "12:30 PM", activity: "Flowing descent to hidden waterfall" },
      { day: "Day 1", time: "1:30 PM", activity: "Picnic lunch and swimming at waterfall" },
      { day: "Day 1", time: "3:00 PM", activity: "Cycle to organic spice plantation" },
      { day: "Day 1", time: "3:30 PM", activity: "Guided plantation tour with spice tasting" },
      { day: "Day 1", time: "5:00 PM", activity: "Return ride through scenic plantation trails" },
      { day: "Day 1", time: "6:30 PM", activity: "Dinner with cycling route review for next day" },
      { day: "Day 1", time: "8:00 PM", activity: "Return to hotel" },

      // Day 2: Cultural Heritage Cycle Route
      { day: "Day 2", time: "8:00 AM", activity: "Breakfast at hotel" },
      { day: "Day 2", time: "9:00 AM", activity: "Transfer to heritage route starting point" },
      { day: "Day 2", time: "9:30 AM", activity: "Begin cultural cycling exploration" },
      { day: "Day 2", time: "10:30 AM", activity: "Visit to traditional pottery village" },
      { day: "Day 2", time: "11:30 AM", activity: "Cycle to rural feni distillery with demonstration" },
      { day: "Day 2", time: "12:30 PM", activity: "Continue to weaving cooperative" },
      { day: "Day 2", time: "1:30 PM", activity: "Special home-cooked lunch at traditional Goan house" },
      { day: "Day 2", time: "3:00 PM", activity: "Scenic riverside cycling route" },
      { day: "Day 2", time: "4:00 PM", activity: "Visit to ancient petroglyph site" },
      { day: "Day 2", time: "5:30 PM", activity: "Cycle to day's endpoint" },
      { day: "Day 2", time: "6:30 PM", activity: "Dinner at rural restaurant with local musicians" },
      { day: "Day 2", time: "8:00 PM", activity: "Return to hotel" },

      // Day 3: Coastal Paradise Cycling
      { day: "Day 3", time: "6:30 AM", activity: "Early breakfast at hotel" },
      { day: "Day 3", time: "7:30 AM", activity: "Transfer to coastal route starting point" },
      { day: "Day 3", time: "8:00 AM", activity: "Begin dawn coastal cycling experience" },
      { day: "Day 3", time: "9:30 AM", activity: "Visit to traditional boat building village" },
      { day: "Day 3", time: "11:00 AM", activity: "Cycle through private coastal nature reserve" },
      { day: "Day 3", time: "12:30 PM", activity: "Arrive at remote beach for seafood lunch" },
      { day: "Day 3", time: "2:00 PM", activity: "Beach relaxation time with swimming" },
      { day: "Day 3", time: "3:30 PM", activity: "Begin return journey along coastal paths" },
      { day: "Day 3", time: "5:30 PM", activity: "Sunset coastal cycling experience" },
      { day: "Day 3", time: "7:00 PM", activity: "Farewell dinner celebration" },
      { day: "Day 3", time: "8:30 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Professional cycling guides with local expertise",
      "Quality mountain bikes with front suspension (full suspension upgrade available)",
      "Bicycle helmets and safety equipment",
      "Professional bike fitting session",
      "Support vehicle throughout the journey",
      "All meals as specified in itinerary (3 lunches, 3 dinners)",
      "Water and energy snacks during rides",
      "Spice plantation guided tour with tasting",
      "Traditional pottery village demonstration",
      "Rural feni distillery visit with tasting",
      "Weaving cooperative cultural experience",
      "Special home-cooked lunch at traditional Goan house",
      "Ancient petroglyph site entrance",
      "Private coastal nature reserve access",
      "Traditional boat building village visit",
      "Mechanical support and basic repairs",
      "First aid and emergency support",
      "Cycling route maps and elevation profiles",
      "All applicable entrance fees and permits"
    ]
  },
  {
    id: 4,
    mini_title: "Yoga & Wellness Adventure Retreat",
    title: "Yoga & Wellness Adventure Retreat - Active Rejuvenation",
    description: `Harmonize mind, body, and spirit while exploring Goa's natural beauty with our transformative Yoga & Wellness Adventure Retreat—a perfectly balanced 3-day journey combining revitalizing yoga practices, mindful adventures in nature, and holistic wellness experiences.

Unlike conventional yoga retreats confined to single locations or adventure tours lacking mindful elements, this innovative program integrates thoughtfully sequenced yoga sessions in spectacular natural settings with active adventures that become moving meditations—creating a unique mind-body experience that rejuvenates at multiple levels. Whether you're an established yoga practitioner or wellness-curious beginner, our expert instructors customize practices to your experience level while our adventure guides ensure safe, accessible nature experiences that complement the wellness journey.`,
    photos: [
      "images/Packages/adventure/4.jpg",
      "images/yoga1.jpg",
      "images/yoga2.jpg",
      "images/yoga3.jpg"
    ],
    itinerary: [
      // Day 1: Coastal Wellness Immersion
      { day: "Day 1", time: "6:00 AM", activity: "Pickup from your hotel in Goa" },
      { day: "Day 1", time: "6:30 AM", activity: "Sunrise beach yoga session" },
      { day: "Day 1", time: "8:00 AM", activity: "Nutritious breakfast with wellness introduction" },
      { day: "Day 1", time: "9:30 AM", activity: "Guided silent walking meditation along shoreline" },
      { day: "Day 1", time: "11:00 AM", activity: "Mindful sea kayaking to hidden coves" },
      { day: "Day 1", time: "1:00 PM", activity: "Organic farm-to-table lunch" },
      { day: "Day 1", time: "3:00 PM", activity: "Restorative beach yoga session" },
      { day: "Day 1", time: "4:30 PM", activity: "Guided breathwork workshop" },
      { day: "Day 1", time: "6:00 PM", activity: "Sunset meditation practice" },
      { day: "Day 1", time: "7:30 PM", activity: "Holistic dinner with wellness discussion" },
      { day: "Day 1", time: "9:00 PM", activity: "Return to hotel or wellness accommodation" },

      // Day 2: Forest Connection & Mindful Nourishment
      { day: "Day 2", time: "5:30 AM", activity: "Light morning tea" },
      { day: "Day 2", time: "6:00 AM", activity: "Sunrise hilltop yoga session" },
      { day: "Day 2", time: "7:30 AM", activity: "Balanced breakfast with mindfulness practice" },
      { day: "Day 2", time: "9:00 AM", activity: "Forest trail hike with movement meditation" },
      { day: "Day 2", time: "11:30 AM", activity: "Water yoga at secluded waterfall" },
      { day: "Day 2", time: "1:00 PM", activity: "Mindful picnic lunch in nature" },
      { day: "Day 2", time: "2:30 PM", activity: "Visit to organic farm with mindful harvesting" },
      { day: "Day 2", time: "4:00 PM", activity: "Ayurvedic cooking workshop" },
      { day: "Day 2", time: "6:30 PM", activity: "Dinner featuring prepared dishes" },
      { day: "Day 2", time: "8:00 PM", activity: "Evening relaxation practice" },
      { day: "Day 2", time: "9:00 PM", activity: "Return to accommodation" },

      // Day 3: Integration & Transformation
      { day: "Day 3", time: "6:30 AM", activity: "Morning tea with silent sitting" },
      { day: "Day 3", time: "7:00 AM", activity: "Comprehensive yoga practice" },
      { day: "Day 3", time: "8:30 AM", activity: "Nourishing breakfast" },
      { day: "Day 3", time: "10:00 AM", activity: "Sound healing experience" },
      { day: "Day 3", time: "11:30 AM", activity: "Mindful stand-up paddleboarding" },
      { day: "Day 3", time: "1:30 PM", activity: "Light lunch with nutrition discussion" },
      { day: "Day 3", time: "3:00 PM", activity: "Partner yoga and Thai massage workshop" },
      { day: "Day 3", time: "5:00 PM", activity: "Sunset yoga ceremony at coastal location" },
      { day: "Day 3", time: "7:00 PM", activity: "Plant-based farewell celebration dinner" },
      { day: "Day 3", time: "8:30 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Certified yoga instructors specialized in multiple traditions",
      "Mindfulness coaches for meditation practices",
      "Wellness-oriented adventure guides",
      "All yoga equipment (mats, blocks, straps, blankets)",
      "Sea kayaking equipment and instruction",
      "Stand-up paddleboarding equipment and guidance",
      "All meals as specified - organic, locally sourced, nutritionally balanced",
      "Specialized wellness workshops (breathwork, sound healing, Thai massage)",
      "Water yoga session at secluded waterfall",
      "Organic farm visit with mindful harvesting",
      "Ayurvedic cooking workshop with ingredients",
      "Plant-based farewell celebration dinner",
      "Transportation between all wellness locations",
      "Wellness journal for personal reflections",
      "Herbal teas and detox waters throughout",
      "Digital access to recorded meditation sessions",
      "First aid and safety equipment",
      "All applicable wellness workshop materials",
      "Personalized wellness plan to continue practices"
    ]
  },
  {
    id: 5,
    mini_title: "Sailing & Nautical Adventures",
    title: "Sailing & Nautical Adventures - Maritime Exploration",
    description: `Experience the freedom and excitement of exploring Goa's magnificent coastline under sail with our comprehensive Sailing & Nautical Adventures package—a 3-day journey combining hands-on sailing experiences, nautical skill development, and unforgettable maritime exploration.

Unlike passive boat tours or brief sailing excursions, this immersive program provides progressive opportunities to actively participate in sailing beautiful vessels while discovering secluded coastal locations accessible only by water. Whether you're an experienced sailor seeking to enhance skills or a complete novice drawn to nautical adventure, our professional instructors ensure appropriate challenges while revealing the special magic of experiencing Goa from offshore perspectives rarely enjoyed by land-bound travelers.`,
    photos: [
      "images/Packages/adventure/5.jpg",
      "images/sailing1.jpg",
      "images/sailing2.jpg",
      "images/sailing3.jpg"
    ],
    itinerary: [
      // Day 1: Sailing Yacht Experience
      { day: "Day 1", time: "8:30 AM", activity: "Pickup from your hotel in Goa" },
      { day: "Day 1", time: "9:30 AM", activity: "Arrival at premier sailing center" },
      { day: "Day 1", time: "10:00 AM", activity: "Comprehensive sailing orientation and safety briefing" },
      { day: "Day 1", time: "11:00 AM", activity: "Board sailing yacht and begin hands-on instruction" },
      { day: "Day 1", time: "12:30 PM", activity: "Active participation in coastal sailing journey" },
      { day: "Day 1", time: "2:00 PM", activity: "Anchor at secluded bay for swimming" },
      { day: "Day 1", time: "2:30 PM", activity: "Gourmet lunch aboard with coastal views" },
      { day: "Day 1", time: "3:30 PM", activity: "Afternoon sailing with progressive helm experience" },
      { day: "Day 1", time: "6:00 PM", activity: "Offshore sunset viewing experience" },
      { day: "Day 1", time: "7:30 PM", activity: "Return to harbor" },
      { day: "Day 1", time: "8:00 PM", activity: "Dinner at maritime restaurant with sailing discussion" },
      { day: "Day 1", time: "9:30 PM", activity: "Return to hotel" },

      // Day 2: Catamaran Adventure & Overnight Experience
      { day: "Day 2", time: "9:00 AM", activity: "Breakfast at hotel" },
      { day: "Day 2", time: "10:00 AM", activity: "Transfer to catamaran sailing base" },
      { day: "Day 2", time: "10:30 AM", activity: "Multihull sailing instruction and orientation" },
      { day: "Day 2", time: "11:30 AM", activity: "Begin catamaran sailing to Grande Island" },
      { day: "Day 2", time: "1:00 PM", activity: "Lunch aboard catamaran in marine sanctuary" },
      { day: "Day 2", time: "2:30 PM", activity: "Guided snorkeling at vibrant reef locations" },
      { day: "Day 2", time: "4:30 PM", activity: "Continue sailing to overnight anchorage" },
      { day: "Day 2", time: "6:00 PM", activity: "Anchor in sheltered bay for overnight stay" },
      { day: "Day 2", time: "7:00 PM", activity: "Seafood barbecue dinner on deck" },
      { day: "Day 2", time: "8:30 PM", activity: "Navigation and constellation instruction" },
      { day: "Day 2", time: "10:00 PM", activity: "Overnight accommodation aboard catamaran" },

      // Day 3: Sport Sailing & Nautical Celebration
      { day: "Day 3", time: "7:00 AM", activity: "Sunrise coffee and light breakfast aboard" },
      { day: "Day 3", time: "8:00 AM", activity: "Morning swim in bay waters" },
      { day: "Day 3", time: "9:30 AM", activity: "Sail back to main harbor" },
      { day: "Day 3", time: "11:00 AM", activity: "Transfer to sport sailing center" },
      { day: "Day 3", time: "11:30 AM", activity: "Performance sailing orientation" },
      { day: "Day 3", time: "12:00 PM", activity: "Begin sport sailing experience with instruction" },
      { day: "Day 3", time: "1:30 PM", activity: "Lunch break with sailing theory session" },
      { day: "Day 3", time: "2:30 PM", activity: "Optional trapeze experience for interested participants" },
      { day: "Day 3", time: "3:30 PM", activity: "Friendly mini-regatta sailing activity" },
      { day: "Day 3", time: "5:30 PM", activity: "Return to harbor" },
      { day: "Day 3", time: "6:30 PM", activity: "Traditional sailor's farewell celebration" },
      { day: "Day 3", time: "8:30 PM", activity: "Return to hotel" }
    ],
    includes: [
      "Internationally certified sailing instructors",
      "Access to multiple sailing vessels (yacht, catamaran, sport boats)",
      "All required sailing and safety equipment",
      "Personal flotation devices",
      "Overnight catamaran accommodation (1 night)",
      "All meals as specified in itinerary including gourmet onboard dining",
      "Seafood barbecue dinner on deck",
      "Guided snorkeling at Grande Island with equipment",
      "Sport sailing experience with instruction",
      "Optional trapeze experience (weather permitting)",
      "Mini-regatta participation",
      "Navigation and constellation instruction",
      "Traditional sailor's farewell celebration",
      "Personalized sailing logbook",
      "Snorkeling equipment and guidance",
      "Marine sanctuary fees and permits",
      "Professional marine guides for underwater exploration",
      "First aid and maritime safety equipment",
      "All applicable harbor fees and sailing permits",
      "Sailing achievement certificate"
    ]
  }
];

// Display Package List
function displayAllPackageSets() {
  // For each set of packages in our collection
  Object.keys(packageSets).forEach(setKey => {
    const packageSet = packageSets[setKey];
    const container = document.getElementById(packageSet.containerId);

    // Skip if container doesn't exist in the DOM
    if (!container) return;

    container.innerHTML = '';

    // Add packages to container
    packageSet.packages.forEach((pkg, index) => {
      // For packages at positions that need offset (like the 4th in a 5-package set)
      let offsetClass = '';
      if (packageSet.packages.length === 5 && index === 3) {
        offsetClass = 'offset-lg-2 offset-md-2';
      }

      container.innerHTML += `
        <div class="col-lg-4 col-md-4 ${offsetClass}">
          <div class="tour-box">
            <figure><img src="${pkg.photos[0]}" alt="Image"></figure>
            <div class="tour-content">
              <h3 class="tour-title">${pkg.mini_title}</h3>
              <a href="#" class="explore-more" data-package="${pkg.title}" 
                 onclick="openModal('${setKey}', ${pkg.id})">EXPLORE MORE</a>
            </div>
          </div>
        </div>
      `;
    });
  });
}

// Open Modal - updated for multiple package sets
function openModal(setKey, id) {
  const packageSet = packageSets[setKey];
  if (!packageSet) return;

  const pkg = packageSet.packages.find(p => p.id === id);
  if (!pkg) return;

  // Populate Photos - Modified to display only photos 2-4 (skipping the first image)
  document.getElementById('modal-photos').innerHTML = pkg.photos
    .slice(1) // Skip the first image (which is already shown in the card)
    .map(photo => `<img src="${photo}" alt="Photo">`)
    .join('');

  // Populate Title & Description
  document.getElementById('modal-title').innerText = pkg.title;
  document.getElementById('modal-description').innerText = pkg.description;

  // Generate Day Toggle Buttons
  const days = [...new Set(pkg.itinerary.map(item => item.day))];

  const dayToggle = document.getElementById('day-toggle');

  // Only show day toggle if there's more than one day
  if (days.length > 1) {
    dayToggle.innerHTML = days.map((day, index) =>
      `<button class="${index === 0 ? 'active' : ''}" 
         onclick="showDay('${setKey}', ${id}, '${day}', this)">${day}</button>`
    ).join('');
    dayToggle.style.display = 'flex'; // Show the day toggle
  } else {
    dayToggle.style.display = 'none'; // Hide the day toggle
  }

  // Show Itinerary
  const firstDay = days[0];
  showItinerary(pkg.itinerary, firstDay);

  // Populate Includes
  document.getElementById('modal-includes').innerHTML = pkg.includes.map(item =>
    `<li>${item}</li>`).join('');

  // Show Modal
  document.getElementById('packageModal').style.display = 'block';
}

// Show Activities for a Specific Day
function showDay(setKey, packageId, day, element) {
  const packageSet = packageSets[setKey];
  if (!packageSet) return;

  const pkg = packageSet.packages.find(p => p.id === packageId);
  if (!pkg) return;

  // Update Active Button State
  document.querySelectorAll('#day-toggle button').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  // Show the filtered itinerary for the selected day
  showItinerary(pkg.itinerary, day);
}

// Show Itinerary
function showItinerary(itinerary, day) {
  const filteredItinerary = itinerary.filter(item => item.day === day);
  document.getElementById('modal-itinerary').innerHTML = filteredItinerary.map(item =>
    `<tr>
      <td>${item.time}</td>
      <td>${item.activity}</td>
    </tr>`
  ).join('');
}

// Close Modal
function closeModal() {
  document.getElementById('packageModal').style.display = 'none';
}

// Enhance the modal closing functionality
function setupModalEvents() {
  const modal = document.getElementById('packageModal');
  const modalContent = document.querySelector('.modal-content');

  // Close modal when clicking outside the content area
  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };

  // Close modal with ESC key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  displayAllPackageSets();
  setupModalEvents();
});