CLONE of AIRBNB- MERN Application

STEPS:
1. Make local setup:
    Run React via Vite on localhost
    YARN-
    yarn create vite client
    yarn
    yarn dev

2. CSS- Tailwind (via yarn)
    yarn add tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    Indide tailwind config:
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ]

  Index.css- 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
https://tailwindcss.com/docs/guides/vite

3. For routing-
    yarn add reat-router-dom





EXTRAS:
1. https://github.com/vitejs/create-vite-app/issues/23
    cmd /c mklink /J "C:\Users\SabaRuhee" "C:\Users\Saba Ruhee"
    npm config set cache C:\Users\SabaRuhee\AppData\Roaming\npm-cache
    npm config set prefix C:\Users\SabaRuhee\AppData\Roaming\npm