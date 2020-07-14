# A starter project for React/Redux

> A minimalistic React/Redux starter project

To use:

* Fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-org]/[your-app].git
cd [your-app] && npm i
```

This is the structure of this boilerplate:

```sh
.
├── client
│   ├── actions
│   │   └── index.js
│   ├── components
│   │   ├── AddWord.jsx
│   │   ├── App.jsx
│   │   ├── Word.jsx
│   │   └── Words.jsx
│   ├── reducers
│   │   ├── index.js
│   │   └── words.js
│   └── index.js
├── public
│   ├── index.html
│   └── main.css
├── server
│   ├── index.js
│   └── server.js
├── .gitignore
├── package.json
├── README.md
└── webpack.config.js
```

Redux - a single place to keep track of your application state and then you can dispatch actions that run reducers and modify your state

Why redux-thunk?
With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extend the store's abilities, and let you write async logic that interacts with the store.

Store state can ONLY be modified by reducer functions.
