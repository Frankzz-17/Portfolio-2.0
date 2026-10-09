// Project data
const projectsData = {
    'santelmo': {
        title: 'SANTELMO',
        description: 'A story driven, Bicol myth inspired game created for a game jam. It focuses on the player\'s role as Santelmo, guiding and protecting a lost villager through the dark woods.',
        video: 'https://www.youtube.com/embed/vHC7yMLm9dY',
        screenshots: ['image/santelmo5.png', 'image/santelmo1.jpg', 'image/santelmo2.jpg', 'image/santelmo3.jpg', 'image/santelmo4.jpg'],
        role: 'Game Developer',
        tools: 'Unity, C#, Blender',
        platform: 'PC',
        date: 'Dec 21, 2023',
        generalRole: '3D Artist',
        contributions: ['Created 3D character and environment models']
    },
    'road-ready': {
        title: 'Road Ready',
        description: 'Road Ready is a 3D driving game set in Naga City where players learn road safety by following real traffic signs. The player must follow every road sign they encounter to successfully complete the level.',
        video: 'https://www.youtube.com/embed/NSG2fz9yHH8',
        screenshots: ['image/road4.png', 'image/road3.png', 'image/road1.png', 'image/road2.png'],
        role: '3D Modeler',
        tools: 'Unity, C#, Maya, Blender, Substance Painter, Photoshop',
        platform: 'PC',
        date: 'Mar 15, 2024',
        generalRole: 'Lead 3D Artist | Level Designer',
        contributions: ['Modeled Vehicles & NPC\'s (jeepney, Etrike, Car)', 'Designed educational level layouts with real traffic signs', 'Applied texture using photoshop and substance painter']
    },
    'dont-get-fooled': {
        title: "Don't Get Fooled",
        description: 'A 2D platformer game where you play as a rabbit that is lost in a cave full of traps. Navigate through dangerous obstacles and find your way out.',
        video: 'https://www.youtube.com/embed/ms88Q2n1ci4',
        screenshots: ['image/dont1.jpg', 'image/dont2.jpg', 'image/dont3.jpg', 'image/dont4.jpg'],
        role: 'Developer & Designer',
        tools: 'Unity, C#, Aseprite',
        platform: 'Mobile/Android',
        date: 'Feb 10, 2024',
        generalRole: 'Solo Dev | Gameplay Programmer | UI/UX Designer | Level Designer',
        contributions: ['Programmed character controls and movement systems', 'Designed challenging trap-filled platformer levels', 'Created pixel art and visual direction for the game', 'Balanced difficulty progression and player experience']
    },
    'lume': {
        title: 'Lume',
        description: 'Lume is a 3D platformer where you solve puzzles, overcome obstacles, and explore a mysterious world to complete your adventure.',
        video: 'https://www.youtube.com/embed/WOs-jrkWj1M',
        screenshots: ['image/l1.png', 'image/l2.png'],
        role: 'Programmer',
        tools: 'Unity, C#, Blender',
        platform: 'PC',
        date: 'Jan 20, 2024',
        generalRole: '3D Artist | Level Designer',
        contributions: ['Created 3D models for characters', 'Structured engaging level progression']
    },
    'allen-denz': {
        title: 'Allen and Denz Quest',
        description: 'Allen and Denz Quest is a 2D puzzle platformer game with a full of traps. Work together with your partner to overcome challenges and complete the adventure.',
        video: 'https://youtube.com/embed/Zt8Ldc3206c',
        screenshots: ['image/a1.png', 'image/a2.png', 'image/a3.png'],
        role: 'Game Developer',
        tools: 'Unity, C#',
        platform: 'PC',
        date: 'Nov 30, 2023',
        generalRole: 'Level Designer',
        contributions: ['Designed puzzle levels requiring teamwork and coordination', 'Balanced gameplay for two-player cooperative experience']
    },
    'balut-quest': {
        title: "Balut's Quest",
        description: 'Balut\'s Quest is a 2D platformer gunner game where you embark on an epic journey through colorful worlds filled with enemies and challenges.',
        video: 'https://www.youtube.com/embed/IDJVP0zZ3TI',
        screenshots: ['image/b1.png', 'image/b2.png', 'image/b3.png', 'image/b4.png'],
        role: 'Developer',
        tools: 'Unity, C#',
        platform: 'PC',
        date: 'Dec 5, 2023',
        generalRole: 'Level Designer',
        contributions: ['Programmed platforming and shooting mechanics', 'Designed diverse levels across colorful worlds', 'Developed enemy AI and combat behaviors', 'Balanced weapon upgrades and gameplay progression']
    },
    'lost': {
        title: 'Lost',
        description: 'Lost is a 3D stealth puzzle-platformer where you control a small cube with a limited spotlight, exploring a world consumed by darkness. Collect glowing orbs to expand your vision, evade the Watchers of the Void with their unique behaviors, and find the portal to escape.',
        video: 'https://www.youtube.com/embed/poXfi9KYaZQ',
        screenshots: ['image/lost1.png', 'image/lost2.png', 'image/lost3.png', 'image/lost4.png', 'image/lost5.png', 'image/lost6.png', 'image/lost7.png'],
        role: 'Developer',
        tools: 'Unity, Maya, C#',
        platform: 'PC',
        date: 'June 8, 2025',
        generalRole: 'Solo Dev | Gameplay Programmer | 3D Artist | AI Developer',
        contributions: ['Developed core stealth and light mechanics', 'Created 3D models and environment assets', 'Designed intricate puzzle-platformer challenges', 'Implemented AI for enemy detection and behavior', 'Structured engaging level progression and pacing']
    }
};

// Graphic design data. Edit file names here if yours differ.
const designsData = {
    'cloud-studios': {
        title: 'Cloud Studios',
        images: [
            { src: 'image/Artboard 1 copy 4', caption: 'Cloud Studios: primary logo' },
            { src: 'image/Design 2', caption: 'Cloud Studios: outline cloud pattern' },
            { src: 'image/Cloud Studios Business Card MockUps', caption: 'Cloud Studios: business card mockup' },
            { src: 'image/Cloud Studios StoreFront MockUps', caption: 'Cloud Studios: storefront signage mockup' }
        ]
    },
    'tarp': {
        title: 'Congratulatory Tarpaulin',
        images: [
            { src: 'image/tarp original', caption: 'Congratulatory tarpaulin: original layout' }
        ]
    },
    'element-cards': {
        title: 'Periodic Element Cards',
        images: [
            { src: 'image/ElemenTical Final Card Design', caption: 'Periodic Element Cards: final neon series' },
            { src: 'image/ElemenTical Cards Concept Design', caption: 'Periodic Element Cards: early color-coded concept' }
        ]
    },
    'newjeans-jersey': {
        title: 'Bunnies Jersey',
        images: [
            { src: 'image/Sample Design 1', caption: 'Bunnies Jersey: front and back' }
        ]
    },
    'honoo-shirt': {
        title: 'Honoo Flame Shirt',
        images: [
            { src: 'image/Sample Design 2', caption: 'Honoo Flame Shirt: front and back' }
        ]
    },
    'dino-shirt': {
        title: 'Dinosaur?',
        images: [
            { src: 'image/Dinojaur T-shirt MockUps', caption: 'Dinosaur?: shirt mockup' },
            { src: 'image/Dinojaur', caption: 'Dinosaur?: original dithered artwork' }
        ]
    }
};

// Design images are listed without an extension; try common ones until one loads.
const IMAGE_EXTS = ['png', 'jpg', 'jpeg', 'webp', 'PNG', 'JPG', 'JPEG'];

function setImageSrc(img, path) {
    if (/\.(png|jpe?g|webp|gif)$/i.test(path)) {
        img.onerror = null;
        img.src = encodeURI(path);
        return;
    }
    let i = 0;
    img.onerror = () => {
        i++;
        if (i < IMAGE_EXTS.length) img.src = encodeURI(path + '.' + IMAGE_EXTS[i]);
        else img.onerror = null;
    };
    img.src = encodeURI(path + '.' + IMAGE_EXTS[0]);
}

let currentScreenshots = [];
let currentCaptions = [];
let currentScreenshotIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initBackToTop();
    initProjectCards();
    initDesignCards();
    initProjectDetails();
    initImageModal();
    initKeyboard();
});

/* ---------- Navigation ---------- */
function initNav() {
    const header = document.getElementById('siteHeader');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    const anchors = links.querySelectorAll('a');

    toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
    });

    anchors.forEach(a => a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    }));

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });

    // Highlight the link of the section currently in view
    const sections = [...anchors].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => observer.observe(s));
}

/* ---------- Back to top ---------- */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        btn.style.display = window.scrollY > 400 ? 'block' : 'none';
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------- Project cards ---------- */
function initProjectCards() {
    document.querySelectorAll('.project-card').forEach(card => {
        const open = () => {
            const key = card.getAttribute('data-project');
            if (projectsData[key]) showProjectDetails(projectsData[key]);
        };
        card.addEventListener('click', open);
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                open();
            }
        });
    });
}

/* ---------- Design cards ---------- */
function initDesignCards() {
    document.querySelectorAll('.design-img img[data-base]').forEach(img => {
        setImageSrc(img, img.getAttribute('data-base'));
    });

    document.querySelectorAll('.design-card').forEach(card => {
        const open = () => {
            const design = designsData[card.getAttribute('data-design')];
            if (!design) return;
            currentScreenshots = design.images.map(i => i.src);
            currentCaptions = design.images.map(i => i.caption);
            openImageModal(currentScreenshots[0]);
        };
        card.addEventListener('click', open);
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                open();
            }
        });
    });
}

/* ---------- Project details ---------- */
function initProjectDetails() {
    document.getElementById('closeProjectDetails').addEventListener('click', closeProjectDetailsPage);
}

function showProjectDetails(project) {
    const details = document.getElementById('projectDetails');
    currentScreenshots = project.screenshots;
    currentCaptions = [];

    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectRole').textContent = project.role;
    document.getElementById('projectTools').textContent = project.tools;
    document.getElementById('projectPlatform').textContent = project.platform;
    document.getElementById('projectDate').textContent = project.date;
    document.getElementById('projectGeneralRole').textContent = project.generalRole;

    const list = document.getElementById('projectContributions');
    list.innerHTML = '';
    project.contributions.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        list.appendChild(li);
    });

    document.getElementById('projectVideo').src = project.video;

    const grid = document.getElementById('screenshotsGrid');
    grid.innerHTML = '';
    project.screenshots.forEach((src, i) => {
        const item = document.createElement('div');
        item.className = 'screenshot-item';
        const img = document.createElement('img');
        img.src = src;
        img.alt = `${project.title} screenshot ${i + 1}`;
        img.loading = 'lazy';
        item.appendChild(img);
        item.addEventListener('click', () => openImageModal(src));
        grid.appendChild(item);
    });

    details.classList.remove('hidden');
    details.scrollTop = 0;
    document.body.style.overflow = 'hidden';
}

function closeProjectDetailsPage() {
    document.getElementById('projectDetails').classList.add('hidden');
    document.getElementById('projectVideo').src = ''; // stop video playback
    document.body.style.overflow = '';
}

/* ---------- Screenshot viewer ---------- */
function initImageModal() {
    const modal = document.getElementById('projectModal');

    modal.querySelector('.close').addEventListener('click', closeImageModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeImageModal(); });
    document.getElementById('modalPrev').addEventListener('click', e => { e.stopPropagation(); stepImage(-1); });
    document.getElementById('modalNext').addEventListener('click', e => { e.stopPropagation(); stepImage(1); });
}

function openImageModal(src) {
    currentScreenshotIndex = currentScreenshots.indexOf(src);
    setImageSrc(document.getElementById('modalImage'), src);
    document.getElementById('modalCaption').textContent = currentCaptions[currentScreenshotIndex] || '';
    document.getElementById('projectModal').classList.add('show');

    const many = currentScreenshots.length > 1;
    document.getElementById('modalPrev').style.display = many ? 'flex' : 'none';
    document.getElementById('modalNext').style.display = many ? 'flex' : 'none';
}

function closeImageModal() {
    document.getElementById('projectModal').classList.remove('show');
}

function stepImage(dir) {
    const n = currentScreenshots.length;
    currentScreenshotIndex = (currentScreenshotIndex + dir + n) % n;
    setImageSrc(document.getElementById('modalImage'), currentScreenshots[currentScreenshotIndex]);
    document.getElementById('modalCaption').textContent = currentCaptions[currentScreenshotIndex] || '';
}

/* ---------- Keyboard ---------- */
function initKeyboard() {
    document.addEventListener('keydown', e => {
        const modalOpen = document.getElementById('projectModal').classList.contains('show');
        const detailsOpen = !document.getElementById('projectDetails').classList.contains('hidden');

        if (e.key === 'Escape') {
            if (modalOpen) closeImageModal();
            else if (detailsOpen) closeProjectDetailsPage();
        } else if (modalOpen && e.key === 'ArrowLeft') {
            stepImage(-1);
        } else if (modalOpen && e.key === 'ArrowRight') {
            stepImage(1);
        }
    });
}