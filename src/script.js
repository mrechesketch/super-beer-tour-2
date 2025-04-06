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
const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');
const clickSound = document.getElementById('clickSound');

// Bunny sprite
const bunnyImg = new Image();
bunnyImg.src = "bunny.png"; // replace with your sprite image

// Zone data
const zones = [
    { name: "Tornado Zone", x: 70, y: 190, image: '../images/1-tornado-zone.png' },
    { name: "Bridge Zone", x: 250, y: 250, image: '../images/2-bridge-zone.png'},
    { name: "CutOut Zone", x: 415, y: 250, image: '../images/3-cut-out-zone.png' },
    { name: "Water Gardens Zone", x: 520, y: 300, image: '../images/4-water-garden-zone.png' },
    { name: "Wild West Zone", x: 450, y: 170, image: '../images/5-wild-west-zone.png' },
    { name: "Panther Island Zone", x: 350, y: 115, image: '../images/6-venue-zone.png' }
];

let currentZoneIndex = 0;

// Tab switching
infoTab.addEventListener('click', () => {
    infoSection.classList.remove('hidden');
    mapSection.classList.add('hidden');
    faqSection.classList.add('hidden');
});

mapTab.addEventListener('click', () => {
    mapSection.classList.remove('hidden');
    infoSection.classList.add('hidden');
    faqSection.classList.add('hidden');
    drawMap();
});

faqTab.addEventListener('click', () => {
    faqSection.classList.remove('hidden');
    infoSection.classList.add('hidden');
    mapSection.classList.add('hidden');
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
        ctx.fillStyle = index === currentZoneIndex ? 'pink' : 'black';
        ctx.fill();
        ctx.closePath();

        // Draw labels
        ctx.font = index === currentZoneIndex ? 'bold 16px Arial' : '14px Arial';
        ctx.fillStyle = index === currentZoneIndex ? 'pink' : 'black';
        ctx.fillText(index + 1, zone.x + 12, zone.y + 5);
    });

    // Draw bunny sprite
    const bunny = zones[currentZoneIndex];
    if (bunnyImg.complete) {
        ctx.drawImage(bunnyImg, bunny.x - 20, bunny.y - 20, 40, 40);
    } else {
        bunnyImg.onload = () => {
            ctx.drawImage(bunnyImg, bunny.x - 20, bunny.y - 20, 40, 40);
        };
    }
}

// Update zone image and description
function updateZone() {
    // Placeholder logic for images and text
    const zone = zones[currentZoneIndex];
    zoneImage.src = zone.image; // Replace with actual image path later
    zoneDescription.textContent = `Placeholder description for ${zone.name}`;
    drawMap();
}

// --- HANDLE MAP CLICKS ---
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    zones.forEach((zone, index) => {
        const dx = mouseX - zone.x;
        const dy = mouseY - zone.y;
        if (Math.sqrt(dx * dx + dy * dy) < 20) {
            currentZoneIndex = index;
            drawMap()
            updateZone();
        }
    });
});

// Initialize
updateZone();