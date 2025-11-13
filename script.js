// After Class - Interactive JavaScript Functions

// YouTube Channel Links Database
const youtubeChannels = {
    // 1st Year Courses
    'biology-engineering': 'https://www.youtube.com/playlist?list=PLAggmvP4R7cb910m_wa7D14LRSoW2d1V1',
    'materials-mechanics': 'https://www.youtube.com/playlist?list=PLDN15nk5uLiAyM7MbRBF1eIFC8y5vMRxI',
    'environmental-studies': 'https://www.youtube.com/playlist?list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg',
    'human-values': 'https://www.youtube.com/playlist?list=PLFW6lRTa1g83uYgRiZEy_F4pzedPNWpew',
    'constitution-india': 'https://www.youtube.com/playlist?list=PL7oC2DMtH6v_9zvytyUUE_TSERzwNty4D',
    'computational-math': 'https://www.youtube.com/playlist?list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg',
    'iot-fab-lab': 'https://www.youtube.com/playlist?list=PLGs0VKk2DiYw-L-RibttcvK-WBZm8WLEP',
    'matlab-engineers': 'https://www.youtube.com/playlist?list=PLjVLYmrlmjGcNZrPa9bRg0JVlcxLX4Mu9',
    'engineering-physics': 'https://www.youtube.com/playlist?list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC',
    'calculus-matrices-ma1001': 'https://www.youtube.com/playlist?list=PLU6SqdYcYsfI7Ebw_j-Vy8YKHdbHKP9am',
    'engineering-chemistry-cy1001': 'https://www.youtube.com/playlist?list=PLLf6O8XdGj01rrTYcPmFWLCYOsf6qJw64',
    'electrical-electronics-systems-ee1002': 'https://www.youtube.com/playlist?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc',
    'engineering-graphics-lab-me1035': 'https://www.youtube.com/watch?v=5VVEY246Cr8&list=PLDN15nk5uLiBDV2tAMDlR1snIX8WdTVYR',
    'problem-solving-computers-cs1002': 'https://youtu.be/e7sAf4SbS_g?si=2f_RgwLTkLERLT-D',
    
    // 2nd Year Courses
    'data-structures-algorithms': 'https://youtu.be/J0OvDNmAWNw?si=_C0wiLFAe3kB03N3',
    'rdbms': 'https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&si=M5k80MTrJgaYMoW2',
    'artificial-intelligence': 'https://youtube.com/playlist?list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&si=OJm4aY-YYfTfhxHs',
    'python-oop': 'https://youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&si=KtZV9k_7NqOlA3Sj',
    'dsa-lab': 'https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&si=kYVdT4nc1vQS9rsn',
    'rdbms-lab': 'https://youtube.com/playlist?list=PLHLPzYRdLRoyvF0CZ4uLCL0egthZMS-53&si=ejpby2fMCYvwGEJY',
    'statistics-probability': 'https://youtube.com/playlist?list=PLU6SqdYcYsfJPF-4HphQQ8OceDtqhlSW8&si=bOLDC0IuF0wydzhJ',
    'management-technology': 'https://youtube.com/playlist?list=PL6Fsa5HiAK-uaDR2UA-SOXNHTtq3RTypx&si=0HoLpjMWXxoUC35H',
    'cloud-computing-2nd': 'https://youtube.com/playlist?list=PLxCzCOWd7aiHRHVUtR-O52MsrdUSrzuy4&si=mikVWOxL7KdKk-f_',
    'design-analysis-algorithms-2nd': 'https://youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&si=Ce_F4ZiblaWIq_Ft',
    'engineering-economics-2nd': 'https://youtube.com/playlist?list=PL9FuOtXibFjW3cONv7t08tt1jAoYcsvod&si=HnuoDcZSHDyenP2z',
    'operating-systems-2nd': 'https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&si=Okyz6b0HmABORfeo',
    'software-engineering-pm-2nd': 'https://youtu.be/NlLM3sVF8wY?si=TsYTnBUmJlgueelF',
    
    // 3rd Year Courses
    'problem-solving-computers': 'https://www.youtube.com/@ProblemSolvingComputers',
    'problem-solving-lab': 'https://www.youtube.com/@ProblemSolvingLab',
    'engineering-chemistry': 'https://www.youtube.com/@EngineeringChemistry',
    'electrical-electronics-lab': 'https://www.youtube.com/@ElectricalElectronicsLab',
    'electrical-electronics-systems': 'https://www.youtube.com/@ElectricalElectronicsSystems',
    'technical-writing-clinic': 'https://www.youtube.com/@TechnicalWriting',
    'calculus-matrices': 'https://www.youtube.com/@CalculusMatrices',
    'creativity-innovation': 'https://www.youtube.com/@CreativityInnovation',
    'engineering-graphics-lab': 'https://www.youtube.com/@EngineeringGraphicsLab',
    
    // 4th Year Courses
    'design-analysis-algorithms': 'https://www.youtube.com/@DesignAnalysisAlgorithms',
    'operating-systems': 'https://www.youtube.com/@OperatingSystems',
    'software-engineering-pm': 'https://www.youtube.com/@SoftwareEngineeringPM',
    'daa-lab': 'https://www.youtube.com/@DAALab',
    'os-lab': 'https://www.youtube.com/@OSLab',
    'cloud-computing': 'https://www.youtube.com/@CloudComputing',
    'project-based-learning-2': 'https://www.youtube.com/@ProjectBasedLearning2',
    'infographics-design': 'https://www.youtube.com/@InfographicsDesign',
    'engineering-economics': 'https://www.youtube.com/@EngineeringEconomics',
    'machine-learning': 'https://www.youtube.com/@MachineLearning',
    'automata-compiler-design': 'https://www.youtube.com/@AutomataCompilerDesign',
    'computer-networks': 'https://www.youtube.com/@ComputerNetworks',
    'ml-lab': 'https://www.youtube.com/@MLLab',
    'networks-lab': 'https://www.youtube.com/@NetworksLab',
    'web-technologies': 'https://www.youtube.com/@WebTechnologies',
    'recommender-systems': 'https://www.youtube.com/@RecommenderSystems',
    'project-based-learning-3': 'https://www.youtube.com/@ProjectBasedLearning3',
    'forensic-science-info': 'https://www.youtube.com/@ForensicScienceInfo'
};

// Multiple Playlists Support (for courses with more than one playlist)
const multiplePlaylists = {
    'computational-math': [
        'https://www.youtube.com/playlist?list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg',
        'https://www.youtube.com/playlist?list=PLdM-WZokR4taU9Q5fuj6nY7_SPwg3I_01'
    ],
    'calculus-matrices-ma1001': [
        'https://www.youtube.com/playlist?list=PLU6SqdYcYsfI7Ebw_j-Vy8YKHdbHKP9am',
        'https://www.youtube.com/playlist?list=PLU6SqdYcYsfLlRGC9VM7bYVhXhxULZydQ'
    ],
    'engineering-chemistry-cy1001': [
        'https://www.youtube.com/playlist?list=PLLf6O8XdGj01rrTYcPmFWLCYOsf6qJw64',
        'https://www.youtube.com/playlist?list=PLLf6O8XdGj02SJgvTg8kiwSL8atdHC5vb',
        'https://www.youtube.com/playlist?list=PLT3bOBUU3L9jAWUXENWkXVomQmmqsQiLH'
    ],
    'electrical-electronics-systems-ee1002': [
        'https://www.youtube.com/playlist?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc',
        'https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLR-hMp7wem-bdVN1iEhsh'
    ],
    'engineering-graphics-lab-me1035': [
        'https://www.youtube.com/watch?v=5VVEY246Cr8&list=PLDN15nk5uLiBDV2tAMDlR1snIX8WdTVYR',
        'https://www.youtube.com/playlist?list=PLDN15nk5uLiC9wFOTiDp8ekWAf40BwSct',
        'https://www.youtube.com/playlist?list=PLDN15nk5uLiA9qy-OWuoEYoXsu7lsSaE9',
        'https://www.youtube.com/playlist?list=PLDN15nk5uLiBVR22X01vcnvVCuQIklXGx'
    ],
    'problem-solving-computers-cs1002': [
        'https://youtu.be/e7sAf4SbS_g?si=2f_RgwLTkLERLT-D',
        'https://youtu.be/irqbmMNs2Bo?si=xCyA_01tLYch49be',
        'https://www.youtube.com/playlist?list=PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt'
    ],
    'data-structures-algorithms': [
        'https://youtu.be/J0OvDNmAWNw?si=_C0wiLFAe3kB03N3',
        'https://youtu.be/MdG0Vw9f1A4?si=3GN2pllSPyCIlivg',
        'https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&si=CJ3mwSsTij07w2wm'
    ],
    'rdbms': [
        'https://youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&si=M5k80MTrJgaYMoW2',
        'https://youtube.com/playlist?list=PLV8vIYTIdSnYZjtUDQ5-9siMc2d8YeoB4&si=J1wbaopVt0dM3zQ1',
        'https://youtube.com/playlist?list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc&si=7Pw-ChBNDGkfC2L3',
        'https://youtu.be/YRnjGeQbsHQ?si=DdPbttJby7D9lypr'
    ],
    'artificial-intelligence': [
        'https://youtube.com/playlist?list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&si=OJm4aY-YYfTfhxHs',
        'https://youtube.com/playlist?list=PLV8vIYTIdSnYsdt0Dh9KkD9WFEi7nVgbe&si=U391_psPcZoKx-3F',
        'https://youtu.be/yiXAmkimZRQ?si=_5iGCmNXd17d7S-O',
        'https://youtu.be/y39OlGrVFD8?si=ZexnDerk1ISWcSdt'
    ],
    'statistics-probability': [
        'https://youtube.com/playlist?list=PLU6SqdYcYsfJPF-4HphQQ8OceDtqhlSW8&si=bOLDC0IuF0wydzhJ',
        'https://youtube.com/playlist?list=PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK&si=LJkVdQQk9sQe-WAA',
        'https://youtube.com/playlist?list=PLT3bOBUU3L9jex8hXzVAszMS8NOILa7IV&si=BXOpJw9UsEjmkvwB'
    ],
    'cloud-computing-2nd': [
        'https://youtube.com/playlist?list=PLxCzCOWd7aiHRHVUtR-O52MsrdUSrzuy4&si=mikVWOxL7KdKk-f_',
        'https://youtube.com/playlist?list=PLV8vIYTIdSnaKSiSGvJf2QquSN4lEzGob&si=JQxE-_V6NNzxNAKL',
        'https://youtu.be/6l88XYUjNIs?si=QP0OUSreHLs2t6Ol'
    ],
    'design-analysis-algorithms-2nd': [
        'https://youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O&si=Ce_F4ZiblaWIq_Ft',
        'https://youtu.be/z6DY_YSdyww?si=nl3uqe86il2Bc4ul',
        'https://youtu.be/h1mAUcDXCG0?si=bpydgCfvK6IssmUI'
    ],
    'engineering-economics-2nd': [
        'https://youtube.com/playlist?list=PL9FuOtXibFjW3cONv7t08tt1jAoYcsvod&si=HnuoDcZSHDyenP2z',
        'https://youtube.com/playlist?list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&si=KSNsKfC3XKiQyam0'
    ],
    'operating-systems-2nd': [
        'https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&si=Okyz6b0HmABORfeo',
        'https://youtube.com/playlist?list=PLdo5W4Nhv31a5ucW_S1K3-x6ztBRD-PNa&si=6rQEufFBDCjWWPfd',
        'https://youtu.be/xw_OuOhjauw?si=FvVnJxCREx60HKHc',
        'https://youtube.com/playlist?list=PLV8vIYTIdSnZ67NQObdXE0gFjrzPrNKHp&si=lRG1HZtLfCXlf7bI'
    ],
    'software-engineering-pm-2nd': [
        'https://youtu.be/NlLM3sVF8wY?si=TsYTnBUmJlgueelF',
        'https://youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&si=W0KOEU9Ko5BFyios',
        'https://youtube.com/playlist?list=PLV8vIYTIdSnat3WCO9jfehtZyjnxb74wm&si=FFEEFEhRbLo96-ZZ'
    ],

    // 3rd Year Courses
    'automata-compiler-design': [
        'https://youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev&si=-aoamgngsR1TgMi_',
        'https://youtube.com/playlist?list=PL1QH9gyQXfgsUBfYUR0WirJASgif4pHVX&si=d478wqWzdHHKsxPP',
        'https://youtu.be/9kuynHcM3UA?si=sggMn91m5lq2cjpJ'
    ],
    'computer-networks': [
        'https://youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&si=VjPbT2JZg_8P8w-U',
        'https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=Cj6y-zvgS332C1Iz',
        'https://youtube.com/playlist?list=PLV8vIYTIdSnYgxRYBC7blHaVUGFHUXLns&si=lePuX3RuP7itSD_5',
        'https://youtu.be/q3Z3Qa1UNBA?si=msbndVcF9VWIuV3O'
    ],
    'machine-learning': [
        'https://youtube.com/playlist?list=PLxCzCOWd7aiEXg5BV10k9THtjnS48yI-T&si=nb7chZpGVaVOt5Ix',
        'https://youtu.be/JxgmHe2NyeY?si=tSKZ1MDTTqmnI_AP',
        'https://youtube.com/playlist?list=PLTDARY42LDV7WGmlzZtY-w9pemyPrKNUZ&si=FkbP8hCAN0Ut2Pia'
    ],
    'recommender-systems': [
        'https://youtube.com/playlist?list=PL_kDeKiHpanLpehOCmmnnsdg-eut3azLI&si=ZmqzQaaQCXu1gr4F'
    ],
    'web-technologies': [
        'https://youtu.be/HcOc7P5BMi4?si=u170IviMslE_WrK5',
        'https://youtu.be/ESnrn1kAD4E?si=K-TjW3TCvavSfH4E',
        'https://youtu.be/VlPiVmYuoqw?si=shfMwpA-ZWkZ-Lag',
        'https://youtu.be/BSO9C8Z-YV8?si=d2HGc5MeoI_aPOpF'
    ]
};

// Course Materials Database
const courseMaterials = {
    'biology-engineering': {
        notes: 'https://drive.google.com/drive/folders/biology-notes',
        pyq: 'https://drive.google.com/drive/folders/biology-pyq',
        books: 'https://drive.google.com/drive/folders/biology-books'
    },
    'materials-mechanics': {
        notes: 'https://drive.google.com/drive/folders/materials-notes',
        pyq: 'https://drive.google.com/drive/folders/materials-pyq',
        books: 'https://drive.google.com/drive/folders/materials-books'
    }
    // Add more course materials as needed
};

// Function to open YouTube channel
function openYouTube(courseKey) {
    const channelUrl = youtubeChannels[courseKey];
    if (channelUrl) {
        window.open(channelUrl, '_blank');
        // Track the click for analytics
        trackCourseClick(courseKey, 'youtube');
    } else {
        showNotification('YouTube channel not available for this course yet.', 'warning');
    }
}

// Function to open multiple playlists (for courses with more than one playlist)
function openMultiplePlaylists(courseKey) {
    const playlists = multiplePlaylists[courseKey];
    if (playlists && playlists.length > 0) {
        // Open all playlists
        playlists.forEach((playlist, index) => {
            setTimeout(() => {
                window.open(playlist, '_blank');
            }, index * 200); // Small delay to avoid popup blockers
        });
        trackCourseClick(courseKey, 'youtube-multiple');
    } else {
        // Fallback to single playlist
        openYouTube(courseKey);
    }
}

// Function to open a specific playlist by index
function openPlaylist(courseKey, playlistIndex = 0) {
    const playlists = multiplePlaylists[courseKey];

    // Prefer multiplePlaylists if configured
    if (playlists && playlists.length > playlistIndex && playlists[playlistIndex]) {
        // Navigate in the same tab so it is not blocked by popup blockers
        window.location.href = playlists[playlistIndex];
        trackCourseClick(courseKey, `youtube-playlist-${playlistIndex}`);
        return;
    }

    // Fallback: if index is 0 and we have a single URL in youtubeChannels, open that
    if (playlistIndex === 0 && youtubeChannels[courseKey]) {
        window.location.href = youtubeChannels[courseKey];
        trackCourseClick(courseKey, 'youtube');
        return;
    }

    // If nothing is configured, show a friendly message
    showNotification('Playlist not available for this course yet.', 'warning');
}

// Function to open course materials
function openCourseMaterial(courseKey, materialType) {
    const materials = courseMaterials[courseKey];
    if (materials && materials[materialType]) {
        window.open(materials[materialType], '_blank');
        trackCourseClick(courseKey, materialType);
    } else {
        showNotification(`${materialType} not available for this course yet.`, 'info');
    }
}

// Function to track course clicks for analytics
function trackCourseClick(courseKey, action) {
    // This would integrate with analytics services like Google Analytics
    console.log(`Course clicked: ${courseKey}, Action: ${action}`);
    
    // Example analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'course_interaction', {
            'course_key': courseKey,
            'action': action
        });
    }
}

// Function to show notifications
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Filter functionality for main page
document.addEventListener('DOMContentLoaded', function() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const yearSections = document.querySelectorAll('.year-section');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter sections based on selected filter
            yearSections.forEach(section => {
                if (filter === 'all') {
                    section.style.display = 'block';
                } else {
                    // This would need to be expanded based on actual course categorization
                    section.style.display = 'block';
                }
            });
        });
    });
    
    // Add fade-in animation to course cards
    const courseCards = document.querySelectorAll('.course-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    courseCards.forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
});

// Contact form handling
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get('name') || formData.get('Name') || form.querySelector('input[placeholder="Name"]').value;
    const email = formData.get('email') || formData.get('Email') || form.querySelector('input[type="email"]').value;
    const message = formData.get('message') || formData.get('Message') || form.querySelector('textarea').value;

    const to = 'prakashamrit139@gmail.com';
    const subject = encodeURIComponent('New message from After Class contact form');
    const bodyLines = [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    // Open the user's email client with a prefilled email
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    // Optional: show a small notification and reset the form
    showNotification('Opening your email app to send the message.', 'info');
    form.reset();
}

// Add event listener to contact forms
document.addEventListener('DOMContentLoaded', function() {
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.addEventListener('submit', handleContactForm);
    });
});

// Search functionality
function searchCourses(query) {
    const courseCards = document.querySelectorAll('.course-card');
    const searchTerm = query.toLowerCase();
    
    courseCards.forEach(card => {
        const courseTitle = card.querySelector('.course-title').textContent.toLowerCase();
        const courseDescription = card.querySelector('.course-description p')?.textContent.toLowerCase() || '';
        
        if (courseTitle.includes(searchTerm) || courseDescription.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add search functionality to main page
document.addEventListener('DOMContentLoaded', function() {
    // Create search bar if it doesn't exist
    const heroSection = document.querySelector('.hero-content');
    if (heroSection && !document.querySelector('.search-bar')) {
        const searchBar = document.createElement('div');
        searchBar.className = 'search-bar';
        searchBar.innerHTML = `
            <div class="search-container">
                <input type="text" id="course-search" placeholder="Search courses..." onkeyup="searchCourses(this.value)">
                <i class="fas fa-search"></i>
            </div>
        `;
        heroSection.appendChild(searchBar);
    }
});

// Smooth scrolling for navigation
function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// Add mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu button
    const header = document.querySelector('.header .container');
    if (header && !document.querySelector('.mobile-menu-btn')) {
        const mobileBtn = document.createElement('button');
        mobileBtn.className = 'mobile-menu-btn';
        mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileBtn.onclick = toggleMobileMenu;
        header.appendChild(mobileBtn);
    }
});

// Course progress tracking
function trackCourseProgress(courseKey, progress) {
    // Store progress in localStorage
    const progressData = JSON.parse(localStorage.getItem('courseProgress') || '{}');
    progressData[courseKey] = progress;
    localStorage.setItem('courseProgress', JSON.stringify(progressData));
}

// Get course progress
function getCourseProgress(courseKey) {
    const progressData = JSON.parse(localStorage.getItem('courseProgress') || '{}');
    return progressData[courseKey] || 0;
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Load dark mode preference
document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});

// Export functions for global access
window.openYouTube = openYouTube;
window.openPlaylist = openPlaylist;
window.openMultiplePlaylists = openMultiplePlaylists;
window.openCourseMaterial = openCourseMaterial;
window.searchCourses = searchCourses;
window.toggleDarkMode = toggleDarkMode;

