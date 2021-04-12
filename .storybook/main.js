const path = require('path');
const { merge } = require('webpack-merge');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    //'@storybook/preset-create-react-app', // react-app includes sass-loader into its package, therefore react-app is not necessary since line-26 is configed w/ sass-laoder.
  ],

  webpackFinal: async (config, { configType }) => {
    return merge(config, {
      resolve: {
        modules: ['src', '.storybook'],
      },
      module: {
        rules: [
          {
            test: /\.scss$/,
            //use: ['style-loader', 'css-loader', 'sass-loader' ],
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { modules: true },
              },
              {
                loader: 'sass-loader',
                options: {
                  sassOptions: {
                    includePaths: [path.resolve(process.cwd(), 'node_modules')],
                  },
                },
              },
            ],
            // include: [
            //   //path.resolve(process.cwd(), 'src'),
            //   //path.resolve(process.cwd(), 'node_modules'),
            //   //path.resolve(process.cwd(), '.storybook'),
            // ],
          },
        ],
      },
    });
  },
};

// const path = require('path');
// const { merge } = require('webpack-merge');

// module.exports = {
//   stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/preset-create-react-app',
//   ],

//   webpackFinal: async (config, { configType }) => {
//     return merge(config, {
//       resolve: {
//         modules: ['src', '.storybook'],
//       },
//       module: {
//         rules: [
//           {
//             test: /\.scss$/,
//             include: [
//               path.resolve(process.cwd(), 'src'),
//               path.resolve(process.cwd(), 'node_modules'),
//               path.resolve(process.cwd(), '.storybook'),
//             ],
//             use: [
//               'style-loader',
//               {
//                 loader: 'css-loader',
//                 options: { modules: true },
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sassOptions: {
//                     includePaths: [path.resolve(process.cwd(), 'node_modules')],
//                   },
//                 },
//               },
//             ],
//           },
//         ],
//       },
//     });
//   },
// };
