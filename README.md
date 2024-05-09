## ALEX MUTUKU | Portfolio

Site created in JavaScript, Vite, React, React Three Fiber, Three.js, TailwindCSS, Email.js, Framer Motion

# Packages(dependencies)/ Commands ran at development

Had Vite installed

```bash
npm create vite@latest ./ -- --template react
npm install -D tailwindcss
npx tailwindcss init
{/*--legacy-peer-deps allowsyou to install packages using an older version of npm's peer dependancy algorithm*/}
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
npm install --legacy-peer-deps -D postcss autoprefixer
npx tailwindcss init -p
npm install --legacy-peer-deps three
npm run build
```

# External files(borrowed)
- public
- src/assets
- components
- index.css
- styles.css
- tailwind.config.cjs
- utils/motion.js
- constants/index.js

# Emailjs
add new service/gmail/connect acc/createservice/emailtempl/createnetemp/*tempid,serviceid,publickey



# React + Vite

I setup React to work in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
