# Nasir Khan Portfolio - Specification Document

## 1. Concept & Vision

A premium, futuristic personal portfolio website for Nasir Khan, a Computer Science student specializing in AI & ML and Full Stack Development. The website embodies cutting-edge design with dark glassmorphism aesthetics, featuring dynamic particle animations, smooth micro-interactions, and a bold neon blue + purple color palette that creates an immersive, world-class experience.

## 2. Design Language

### Aesthetic Direction
Cyberpunk-meets-minimal: Dark, immersive backgrounds with floating glass cards, neon glows, and dynamic particle systems. The design feels like a futuristic command center.

### Color Palette
- **Primary**: `#6366F1` (Indigo/Purple glow)
- **Secondary**: `#06B6D4` (Cyan/Blue neon)
- **Accent**: `#8B5CF6` (Violet)
- **Background Dark**: `#0F0F1A` (Deep space black)
- **Background Light**: `#F8FAFC` (Clean white)
- **Glass**: `rgba(255, 255, 255, 0.05)` with blur
- **Text Primary Dark**: `#F1F5F9`
- **Text Primary Light**: `#1E293B`
- **Text Secondary**: `#94A3B8`

### Typography
- **Headings**: "Orbitron" (Google Font) - Futuristic, geometric
- **Body**: "Inter" (Google Font) - Clean, highly readable
- **Code/Accent**: "JetBrains Mono" (Google Font) - Technical feel

### Spatial System
- Base unit: 4px
- Container max-width: 1280px
- Section padding: 80px vertical
- Card padding: 24px
- Border radius: 16px (large), 12px (medium), 8px (small)

### Motion Philosophy
- Smooth entrance animations with stagger delays (100ms)
- Floating/pulsing effects on interactive elements
- Parallax-like depth on scroll
- Typing effect at 100ms per character
- Hover scale: 1.05 with glow intensification
- Page transitions: 400ms ease-out

### Visual Assets
- Icons: React Icons (Font Awesome, Lucide)
- Particles: Custom canvas-based particle system
- Gradients: Animated mesh gradients
- Glows: CSS box-shadow with blur

## 3. Layout & Structure

### Navigation
- Fixed glassmorphism navbar with blur backdrop
- Logo/Name on left, nav links centered, dark mode toggle on right
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
- Full viewport height
- Centered content with animated typing
- Particle background behind
- Social icons floating with neon glow
- Two CTA buttons with gradient borders

### About Section
- Two-column layout (image placeholder + text)
- Education timeline with vertical line and dots
- Glass card container

### Skills Section
- Grid of animated skill cards (3-4 columns)
- Progress bars with animated fill
- Icon + title + percentage

### Personality Section
- Horizontal scrolling cards or grid
- Icon + trait name
- Subtle float animation

### Projects Section
- Masonry-style grid (2-3 columns)
- Project cards with image, title, tech stack tags
- Hover reveals description

### Contact Section
- Glass form container
- Input fields with glowing focus states
- Social links row

### Footer
- Minimal with copyright and social icons
- Gradient border top

## 4. Features & Interactions

### Core Features
- Smooth scroll navigation
- Typing animation for hero text
- Particle background animation
- Dark/Light mode toggle with persistence
- Animated skill progress bars
- Hover effects on all interactive elements
- Responsive mobile navigation

### Interaction Details
- **Buttons**: Scale 1.05, glow intensifies, gradient shift on hover
- **Cards**: Slight lift (translateY -4px), border glow on hover
- **Nav links**: Underline animation, color change
- **Inputs**: Border color transition, glow on focus
- **Icons**: Rotate 360° or pulse on hover

### States
- Loading: Skeleton shimmer
- Hover: Glow + scale
- Active: Pressed state
- Disabled: Reduced opacity

## 5. Component Inventory

### Navbar
- Glass background with blur
- States: scrolled (more opaque), mobile-open

### HeroTitle
- Typing effect component
- Cursor blink animation

### GlassCard
- Reusable glassmorphism container
- Props: variant (default, highlighted), children

### SkillCard
- Icon, title, progress bar
- Animate on viewport enter

### ProjectCard
- Image, title, description, tags
- Hover overlay with "View Project"

### TimelineItem
- Year badge, title, description
- Connected with line/dots

### ContactForm
- Name, email, message inputs
- Submit button with loading state

### SocialIcon
- Platform-specific icon
- Neon glow effect
- Hover scale + rotate

### Footer
- Copyright text, social links
- Gradient top border

## 6. Technical Approach

### Stack
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS v3
- **Animation**: Framer Motion
- **Icons**: React Icons
- **State**: React useState/useContext

### Architecture
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Personality.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── GlassCard.jsx
│   ├── SocialIcon.jsx
│   ├── ParticleBackground.jsx
│   └── TypingEffect.jsx
├── context/
│   └── ThemeContext.jsx
├── App.jsx
├── main.jsx
└── index.css
```

### Key Implementation Details
- Particle canvas renders independently
- Theme preference persisted in localStorage
- Intersection Observer for scroll animations
- CSS custom properties for theme switching