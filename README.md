This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Install TailwindCSS

<a href="https://tailwindcss.com/docs/installation/using-postcss"> https://tailwindcss.com/docs/installation/using-postcss </a>

```
npm install -D tailwindcss postcss autoprefixer
```

## create your tailwind.config.js file.

```
npx tailwindcss init
```

## Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.

```
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

TailwindCSS will apply automatic on (js, jsx, ts, tsx) files in Pages and Components folder

## Add 
add these command in globals.css inside style folder 

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# React-Hook-Form

<a href="https://react-hook-form.com/get-started">https://react-hook-form.com/get-started</a>

```
npm install react-hook-form
```

get boiler plate from above website

# JSON-Server

<a href="https://github.com/typicode/json-server">https://github.com/typicode/json-server </a>

```
npm install -g json-server
```

## Run json-server on port 3004

```
json-server --watch db.json --port 3004
```
