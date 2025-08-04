# Happy Family Game

A modern digital implementation of the classic card game "Happy Families" built with React, TypeScript, and Vite.

![Happy Family Game](public/placeholder.svg)

## 🎮 About the Game

Happy Family Game is a digital adaptation of the traditional card game where players collect sets of cards to form complete families. The goal is to collect as many complete families as possible by asking other players for specific cards.

### Game Features

- Interactive game board with intuitive UI
- Support for multiple players
- Beautiful card designs
- Responsive design for desktop and mobile play

## 🚀 Tech Stack

This project is built with:

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **pnpm** - Fast, disk space efficient package manager

## 📋 Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/happy-family-game.git
   cd happy-family-game
   ```

2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build for production
- `pnpm build:dev` - Build for development
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview the production build locally

## 🧩 Project Structure

```
happy-family-game/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   └── ui/          # UI components
│   ├── data/            # Game data
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Entry point
├── .eslintrc.js         # ESLint configuration
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 📦 Why pnpm?

This project uses [pnpm](https://pnpm.io/) as the package manager for several reasons:

- **Disk space efficiency**: pnpm uses a content-addressable store which saves disk space by avoiding duplication of packages
- **Faster installation**: pnpm is significantly faster than npm and yarn
- **Strict dependency management**: pnpm creates a non-flat node_modules structure that correctly represents your dependency graph
- **Workspace support**: pnpm has built-in support for monorepos

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Shadcn UI](https://ui.shadcn.com/) - UI component collection
- [Radix UI](https://www.radix-ui.com/) - Headless UI components
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Frontend tooling