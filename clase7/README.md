# CSS
## CSS in JS
### Problemas
- Global namespace
- Dependencies
- Dead code elimination
- Minification
- Sharing constants
- Isolation
### Soluciones
- Inline styles, resuelve todos los problemas de arriba y ademas nos da algunas nuevas ventajas, pero también nos limita para ciertas cosas, como asignar estilos para los estados del CSS _:hover :focus_, no podemos usar media queries, o sobreescribir propiedades.
- [Radium](https://github.com/FormidableLabs/radium)
- [CSS Modules](https://github.com/css-modules/css-modules)
create clase7/css-modules
```console
npm init -y
npm i webpack webpack-cli webpack-dev-server --save-dev
```
in _package.json_
```javascript
"scripts": {
  "start": "webpack-dev-server --open --mode development",
  "build": "webpack --mode production"
}
```
```console
npm i babel-loader babel-core babel-preset-env babel-preset-react --save-dev
```
Create a _.babelrc_ and add
```javascript
{
  "presets": ["env", "react"]
}
```
Then
```console
npm i react react-dom --save-dev
npm i html-webpack-plugin html-loader --save-dev
npm i style-loader css-loader --save-dev
mkdir src/js/components/{container,presentational}
touch src/index.html
```
Create a file _webpack.config.js_
```javascript
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use:[
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
```
Time to code...
- [Styled Components](https://github.com/styled-components/styled-components)

## Links
- [CSS in JS - video](https://vimeo.com/116209150)
- [CSS in JS - article](https://speakerdeck.com/vjeux/react-css-in-js)
- [CSS in JS examples](https://github.com/MicheleBertoli/css-in-js)
- [Webpack 4](https://www.valentinog.com/blog/webpack-4-tutorial/)