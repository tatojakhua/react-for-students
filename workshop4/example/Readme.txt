#install dependencies for eslint
npm i -D eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks

#create config file for eslint
.\node_modules\.bin\eslint --init


#scripts for lint

"lint": "eslint \"src/**/*.{js,jsx}\"",
"lint:fix": "eslint --fix \"src/**/*.{js,jsx}\""

#eslint config
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
  "plugins": ["react", "import", "jsx-a11y", "react-hooks", "prettier"],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react/prop-types": 0,
    "no-console": "warn"
  }
}

