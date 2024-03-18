export default {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          name: "static/media/[name].[hash].[ext]",
        },
      },
    });

    if (isServer) {
      config.externals.push("fs");
    }

    return config;
  },
};
