const infoTab = document.getElementById('infoTab');
const mapTab = document.getElementById('mapTab');
const faqTab = document.getElementById('faqTab');
const infoSection = document.getElementById('infoSection');
const mapSection = document.getElementById('mapSection');
const faqSection = document.getElementById('faqSection');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const zoneImage = document.getElementById('zoneImage');
const zoneDescription = document.getElementById('zoneDescription');

// Zone data
const zones = [
    { name: "Tornado Zone", image: '../images/1-tornado-zone.png' },
    { name: "Bridge Zone", image: '../images/2-bridge-zone.png'},
    { name: "CutOut Zone", image: '../images/3-cut-out-zone.png' },
    { name: "Water Gardens Zone", image: '../images/4-water-garden-zone.png' },
    { name: "Wild West Zone", image: '../images/5-wild-west-zone.png' },
    { name: "Panther Island Zone", image: '../images/6-venue-zone.png' }
];

let currentZoneIndex = 0;

// Tab switching
document.getElementById('mapTab').addEventListener('click', () => {
    document.getElementById('mapTab').classList.add('active-tab');
    document.getElementById('infoTab').classList.remove('active-tab');
    document.getElementById('faqTab').classList.remove('active-tab');
    
    document.getElementById('mapSection').classList.remove('hidden');
    document.getElementById('infoSection').classList.add('hidden');
    document.getElementById('faqSection').classList.add('hidden');
    updateZone()
});

document.getElementById('infoTab').addEventListener('click', () => {
    document.getElementById('infoTab').classList.add('active-tab');
    document.getElementById('mapTab').classList.remove('active-tab');
    document.getElementById('faqTab').classList.remove('active-tab');
    
    document.getElementById('infoSection').classList.remove('hidden');
    document.getElementById('mapSection').classList.add('hidden');
    document.getElementById('faqSection').classList.add('hidden');
});

document.getElementById('faqTab').addEventListener('click', () => {
    document.getElementById('faqTab').classList.add('active-tab');
    document.getElementById('mapTab').classList.remove('active-tab');
    document.getElementById('infoTab').classList.remove('active-tab');
    
    document.getElementById('faqSection').classList.remove('hidden');
    document.getElementById('infoSection').classList.add('hidden');
    document.getElementById('mapSection').classList.add('hidden');
});

// Navigation buttons
prevBtn.addEventListener('click', () => {
    currentZoneIndex = (currentZoneIndex - 1 + zones.length) % zones.length;
    updateZone();
});

nextBtn.addEventListener('click', () => {
    currentZoneIndex = (currentZoneIndex + 1) % zones.length;
    updateZone();
});

// Update zone image and description
function updateZone() {
    // Placeholder logic for images and text
    const zone = zones[currentZoneIndex];
    zoneImage.src = zone.image; // Replace with actual image path later
    zoneDescription.textContent = `Placeholder description for ${zone.name}`;
}

// Initialize
updateZone();