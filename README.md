# GITHUB REPO USER STATS

This app can be used to search github users. The project implements auth0 for authentication. The data is derived from the github api for user search. The SPA shows the user info, followers, languages used by the user, most popular, starred and forked repos fot that user.

# Installing the required modules

```console
foo@foobar: npm install
```

## environment variable

Please note the if you want to download and use this project, you will have to setup .env file in the root folder of the project.
You can use the variable names provided below with corresponding value. You will have to sign up at [Auth0](https://auth0.com/).
REACT_APP_AUTHO_DOMAIN = domain from auth0
REACT_APP_CLIENTID = clientID from auth0

# Spinning the dev server

```console
foo@foobar: npm start
```

This will spin up a dev server usually @ localhost:3000, but please check your console to see the log message.

# production build

```console
foo@foobar: npm run build
```

This command will generate the production build for the app

## Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get Specific User](https://api.github.com/users/biplabwagle)
- [Repos](https://api.github.com/users/biplabwagle/repos?per_page=100)
- [Followers](https://api.github.com/users/biplabwagle/followers)
- [Rate Limit](https://api.github.com/rate_limit)

## Fusion Charts

- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)

## Auth0

- [React SDK Docs](https://auth0.com/docs/libraries/auth0-react)
- [REACT SDK API Docs](https://auth0.github.io/auth0-react/)

Cheers!!!
