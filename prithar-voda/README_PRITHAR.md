# Prithar Voda - Landing Page

A modern, high-conversion landing page for the **Prithar Voda** condom brand, built with React 19, Tailwind CSS 4, and a bold cyberpunk-luxury aesthetic.

## 🎨 Design Philosophy

**Bold Maximalist Energy** - Cyberpunk meets Luxury Wellness

- **Deep black backgrounds** (#0a0a0a) with **hot pink neon accents** (#ff0055)
- **Glassmorphism effects** for premium, frosted-glass appearance
- **Dynamic animations** and glowing borders conveying confidence and modernity
- **Poppins typography** - modern, geometric, and bold
- **Asymmetric layouts** with diagonal divisions and layered depth

## 🚀 Features

- **Hero Section**: Full-bleed background with neon glow effects and dual CTA buttons
- **Features Section**: Three showcase cards highlighting product benefits with hover animations
- **Live Trial Section**: Testimonial area with video placeholder
- **Pricing Section**: Three-tier pricing with featured "Pro Pack" option
- **Responsive Navigation**: Sticky navbar with mobile menu support
- **Interactive Elements**: Smooth scrolling, hover effects, and modal dialogs
- **Custom Animations**: Glow pulses, float effects, slide-in animations, and shake on hover

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Tailwind CSS 4** - Utility-first styling
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Lucide React** - Icon library
- **shadcn/ui** - Pre-built UI components

## 📁 Project Structure

```
prithar-voda/
├── client/
│   ├── public/          # Static assets (favicon, robots.txt)
│   ├── src/
│   │   ├── pages/       # Page components (Home.tsx)
│   │   ├── components/  # Reusable UI components
│   │   ├── App.tsx      # Main app component with routing
│   │   ├── main.tsx     # React entry point
│   │   └── index.css    # Global styles and design tokens
│   └── index.html       # HTML entry point
├── server/              # Backend placeholder (static only)
├── package.json         # Dependencies
└── README_PRITHAR.md    # This file
```

## 🎯 Design Elements

### Color Palette
- **Primary**: Hot Pink (#ff0055) - Passion, sensuality, confidence
- **Secondary**: Electric Cyan (#00d9ff) - Modernity, trust, precision
- **Background**: Deep Black (#0a0a0a) - Premium, sophisticated
- **Text**: White (#ffffff) - High contrast, readability

### Typography
- **Display**: Poppins Bold (700) - Headlines
- **Body**: Poppins Regular (400) - Body text
- **Accent**: Poppins SemiBold (600) - Emphasis and CTAs

### Custom Animations
- **glow-pulse**: Neon glow effect on cards
- **neon-glow**: Text glow animation
- **float-up**: Entrance animation for hero content
- **shake-hover**: Playful shake on card hover
- **border-glow**: Animated border glow effect

## 🚀 Getting Started

### Installation
```bash
cd prithar-voda
pnpm install
```

### Development
```bash
pnpm dev
```
The dev server will start at `http://localhost:3000` (or next available port)

### Build
```bash
pnpm build
```

### Preview
```bash
pnpm preview
```

## 📱 Responsive Design

The landing page is fully responsive with breakpoints for:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎬 Key Sections

### Hero Section
- Full-screen background with neon glow effects
- Large, bold headline with pink accent text
- Dual CTA buttons: "Trial Sessions Dekhun" and "Ekhoni Order Korun"
- Animated floating icon

### Features Section
- Three feature cards with glassmorphism effect
- Icons: Heart, Zap, Heart (representing durability, sensation, lubrication)
- Hover animations with border glow effects
- Staggered entrance animations

### Live Trial Section
- Two-column layout (content + video placeholder)
- Benefit list with checkmarks
- Video placeholder with pulsing icon
- Responsive grid layout

### Pricing Section
- Three pricing tiers: Trial Pack (৳99), Pro Pack (৳299), Legend Pack (৳599)
- Featured "Pro Pack" with scale-up effect
- Detailed feature lists for each tier
- Order buttons with modal confirmation

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `client/src/index.css`:
```css
:root {
  --primary: #ff0055;        /* Hot pink */
  --secondary: #00d9ff;      /* Cyan */
  --background: #0a0a0a;     /* Black */
  /* ... more variables */
}
```

### Modifying Content
Edit `client/src/pages/Home.tsx` to update:
- Headlines and descriptions
- Feature items
- Pricing tiers
- Links and buttons

### Adding Images
Use the CDN URLs provided by the asset upload system. Replace placeholder URLs in:
- Hero section background
- Feature section accent pattern

## 📞 Contact & Support

For questions or customization requests, please contact the development team.

---

**Created**: March 2026  
**Brand**: Prithar Voda  
**Status**: Production Ready
