const infoTab = document.getElementById('infoTab');
const mapTab = document.getElementById('mapTab');
const infoSection = document.getElementById('infoSection');
const mapSection = document.getElementById('mapSection');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const zoneImage = document.getElementById('zoneImage');
const zoneDescription = document.getElementById('zoneDescription');
const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');

// Zone data
const zones = [
    { name: "home", x: 100, y: 100 },
    { name: "bridge", x: 300, y: 80 },
    { name: "park", x: 500, y: 100 },
    { name: "water gardens", x: 500, y: 300 },
    { name: "wild Wild West", x: 300, y: 350 },
    { name: "venue", x: 100, y: 300 }
];

let currentZoneIndex = 0;

// Tab switching
infoTab.addEventListener('click', () => {
    infoSection.classList.remove('hidden');
    mapSection.classList.add('hidden');
});

mapTab.addEventListener('click', () => {
    mapSection.classList.remove('hidden');
    infoSection.classList.add('hidden');
    drawMap();
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

// Draw map with locations
function drawMap() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw locations
    zones.forEach((zone, index) => {
        ctx.beginPath();
        ctx.arc(zone.x, zone.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = index === currentZoneIndex ? 'red' : 'black';
        ctx.fill();
        ctx.closePath();
    });

    // Bunny sprite (simple circle for now)
    const bunny = zones[currentZoneIndex];
    ctx.beginPath();
    ctx.arc(bunny.x, bunny.y, 15, 0, Math.PI * 2);
    ctx.fillStyle = 'pink';
    ctx.fill();
    ctx.closePath();
}

// Update zone image and description
function updateZone() {
    // Placeholder logic for images and text
    const zone = zones[currentZoneIndex];
    zoneImage.src = "placeholder.jpg"; // Replace with actual image path later
    zoneDescription.textContent = `Placeholder description for ${zone.name}`;
    drawMap();
}

// Initialize
updateZone();
