const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlPageNames = ['busquedas', 'categorias', 'peliculas', 'series'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./html/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`] // respective JS files
  })
});


module.exports = {
    mode: 'development',
    entry:{ 
    main: './src/index.js',
    busquedas: './src/busquedas.js',
    categorias: './src/categorias.js',
    peliculas: './src/peliculas.js',
    series: './src/series.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,

    },

    
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: 'Piano music generator',
            template: './html/index.html',
            chunks: ['main']
        }),
    ].concat(multipleHtmlPlugins),
    module: {
        rules: [
             {
        test: /\.(png|jpg|gif)$/,
        include: [
          path.resolve(__dirname, './images/static'),
        ],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
        },
      },
      
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-inline-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
        },
      },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff2?|jpe?g|png|gif|ico)$/, 
                use: 'file-loader?name=./images/static/[name].[ext]'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                  {
                    loader: "resolve-url-loader", //resolve-url-loader needs to come *BEFORE* sass-loader
                    options: {
                      sourceMap: true
                    }
                  },
                  
                  
                ],
              }
        ],
    },
};