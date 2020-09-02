const modifierConfig = (api) => {
  api.cache(true);
  return {
    presets: [
      'next/babel'
    ],
    plugins: [
      [
        'babel-plugin-styled-components', {
          ssr: true,
          minify: true,
          displayName: true,
          preprocess: false,
        }
      ]
    ]
  };
}

module.exports = (api) => modifierConfig(api);
