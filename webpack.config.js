import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.resolve("./");

export default {
  cache: false,
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'swc-loader'
      }
    ]
  }
};
