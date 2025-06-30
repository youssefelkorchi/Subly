# Subly Landing Page (Frontend Demo)

This project is a simple frontend-only landing page built with React, Vite, and TypeScript, styled using Tailwind CSS. It serves as a demonstration of a clean and responsive design for a newsletter subscription service.

**Note:** This project is purely frontend and does not include any backend functionality for handling email subscriptions. The subscription form interaction is simulated.

## Technologies Used

*   React
*   Vite
*   TypeScript
*   Tailwind CSS
*   Lucide React (for icons)

## Setup and Running

Follow these steps to get the project running locally:

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd Subly
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or yarn dev
    # or pnpm dev
    ```

    This will start the Vite development server, and you can view the landing page in your browser, typically at `http://localhost:5173`.

4.  **Build the project (optional):**

    To create a production build of the project:

    ```bash
    npm run build
    # or yarn build
    # or pnpm build
    ```

    This will generate the production-ready files in the `dist` directory.

## Project Structure

The main application code is located in the `src` directory.
*   `src/App.tsx`: Contains the main React component for the landing page structure and content.
*   `src/main.tsx`: Entry point for the React application.
*   `src/index.css`: Global CSS file, likely including Tailwind directives.

Configuration files like `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, and TypeScript configuration files (`tsconfig.json`, etc.) are located in the project root.