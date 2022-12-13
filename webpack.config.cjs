const path = require('path');


module.exports = {
  entry: "./src/scriptChallenge.js",
  mode: "production",
  target: "web",
  experiments: {
    topLevelAwait: true,
    futureDefaults: true
  },

  output: {
    path: path.resolve(__dirname),
    filename: "challenge.js",
  },
};


/*
module.exports = {
    entry: "./src/script.js",
    mode: "production",
    target: "web",
    experiments: {
      topLevelAwait: true,
      futureDefaults: true
    },
  
    output: {
      path: path.resolve(__dirname),
      filename: "index.js",
    },
  };
  */