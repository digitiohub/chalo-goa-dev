// Sample Package Data
const packages = [
  {
    id: 1,
    title: "Dudhsagar Falls Adventure Trek - The Waterfall Explorer's Dream",
    description: "Embark on an unforgettable journey through the heart of Goa's spectacular Western Ghats...",
    photos: ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg"],
    itinerary: [
      { day: "Day 1", time: "6:00 AM", activity: "Pickup from hotel in North Goa" },
      { day: "Day 1", time: "8:00 AM", activity: "Arrive at Kulem railway station, trek briefing and safety instructions" },
      { day: "Day 1", time: "9:00 AM", activity: "Begin trek through the lush Western Ghats forest trails" },
      { day: "Day 2", time: "6:00 AM", activity: "Sunrise viewing and morning tea" },
      { day: "Day 2", time: "7:30 AM", activity: "Breakfast at campsite" },
      { day: "Day 2", time: "9:00 AM", activity: "Trek to the upper viewpoints of Dudhsagar Falls" },
      { day: "Day 3", time: "6:00 AM", activity: "Sunrise viewing and morning tea" },
      { day: "Day 3", time: "7:30 AM", activity: "Breakfast at campsite" },
      { day: "Day 3", time: "9:00 AM", activity: "Trek to the upper viewpoints of Dudhsagar Falls" }
    ],
    includes: [
      "Professional trekking guide",
      "Camping equipment",
      "All meals",
      "Transportation from/to hotel",
      "Spice plantation visit",
      "Photography service"
    ]
  }
];

// Display Package List
function displayPackages() {
  const container = document.getElementById('package-list');
  container.innerHTML = '';

  packages.forEach(pkg => {
    container.innerHTML += `
      <div class="package-card">
        <h3>${pkg.title}</h3>
        <p>${pkg.description.substring(0, 100)}...</p>
        <button class="read-more-btn" onclick="openModal(${pkg.id})">Read More</button>
      </div>
    `;
  });
}

// Open Modal
function openModal(id) {
  const pkg = packages.find(p => p.id === id);

  // Populate Photos
  document.getElementById('modal-photos').innerHTML = pkg.photos.map(photo => `<img src="${photo}" alt="Photo">`).join('');

  // Populate Title & Description
  document.getElementById('modal-title').innerText = pkg.title;
  document.getElementById('modal-description').innerText = pkg.description;

  // Generate Day Toggle Buttons
  const days = [...new Set(pkg.itinerary.map(i => i.day))];
  const dayToggle = document.getElementById('day-toggle');
  dayToggle.innerHTML = days.map((day, index) =>
    `<button class="${index === 0 ? 'active' : ''}" onclick="showDay('${day}', this)">${day}</button>`
  ).join('');

  // Show Itinerary for First Day
  showItinerary(pkg.itinerary, days[0]);

  // Populate Includes
  document.getElementById('modal-includes').innerHTML = pkg.includes.map(item => `<li>${item}</li>`).join('');

  // Show Modal
  document.getElementById('packageModal').style.display = 'block';
}

// Show Activities for a Specific Day
function showDay(day, element) {
  const pkg = packages[0]; // For now, just using first package for demo

  // Update Active Button State
  document.querySelectorAll('.day-toggle button').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  // Populate Itinerary Table
  showItinerary(pkg.itinerary, day);
}

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

// Initialize Package List
displayPackages();
