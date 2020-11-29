const CracoAntDesignPlugin = require('craco-antd');
const { CONFIG } = require('./src/configs/config.js');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackBar = require('webpackbar');

module.exports = {
  webpack: {
    plugins: [
      new AntdDayjsWebpackPlugin(),
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === 'development'
        ? [
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              openAnalyzer: false
            })
          ]
        : [])
    ]
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': CONFIG.primaryColor,
          '@font-family': 'Rubik, sans-serif',
          '@font-size-base': '16px',
          '@text-color': CONFIG.textColor,
          '@border-radius-base': '5px'
        },
        babelPluginImportOptions: {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true
        }
      }
    }
  ]
};
