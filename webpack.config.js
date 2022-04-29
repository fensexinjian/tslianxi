/*
 * @Author: your name
 * @Date: 2022-04-22 09:21:49
 * @LastEditTime: 2022-04-29 14:08:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learnts\4.22lianxi\webpack.config copy.js
 */
// 引入一个包
const path = require("path")

//引入自动生成html的包
const HtmlWebpackPlugin = require("html-webpack-plugin")

//引入更新dist文件的插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const postcssPresetEnv = require("postcss-preset-env")

// webpack中的所有的配置信息都应该写入moudle.exports中
module.exports = {
  mode: "development",
  // 指定入口文件
  entry: "./src/index.ts",
  // 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    // 指定打包后文件的文件
    filename: "bundle.js",
    //编译的时候不使用箭头函数
    environment: {
      arrowFunction: false,//不使用箭头函数
      const: false//不使用const
    }
  },

  //webpack打包时要使用到module这个模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // use是要使用的loader
        //配置babel
        use: [
          {//指定加载器
            loader: "babel-loader",
            options: {
              //设置预定义环境
              presets: [
                [
                  //指定环境的插件
                  "@babel/preset-env",
                  //配置信息
                  {
                    //要兼容的浏览器
                    targets: {
                      "chrome": "88"
                    },
                    // 指定corejs的版本
                    "corejs": "3",
                    //表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        //设置不被打包上传的文件
        exclude: ["/node_modules/"]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browser: "last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          "less-loader",
        ]
      }
    ]
  },

  // 配置webpack插件
  plugins: [
    new HtmlWebpackPlugin({
      // 自定义html模板地址
      template: "./src/index.html"
    }),
    //每次打包上线之前都会自动清空dist内的文件如何重新生成最新的文件
    new CleanWebpackPlugin()
  ],

  resolve: {
    //解决在ts文件内部单独引入其他ts包时候报错的问题
    extensions: ['.ts', '.js']
  }
}