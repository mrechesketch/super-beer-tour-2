const infoTab = document.getElementById('infoTab');
const mapTab = document.getElementById('mapTab');
// const faqTab = document.getElementById('faqTab');
const infoSection = document.getElementById('infoSection');
const mapSection = document.getElementById('mapSection');
// const faqSection = document.getElementById('faqSection');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const zoneImage = document.getElementById('zoneImage');
const zoneDescription = document.getElementById('zoneDescription');

// Zone data
const zones = [
    { name: "Tornado Zone", image: '../data/1-tornado-zone.png', file: '../data/1-tornado-zone.txt'},
    { name: "Bridge Zone", image: '../data/2-bridge-zone.png', file: '../data/2-bridge-zone.txt'},
    { name: "CutOut Zone", image: '../data/3-cut-out-zone.png', file: '../data/3-cut-out-zone.txt'},
    { name: "Water Gardens Zone", image: '../data/4-water-garden-zone.png', file: '../data/4-water-garden-zone.txt'},
    { name: "Wild West Zone", image: '../data/5-wild-west-zone.png', file: '../data/5-wild-west-zone.txt' },
    { name: "Panther Island Zone", image: '../data/6-venue-zone.png', file: '../data/6-venue-zone.txt' }
];

let currentZoneIndex = 0;

// Tab switching
mapTab.addEventListener('click', () => {
    mapTab.classList.add('active-tab');
    infoTab.classList.remove('active-tab');
    // faqTab.classList.remove('active-tab');
    
    mapSection.classList.remove('hidden');
    infoSection.classList.add('hidden');
    // document.getElementById('faqSection').classList.add('hidden');
    updateZone()
});

infoTab.addEventListener('click', () => {
    infoTab.classList.add('active-tab');
    mapTab.classList.remove('active-tab');
    // faqTab.classList.remove('active-tab');
    
    infoSection.classList.remove('hidden');
    mapSection.classList.add('hidden');
    // faqSection.classList.add('hidden');
});

// document.getElementById('faqTab').addEventListener('click', () => {
//     faqTab.classList.add('active-tab');
//     mapTab.classList.remove('active-tab');
//     infoTab.classList.remove('active-tab');
    
//     faqSection.classList.remove('hidden');
//     infoSection.classList.add('hidden');
//     mapSection.classList.add('hidden');
// });

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
    // Fetch the text content from the .txt file
    fetch(zone.file)
        .then(response => response.text()) // Get the file content as text
        .then(text => {
            // Insert the plain text into the description section
            zoneDescription.innerHTML = text; // Use textContent for plain text
        })
        .catch(error => {
            console.error('Error loading the text file:', error);
            zoneDescription.innerHTML = "<p>Failed to load zone description.</p>";
        });
}

// Initialize
updateZone();