const path = require("path");

module.exports = {
  webpack: function (config, env) {
    config.resolve.fallback = {
      fs: false,
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve("browserify-zlib"),
      os: require.resolve("os-browserify/browser"),
      buffer: require.resolve("buffer/"),
      net: false,
      tls: false,
      crypto: require.resolve("crypto-browserify"),
      https: require.resolve("https-browserify"),
      http: require.resolve("stream-http"),
    };
    return config;
  },
};
