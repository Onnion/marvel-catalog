[![Maintainability](https://api.codeclimate.com/v1/badges/3e808891bb166803cf0e/maintainability)](https://codeclimate.com/github/Onnion/marvel-catalog/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3e808891bb166803cf0e/test_coverage)](https://codeclimate.com/github/Onnion/marvel-catalog/test_coverage)
[![Build Status](https://travis-ci.com/Onnion/marvel-catalog.svg?branch=master)](https://travis-ci.com/Onnion/marvel-catalog)
[![Heroku](https://heroku-badge.herokuapp.com/?app=marvel-catalog-dextra&root=index.html)](https://marvel-catalog-dextra.herokuapp.com/#)



<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/800px-MarvelLogo.svg.png" />

# Marvel Calalog
[Demo](https://marvel-catalog-dextra.herokuapp.com/#)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Stack

#### Development

- react + typescript
- redux + redux-saga
- react-router-dom
- styled-components
- axios

## External APIs

- [Marvel](https://developer.marvel.com)
- [Google Translate](https://rapidapi.com/googlecloud/api/google-translate1)

  The `Google Translate` api changed the way to obtain a key, so the project now no longer has the option to search for characters in `pt-BR`, only `en`.

## Installation & Environments

Copy `env.exemple.ts` to `src/configs/env.ts` and set environment variables then run following

```bash
  $ yarn install
```

## Running

#### Application

```bash
 $ yarn start
```

- Project is running at http://localhost:3000/
