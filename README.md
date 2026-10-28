# Earning Hacks - Premium Cinematic Landing Page

A stunning, award-winning landing page with cinematic dark aesthetics, sophisticated 3D interactions, and premium visual design.

## ✨ Key Features

### 🎨 Premium Design
- **Dark cinematic theme** with charcoal/black backgrounds and subtle gradients
- **Oversized typography** with strong editorial composition
- **Electric cyan-blue accents** for CTAs and interactive elements
- **Glassmorphism cards** with blur effects and subtle borders
- **Immersive background** with noise texture, grid overlay, and floating particles
- **3D smartphone mockup** with realistic depth and reflections

### 🎮 Interactive 3D Effects
- **3D cursor tracking** - Device mockup tilts and rotates based on mouse position
- **Magnetic button effects** - CTAs respond to cursor proximity
- **Parallax movement** - Background elements move at different speeds
- **Tilt card effects** - Feature cards lift and tilt on hover
- **Dynamic cursor glow** - Radial highlight follows cursor movement
- **Floating animations** - Natural continuous movement on visual elements

### 🚀 Smooth Animations
- **Scroll-triggered reveals** - Staggered entrance animations
- **Counter animations** - Numbers count up smoothly
- **Ripple effects** - Button click feedback
- **Hover states** - Lift, tilt, and lighting effects
- **Spring-like easing** - Polished, natural movement
- **60 FPS performance** - Optimized for smooth rendering

### 📱 Responsive Design
- **Desktop** - Full 3D interactions and parallax
- **Tablet** - Adapted layout with preserved effects
- **Mobile** - Touch-friendly animations, simplified interactions
- **Reduced motion support** - Respects accessibility preferences
- **Performance optimized** - Pauses animations when tab is hidden

### 🎯 Conversion Focus
- **Single clear CTA** - Join Telegram (multiple strategic placements)
- **Trust indicators** - Free tips, trusted community, 24/7 support
- **Social proof** - Member count and daily tips
- **Modal popup** - Timed appearance (5 seconds, one-time)
- **Minimal distractions** - Clean, focused design

## 📁 Files

- `index.html` - Main HTML structure with semantic markup
- `styles.css` - Premium styling with CSS variables and animations
- `script.js` - Interactive features and 3D effects
- `logo.png` - Your brand logo (add this file)
- `README.md` - This documentation

## 🎨 Customization

### Adding Your Logo

Save your logo as `logo.png` in the project directory. The page will automatically use it in:
- Navigation bar (top left)
- Footer (bottom center)

**Recommended size:** 200x200px or similar (scales to 40px in navbar, 32px in footer)

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --bg-primary: #0a0a0a;        /* Main background */
    --bg-secondary: #111111;      /* Secondary background */
    --cyan-primary: #00d4ff;      /* Primary accent */
    --cyan-secondary: #00a8cc;    /* Secondary accent */
    --text-primary: #ffffff;      /* Main text */
    --text-secondary: #a0a0a0;    /* Secondary text */
}
```

### Telegram Link

Replace all instances of `https://t.me/Earninghacs` with your Telegram link:
- In `index.html` (search for the link)
- In `script.js` (optional analytics tracking)

### Statistics

Edit the stats in the device mockup:

```html
<div class="stat-value" data-count="1000">0</div> <!-- Members -->
<div class="stat-value" data-count="50">0</div>   <!-- Daily Tips -->
```

### Content

Update headlines, descriptions, and feature cards in `index.html`:
- Hero title and description
- Feature titles and descriptions
- CTA section text

## 🚀 Running the Page

### Option 1: Python (Recommended)
```bash
python3 -m http.server 8000
```
Open http://localhost:8000

### Option 2: Node.js
```bash
npx serve
```

### Option 3: VS Code Live Server
Install "Live Server" extension and click "Go Live"

## 🎯 Features Breakdown

### Hero Section
- Oversized typography with gradient text
- 3D smartphone mockup with cursor tracking
- Animated stats counter
- Glassmorphism cards
- Trust indicators
- Primary CTA with glow effect

### Features Section
- 5 feature cards with tilt effects
- Scroll-triggered animations
- Glassmorphism design
- Icon-based visual hierarchy

### CTA Section
- Large glass card container
- Prominent Telegram CTA
- Compelling copy

### Footer
- Brand logo
- Telegram social link
- Copyright text

### Modal
- Timed popup (5 seconds)
- One-time per visitor (localStorage)
- Glassmorphism design
- Persuasive copy

## 🎭 Animation Details

### 3D Device Tracking
- Tracks mouse position within hero section
- Rotates device based on cursor (up to 15 degrees)
- Smooth perspective transforms
- Resets on mouse leave

### Magnetic Buttons
- Attracts to cursor on hover
- Subtle movement (30% of cursor distance)
- Smooth easing
- Resets on mouse leave

### Parallax Background
- Multiple layers move at different speeds
- Gradient layers shift with cursor
- Particles float independently
- Creates depth illusion

### Tilt Cards
- Feature cards tilt on hover
- 3D perspective transforms
- Lift effect
- Resets on mouse leave

### Scroll Animations
- Hero content, feature headings and cards, CTA, and footer reveal as they enter view
- Staggered entrance for feature cards
- Smooth fade and slide
- Intersection Observer for performance
- Only animates once per element
- Honors reduced-motion preferences

## ♿ Accessibility

- **Reduced motion support** - Respects `prefers-reduced-motion`
- **Touch device detection** - Simplifies interactions on mobile
- **Keyboard navigation** - All interactive elements accessible
- **Semantic HTML** - Proper heading hierarchy
- **Color contrast** - Meets WCAG AA standards
- **Performance** - Pauses animations when tab hidden

## 📊 Performance

- **60 FPS animations** - Optimized with requestAnimationFrame
- **GPU acceleration** - CSS transforms and opacity
- **Lazy animations** - Only animate when visible
- **Reduced bundle** - No heavy dependencies
- **Efficient observers** - Unobserve after animation

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## � Tips

1. **Logo**: Add `logo.png` to the directory for custom branding
2. **Modal**: Only shows once per visitor (clear localStorage to test again)
3. **Performance**: Animations pause when tab is not visible
4. **Mobile**: Touch devices get simplified floating animation instead of 3D tracking
5. **Accessibility**: Reduced motion preference disables complex animations

## 🔧 Advanced Customization

### Adjust 3D Tracking Sensitivity

In `script.js`, modify the rotation values:

```javascript
device3d.style.transform = `
    perspective(1000px)
    rotateY(${x * 15}deg)  // Change 15 to adjust sensitivity
    rotateX(${-y * 15}deg) // Change 15 to adjust sensitivity
    translateZ(20px)
`;
```

### Change Animation Speeds

In `styles.css`, modify animation durations:

```css
@keyframes gradientFloat {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(5%, 5%) scale(1.05); }
}
.bg-gradient-1 {
    animation: gradientFloat 20s ease-in-out infinite; // Change 20s
}
```

### Disable Specific Effects

Comment out sections in `script.js`:
- `initMagneticButtons()` - Remove magnetic effect
- `initTiltCards()` - Remove tilt effect
- Parallax section - Remove background movement

## 📝 License

This landing page is designed for Earning Hacks. All rights reserved.

---

# EARNING-HACKS

**Made with ❤️ featuring premium cinematic design and interactive 3D effects**
