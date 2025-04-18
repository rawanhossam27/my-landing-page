# Gates of Egypt 🌴🇪🇬

A sleek and modern travel website built using **Next.js**, **Tailwind CSS**, and **Chakra UI**, designed to help users explore and discover the best stays in Egypt. This is the front-end prototype of the project with basic UI components and some implemented features like search and date selection.

---

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/) – React framework for server-rendered apps.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for styling.
- [Chakra UI](https://chakra-ui.com/) – Modular and accessible component library for React.

---

## 📁 File Structure & Component Overview

### `navbar-notSignedIn/`
- **Navbar components** for users who aren't signed in.
- Includes **Login** and **Signup** buttons (currently non-functional).
- Contains the **Search** functionality:
  - `search.js`: Opens a text box for search input.
  - Dropdown for **most popular searches**.

### `welcome.js`
- Displays the **main welcome section** with background and text.
- Includes a styled **oval reservation bar**, which renders:
  - `location.js`: Dropdown to select a **location**.
  - `calendar.js`: Functional calendar to pick **start and end dates**.
  - `people.js`: Dropdown with counters to select **number of adults, children, and rooms**.
  - **Explore Stays** button (currently non-functional).

### `most-relevant.js`
- Displays **most relevant places** with horizontal scroll.
- Uses:
  - `move-left.js` and `move-right.js`: Navigation arrows for scrolling.

### `discover.js`
- Section to **discover new places**.
- Also includes horizontal navigation using `move-left.js` and `move-right.js`.

### `why.js`
- Outlines **reasons to choose EGYbook** for travelling in Egypt.

### `trending.js`
- Showcases **trending destinations**.
- Adds a **hue effect** over photos.
- Renders left/right movement with `move-left.js` and `move-right.js`.

### `ready.js`
- Displays **"Ready to Explore New Places"** call-to-action.
- Includes a **Book Now** button (currently non-functional).

### `footer.js`
- Contains the **footer section**:
  - Social media links.
  - Copyright.
  - Logo.
  - Yellow hue styling at the bottom.

---

## 🔧 Features in Progress

## 🔧 Features in Progress

- 🔒 Authentication (Login/Signup)
- 🧭 Functional navigation & routing
- 🔍 Explore stays functionality
- 👤 Signed-in page and navbar
- 📱 Responsive mobile-first design

---


## 🛠 How to Run

```bash
# Clone the repository
git clone https://github.com/rawanhossam27/my-landing-page-GOE

# Navigate into the project directory
cd my-landing-page-GOE

# Install dependencies
npm install

# Start the development server
npm run dev
