# React-Redux-Express App Template
A template for applications with a frontend built with React and Redux and running on Express.js.Using Typescript, and with CSS Modules.

## Features
- [x] Typescript
- [x] CSS modules
- [ ] Seperate CSS files
- [ ] Common Chunks
- [x] Add redux-devtools
- [ ] React Router
- [ ] Server Side Rendering
- [x] React modules hot reloading
- [x] BundleAnalyzerPlugin
- [x] FriendlyErrorsWebpackPlugin - make common Webpack errors more readable
- [ ] Production config
- [ ] Frontend unit testing

`npm start` will start the Express server. The `prestart` script runs first and calls Webpack.
`npm run build` will run webpack.
`npm run lint` will show all the TSlint errors
`npm run fix` will attempt to fix all TSlint errors automatically
`npm run css` will generate typings for your CSS modules. This is so Typescript can stop complaining.
`npm run tsc` will run the Typescript compiler.
