// Create a package collection object to hold all package sets
const packageSets = {
  wildlife: {
    title: "Goa Wildlife & Nature Packages",
    containerId: "wildlife-package-list",
    packages: [
      // Your existing wildlife packages array
      // packages[0], packages[1], etc.
    ]
  },
  adventure: {
    title: "Goa Adventure & Active Packages",
    containerId: "adventure-package-list",
    packages: [
      // Adventure packages
    ]
  },
  cultural: {
    title: "Goa Cultural & Heritage Packages",
    containerId: "cultural-package-list",
    packages: [
      // Cultural packages
    ]
  },
  wellness: {
    title: "Goa Wellness & Retreat Packages",
    containerId: "wellness-package-list", 
    packages: [
      // Wellness packages
    ]
  }
};

packageSets.wildlife.packages = [
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
    mini_title: "Coastal Cliffs Trek",
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

  // Populate Photos
  document.getElementById('modal-photos').innerHTML = pkg.photos.map(photo => 
    `<img src="${photo}" alt="Photo">`).join('');

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
  window.onclick = function(event) {
    if (event.target === modal) {
      closeModal();
    }
  };

  // Close modal with ESC key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  displayAllPackageSets();
  setupModalEvents();
});