# TaVyro Homepage

> Professional homepage for TaVyro - Fractional CHRO & People Advisory

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
tavyro-homepage/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── About.tsx
│   ├── Coaching.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Impact.tsx
│   ├── Navigation.tsx
│   ├── Pricing.tsx
│   ├── Services.tsx
│   ├── TargetAudience.tsx
│   └── TrustAnchors.tsx
├── public/                # Static assets
│   └── logo*.svg
├── images/                # Images
├── docs/                  # Documentation
│   ├── setup/            # Setup guides
│   ├── deployment/       # Deployment docs
│   └── email/            # Email configuration
├── scripts/               # Utility scripts
│   ├── setup/
│   ├── deployment/
│   └── email/
└── archive/               # Archived files
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI**: React 18 (functional components + hooks)
- **Deployment**: Vercel

## 🌐 Deployment

### Production
- **URL**: https://tavyro.ch
- **Branch**: `main`
- **Auto-deploy**: On push to main

### Staging
- **URL**: https://tavyro-tam.vercel.app
- **Branch**: `staging`
- **Auto-deploy**: On push to staging

## 📧 Email Configuration

Email is managed through Hostpoint:
- **Address**: hello@tavyro.ch
- **IMAP**: imap.hostpoint.ch:993 (SSL)
- **SMTP**: smtp.hostpoint.ch:465 (SSL)

See `docs/email/` for detailed setup guides.

## 📚 Documentation

- **Setup Guide**: [`docs/setup/`](docs/setup/)
- **Deployment Guide**: [`docs/deployment/`](docs/deployment/)
- **Email Setup**: [`docs/email/`](docs/email/)
- **Agent Instructions**: [`AGENTS.md`](AGENTS.md)

## 🧑‍💻 Development

### Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Code Style

- **Components**: PascalCase (e.g., `Hero.tsx`)
- **Files**: TypeScript (.tsx, .ts)
- **Styling**: Tailwind utility classes
- **Imports**: Absolute imports with `@/` alias

See [`AGENTS.md`](AGENTS.md) for detailed coding guidelines.

## 🌍 Domains

- **Production**: tavyro.ch
- **Staging**: tavyro-tam.vercel.app
- **DNS**: Managed by Hostpoint

## 📝 License

Private project - All rights reserved.

## 🤝 Contributing

This is a private project. For questions or contributions, contact the team.

---

**Built with ❤️ for TaVyro**
