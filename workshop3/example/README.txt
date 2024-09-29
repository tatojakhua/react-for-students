# dependencies

# babel ----------------

@babel/cli @babel/core @babel/preset-env @babel/preset-react

#prettier ----------------
prettier


#parcel ----------------

parcel-bundler

#react ----------------

react
react-dom

#scripts ----------------

#babel
build script "build": "babel src/**/*.js --watch -d public/",
format script "format": "prettier --write \"src/**/*.{js,jsx}\""

#parcel
"dev": "parcel src/index.html"
"build": "parcel build src/index.html"