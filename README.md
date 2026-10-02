# 📸 PhotoGallery — Ostad Module 15 Assignment

A modern, responsive, and visually stunning **Photo Gallery Web Application** built using **React 19 + Vite** and pure **Modern Vanilla CSS**. This project fetches and displays the first 100 photos from the [JSONPlaceholder Photos API](https://jsonplaceholder.typicode.com/photos) using React hooks (`useState`, `useEffect`) and native `fetch()` (no Axios).

---

## ✨ Features & Requirements

### 🎯 Core Requirements Satisfied
- [x] **Native `fetch()` API**: Fetches photos directly using browser's built-in `fetch()` without any third-party HTTP libraries like Axios.
- [x] **First 100 Photos**: Slices and displays the first 100 photos from the API.
- [x] **React Hooks**: Managed with `useState()` for state handling and `useEffect()` for component lifecycle and asynchronous fetching.
- [x] **Component Hierarchy**:
  - `Header.jsx`: Brand identity, stats, live search bar, and dark mode toggle.
  - `PhotoGallery.jsx`: Main gallery controller, filter pills, sorting dropdown, skeleton loaders, and photo grid.
  - `PhotoCard.jsx`: Reusable individual photo card with lazy loading, shimmer fallback, and hover actions.
  - `PhotoModal.jsx`: Lightbox dialog for viewing high-resolution photo details and technical specifications.
  - `Footer.jsx`: Attribution, course information, API credentials, and smooth scroll-to-top button.
- [x] **Props Data Flow**: Data flows cleanly from `PhotoGallery` into each `PhotoCard` component via props.
- [x] **Array Mapping**: Renders the 100 photos using JavaScript's `.map()`.
- [x] **Card Metadata**: Every card visibly displays:
  - 🖼️ Photo image (with fallback error handling & shimmer)
  - 🔢 Photo ID (`#ID`)
  - 📁 Album ID (`Album #`)
  - 📝 Photo Title (formatted and capitalized)
- [x] **Header & Footer**: Clean, sticky glassmorphic header and informative footer.

### 🌟 Bonus Features Implemented
- 🔍 **Live Search**: Instant search filtering by title, photo ID (e.g. `#1` or `1`), or album name.
- 📂 **Album Filter Pills**: Interactive buttons to filter photos by Album (All, Album 1, Album 2) with item counts.
- 🔀 **Sorting Controls**: Sort photos by ID (Ascending 1 &rarr; 100), ID (Descending 100 &rarr; 1), or Title (A &rarr; Z).
- 🌓 **Dark / Light Mode**: Seamless theme switching with smooth transitions, CSS variables, and `localStorage` persistence.
- 🔍 **View Details Lightbox**: Modal displaying high-resolution (600×600) image, album ID, photo ID, direct copy link, and link to original image.
- 📋 **Copy URL with Feedback**: One-click photo URL copying with animated tooltip and checkmark.
- ⚡ **Skeleton Loading Animation**: Shimmer skeleton placeholder cards displayed while API data is loading.
- 🔄 **Error Handling & Retry**: Graceful error alert with a "Retry Fetching Photos" button if network fails.

---

## 📁 Project Structure

```text
src/
├── assets/
│   └── (static assets)
├── components/
│   ├── Footer.jsx        # Footer with course info, stats, and back-to-top
│   ├── Header.jsx        # Header with branding, search, and theme switcher
│   ├── PhotoCard.jsx     # Card component displaying individual photo & meta
│   ├── PhotoGallery.jsx  # Gallery container with fetch, state, filters & grid
│   └── PhotoModal.jsx    # Lightbox modal for detailed photo inspection
├── App.css               # Component styles, glassmorphism, animations & grid
├── App.jsx               # Root layout, theme provider, and state connector
├── index.css             # Design tokens (colors, typography, shadows, reset)
└── main.jsx              # React 19 application entry point
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Component-based UI library |
| **Vite 8** | Ultra-fast build tool and dev server |
| **Native Fetch API** | Asynchronous HTTP data fetching (No Axios) |
| **Vanilla CSS** | Custom design system with CSS tokens, glassmorphism, responsive grid |
| **Lucide React** | Sleek, modern iconography |
| **JSONPlaceholder** | REST API providing photo mock data |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation
1. Clone or navigate to the repository directory:
   ```bash
   cd Assignment-on-Module-15
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

### Production Build
To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📝 Git Commit History

Commit milestones follow semantic conventions:
1. `chore: clean up previous project files for Module 15 photo gallery`
2. `chore: initialize React + Vite project setup with dependencies and metadata`
3. `feat: implement modern Header component with branding, search bar, and dark mode toggle`
4. `feat: implement modern Footer component with quick stats, links, and copyright`
5. `feat: implement PhotoCard component with photo, ID, album ID, title and hover actions`
6. `feat: implement PhotoGallery and PhotoModal components with native fetch(), album filtering, and view details`
7. `feat: integrate Header, PhotoGallery, Footer with dark mode theme switching and responsive styles`
8. `style: refine footer year purity, gallery performance memoization, and application entry point`
9. `docs: add comprehensive README documentation with project overview and feature breakdown`

---

## 👨‍💻 Author & Attribution

- **Course**: MERN Stack Web Development
- **Module**: Module 15 Assignment
- **Platform**: Ostad Academy
- **API Source**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
