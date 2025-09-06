# Nambike - Next.js Landing Page

A modern, responsive landing page for Nambike, a social networking platform focused on building trust and meaningful relationships.

## 🚀 Features

- **Modern Design**: Clean, dark-themed UI with blue accent colors
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Components**: 
  - Hero section with call-to-action buttons
  - Video showcase section with embedded YouTube video
  - Newsletter signup with form validation
  - Navigation bar with smooth hover effects
- **TypeScript Support**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling for rapid development

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.3
- **Language**: TypeScript 5.4.5
- **Styling**: Tailwind CSS 3.4.4
- **Runtime**: React 18.2.0
- **Package Manager**: pnpm

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   ├── Footer.tsx           # Footer component with links
│   ├── Hero.tsx             # Hero section with main messaging
│   ├── Navbar.tsx           # Navigation bar with logo and menu
│   ├── Newsletter.tsx       # Newsletter signup form
│   └── VideoSection.tsx     # Video showcase section
├── public/
│   └── assets/
│       └── NambikeJustLogo.png  # Company logo
└── ...config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs-landing-page
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server

## 🎨 Design Features

- **Color Scheme**: Dark theme (#0d1117) with blue accents (#3b82f6)
- **Typography**: Clean, modern font stack with proper hierarchy
- **Interactive Elements**: Smooth transitions and hover effects
- **Form Validation**: Client-side validation with character counters
- **Responsive Design**: Mobile-first approach with breakpoints

## 🔧 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component-specific styles in individual component files

### Content
Update the content by modifying the respective component files:
- Hero messaging: `components/Hero.tsx`
- Navigation links: `components/Navbar.tsx`
- Newsletter content: `components/Newsletter.tsx`
- Footer information: `components/Footer.tsx`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

The application can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Railway**

For production deployment:
```bash
pnpm build
pnpm start
```

## 📄 License

This project is private and proprietary to Nambike.

## 🤝 Contributing

This is a private project. For any changes or improvements, please contact the development team.

---

Built with ❤️ by the Nambike team
