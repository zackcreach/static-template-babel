# Static Template Using Webpack/BrowserSync/PostCSS

##A static page template featuring webpack 3 (with babel), browser-sync, and PostCSS and/or stylus!

Getting started:
1. `git clone https://github.com/zackcreach/static-template-babel.git`
2. `npm i`
3. `npm start`

`npm start` will launch a server in your default browser, and you're free to modify anything in ./assets from there! Webpack runs any js through babel with babel-preset-env and any css through postcss plugins (configurable in postcss.config.js). Server serves all files through ./public.