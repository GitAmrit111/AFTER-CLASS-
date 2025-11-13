# After Class - Engineering Education Platform

A modern, responsive educational website designed specifically for engineering students. The platform provides curated YouTube channel links, study materials, and resources organized by academic years.

## 🚀 Features

### Core Functionality
- **Year-wise Organization**: Separate pages for 1st, 2nd, 3rd, and 4th year courses
- **YouTube Integration**: Direct links to educational YouTube channels for each subject
- **Study Materials**: Access to notes, previous year questions (PYQ), and reference books
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design matching your provided mockup

### Interactive Features
- **Course Search**: Search functionality to find specific courses
- **Filter System**: Filter courses by department/branch
- **Progress Tracking**: Track learning progress (localStorage based)
- **Contact Form**: Integrated contact form with validation
- **Social Media Links**: Links to YouTube, LinkedIn, Instagram, and Twitter
- **Dark Mode**: Toggle between light and dark themes
- **Mobile Menu**: Responsive navigation for mobile devices

## 📁 File Structure

```
after-class/
├── index.html          # Main homepage
├── 1st-year.html       # First year courses page
├── 2nd-year.html       # Second year courses page
├── 3rd-year.html       # Third year courses page
├── 4th-year.html       # Fourth year courses page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Teal (#20b2aa)
- **Secondary**: Orange (#ff6b35)
- **Background**: Light gray with subtle grid pattern
- **Text**: Dark gray (#2c3e50)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Course Cards**: Hover effects, YouTube integration, resource links
- **Navigation**: Sticky header with year-based navigation
- **Hero Section**: Call-to-action with gradient background
- **Footer**: Contact form, social links, company information

## 🔧 Customization Guide

### Adding New Courses

1. **Update HTML**: Add new course cards to the appropriate year page
2. **Update JavaScript**: Add course key to `youtubeChannels` object in `script.js`
3. **Update Materials**: Add course materials to `courseMaterials` object

Example:
```javascript
// In script.js
const youtubeChannels = {
    'new-course': 'https://www.youtube.com/@NewCourseChannel',
    // ... other courses
};

const courseMaterials = {
    'new-course': {
        notes: 'https://drive.google.com/drive/folders/new-course-notes',
        pyq: 'https://drive.google.com/drive/folders/new-course-pyq',
        books: 'https://drive.google.com/drive/folders/new-course-books'
    }
};
```

### Updating YouTube Channels

Replace placeholder URLs in `script.js` with actual YouTube channel URLs:

```javascript
const youtubeChannels = {
    'data-structures-algorithms': 'https://www.youtube.com/@ActualChannelName',
    // Update with real channel URLs
};
```

### Adding Study Materials

Update the `courseMaterials` object with actual Google Drive links or other file hosting URLs:

```javascript
const courseMaterials = {
    'course-key': {
        notes: 'https://your-actual-notes-link.com',
        pyq: 'https://your-actual-pyq-link.com',
        books: 'https://your-actual-books-link.com'
    }
};
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎯 Course Categories

### 1st Year Courses
- Biology for Engineers
- Engineering Materials & Mechanics
- Environmental Studies
- Universal Human Values
- Constitution of India
- Computational Mathematics
- IOT Fab Lab
- MATLAB for Engineers
- Engineering Physics

### 2nd Year Courses
- Data Structures and Algorithms
- Relational Database Management System
- Principles of Artificial Intelligence
- Object Oriented Programming using Python
- Project Based Learning - I
- Statistics & Probability
- Management of Technology

### 3rd Year Courses
- Problem Solving using Computers
- Engineering Chemistry
- Electrical & Electronics Systems
- Technical Writing Clinic 1
- Calculus & Matrices
- Creativity & Innovation
- Engineering Graphics Lab

### 4th Year Courses
- Design and Analysis of Algorithms
- Operating Systems
- Software Engineering & Project Management
- Cloud Computing
- Machine Learning
- Computer Networks
- Web Technologies
- Recommender Systems
- Project Based Learning - III

## 🚀 Getting Started

1. **Download Files**: Save all files to your web server directory
2. **Update Links**: Replace placeholder YouTube URLs with actual channel links
3. **Add Materials**: Update study material links with actual file locations
4. **Customize**: Modify colors, fonts, or content as needed
5. **Deploy**: Upload to your web hosting service

## 🔗 Integration Options

### Analytics
The website includes Google Analytics integration points. Add your tracking code to track user interactions.

### Contact Form
The contact form is ready for backend integration. Connect it to your preferred email service or form handler.

### Social Media
Update social media links in the footer with your actual profiles.

## 🎨 Customization Tips

### Colors
Update CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #20b2aa;
    --secondary-color: #ff6b35;
    --text-color: #2c3e50;
}
```

### Fonts
Change fonts by updating the Google Fonts import and CSS font-family declarations.

### Layout
Modify grid layouts by adjusting the `courses-grid` CSS class.

## 📞 Support

For questions or customization help, refer to the code comments or contact the development team.

## 📄 License

This project is created for educational purposes. Feel free to modify and use as needed.

---

**After Class** - Unlock Your Engineering Potential! 🎓

