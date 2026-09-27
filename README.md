
# Browser Navigation Simulator

An interactive simulation of browser navigation using **Stack data structures**.

This project demonstrates how the **Back** and **Forward** operations of a browser can be modeled using the **LIFO (Last In, First Out)** principle of stacks.

## Features

* Back navigation using a stack
* Forward navigation using a stack
* Visit different simulated web pages
* Close the current page and return to the previous page
* Visual representation of Back, Current, and Forward states
* Operation history/log
* Responsive design for desktop and mobile
* Custom Stack implementation using TypeScript

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS
* Lucide React

---

# Project Structure

```text
browser-navigation-simulator/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── components/
│   │   ├── AddressBar.tsx
│   │   ├── BrowserToolbar.tsx
│   │   ├── NavigationButtons.tsx
│   │   ├── OperationLog.tsx
│   │   ├── SimulatedPage.tsx
│   │   ├── StackColumn.tsx
│   │   ├── StackPanel.tsx
│   │   └── StatusBar.tsx
│   │
│   ├── data-structures/
│   │   └── Stack.ts
│   │
│   ├── data/
│   │   └── pages.ts
│   │
│   ├── hooks/
│   │   └── useBrowserNavigation.ts
│   │
│   ├── types/
│   │   └── navigation.ts
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
├── .gitignore
└── README.md
```

---

# File Descriptions

## `src/data-structures/`

### `Stack.ts`

Contains the custom generic **Stack data structure** used by the project.

It implements:

* `push()` — adds an item to the top of the stack
* `pop()` — removes and returns the top item
* `peek()` — views the top item without removing it
* `isEmpty()` — checks whether the stack is empty
* `size()` — returns the number of items
* `clear()` — removes all items
* `toArray()` — returns the stack contents for displaying them in the UI

This is the main data structure used for browser navigation.

---

## `src/hooks/`

### `useBrowserNavigation.ts`

Contains the main **browser navigation logic**.

It manages:

* Back Stack
* Forward Stack
* Current Page
* Navigation history
* Visiting a new page
* Going Back
* Going Forward
* Closing the current page

This file connects the Stack data structure with the React interface.

---

## `src/data/`

### `pages.ts`

Contains the simulated web pages used in the project.

Each page contains information such as:

* Page ID
* Title
* URL
* Description
* Content

The pages are simulated and do not represent real browser navigation.

---

## `src/types/`

### `navigation.ts`

Contains TypeScript interfaces used throughout the project.

The main interface is `Page`, which defines the structure of a simulated webpage.

---

# Components

All files inside `src/components/` are responsible for different parts of the user interface.

### `BrowserToolbar.tsx`

Creates the browser-like toolbar at the top of the simulator.

It contains:

* Back button
* Forward button
* Reload button
* Address bar
* Close button

---

### `NavigationButtons.tsx`

Contains the Back and Forward buttons.

The buttons are disabled when the corresponding stack is empty.

---

### `AddressBar.tsx`

Displays the URL of the currently selected simulated page.

It behaves like a browser address bar visually but does not perform real web navigation.

---

### `SimulatedPage.tsx`

Displays the currently active simulated webpage.

It shows:

* Page title
* Description
* Page content
* URL

---

### `StackPanel.tsx`

Creates the overall **Navigation State** section.

It displays:

* Back Stack
* Current Page
* Forward Stack

---

### `StackColumn.tsx`

Displays an individual stack visually.

It is reused for:

* Back Stack
* Current Stack
* Forward Stack

It also shows the number of items in each stack.

---

### `OperationLog.tsx`

Displays a history of navigation operations performed by the user.

For example:

```text
01  Opened Google
02  Navigated to YouTube
03  Navigated to GitHub
04  Back → YouTube
05  Forward → GitHub
```

---

### `StatusBar.tsx`

Displays the current size of the Back and Forward stacks and indicates that the project uses the **LIFO** principle.

---

# Main Application Files

### `App.tsx`

The main application component.

It connects all the UI components together and uses `useBrowserNavigation()` to control the simulator.

---

### `main.tsx`

The entry point of the React application.

It renders the `App` component into the HTML page.

---

### `index.css`

Contains the global CSS and Tailwind CSS import used throughout the application.

---

### `App.css`

Contains additional application-level CSS if required.

---

# Configuration Files

### `package.json`

Contains:

* Project information
* Dependencies
* Development dependencies
* npm scripts

---

### `package-lock.json`

Locks the exact dependency versions installed for the project so that the project can be installed consistently on another machine.

---

### `vite.config.ts`

Contains the configuration for **Vite**, the development server and build tool used by the project.

It also configures the React and Tailwind CSS plugins.

---

### `tsconfig.json`

Main TypeScript configuration for the project.

---

### `tsconfig.app.json`

TypeScript configuration specifically used for the application source code.

---

### `tsconfig.node.json`

TypeScript configuration used for Node/Vite configuration files.

---

### `eslint.config.js`

Contains the ESLint configuration used to identify potential problems and maintain code quality.

---

### `index.html`

The main HTML file used by Vite.

It provides the root HTML element where the React application is rendered.

---

### `.gitignore`

Specifies files and folders that Git should not upload to the repository.

For example:

```text
node_modules/
dist/
.env
```

This prevents unnecessary or sensitive files from being committed.

---

### `README.md`

Documentation for the project.

It explains:

* What the project does
* Technologies used
* Project structure
* Purpose of each file
* How the project works

---

# How the Navigation Works

The simulator uses two stacks:

```text
Back Stack          Current Page          Forward Stack
    ↓                    ↓                     ↓

 [Page A]              Page C              [Page E]
 [Page B]                                    [Page F]
```

### Visiting a new page

When a new page is selected:

```text
backStack.push(currentPage)
currentPage = newPage
```

### Going Back

```text
forwardStack.push(currentPage)
currentPage = backStack.pop()
```

### Going Forward

```text
backStack.push(currentPage)
currentPage = forwardStack.pop()
```

The project intentionally keeps the Forward Stack when visiting a new page after going back, as part of the simulation's custom navigation model.

---

# Running the Project

Clone the repository:

```bash
git clone https://github.com/AdiRsingh/browser-navigation-simulator.git
```

Go into the project:

```bash
cd browser-navigation-simulator
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

---

# Data Structure

The project demonstrates the **Stack** data structure.

A stack follows:

> **LIFO — Last In, First Out**

Example:

```text
Push A
Push B
Push C

Stack:
C ← Top
B
A

Pop → C
```

This principle is used to simulate browser Back and Forward navigation.

---

# Project Purpose

This project was created as a practical demonstration of how **Stack data structures** can be applied to a real-world concept such as browser navigation.




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
