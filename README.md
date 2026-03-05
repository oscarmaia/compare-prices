# Price Compare App

A mobile-first, minimalist React application built to help you find the true best value for your money. Stop wondering whether the 500ml or 1.25L bottle is a better deal—this app standardizes units across the board and instantly calculates the cheapest option.

## Features

- **Unit Standardization Engine**: Seamlessly compares radically different units (e.g., automatically scales `ml` and `L`, or `mg`, `g`, and `kg` to standard sizes).
- **"Best Value" Highlighting**: Automatically identifies the cheapest product per normalized unit and highlights it visually in the list.
- **Percentage Comparisons**: Shows exactly how much more expensive (in %) the other items are compared to the best value option.
- **Mobile-First Design**: Built with Tailwind CSS (v4) to guarantee large touch targets and a responsive, clean layout.
- **System Dark Mode**: Automatically adapts to your operating system's dark or light theme settings.
- **Fast & Modern**: Bootstrapped with Vite and React for instant HMR and quick load times.

## Getting Started

### Prerequisites
- Node.js installed

### Installation

1. Install all dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`.

## How it works

1. Enter the name, price, amount, and unit of your first item (e.g., "$3 for 500 ml").
2. Enter the details of your second item (e.g., "$5.50 for 1 L").
3. The app will immediately display both items, label the 1 Liter option as the **Best Value**, and tell you exactly how much more expensive the other item is per liter.

## Tech Stack
- React 19
- Vite
- Tailwind CSS 4
