// 1. Import `extendTheme`

import {
  createSystem,
  defaultConfig,
  defineConfig,
  mergeConfigs,
} from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
const theme = defineConfig({
  theme: {
    tokens: {
      colors: {
        brandGreen: {
          DEFAULT: { value: '#ABF510' },
          100: { value: '#96D90E' },
          200: { value: '#87BE0C' },
          300: { value: '#73A608' },
        },
        brandBlue: {
          DEFAULT: { value: '#115FF2' },
          100: { value: '#E6EEFE' },
        },
        brandBlack: {
          DEFAULT: { value: '#000000' },
          100: { value: '#414045' },
          200: { value: '#EDF0EF' },
          300: { value: '#F3F6F6' },
        },
        brandWhite: {
          DEFAULT: { value: '#FFFFFF' },
        },
      },
    },
    textStyles: {
      body: {
        fontFamily: 'Nats sans-serif',
      },
    },
    layerStyles: {
      base: {
        backgroundColor: 'brandWhite',
        color: 'brandBlack.100',
      },
    },
  },
});

const config = mergeConfigs(defaultConfig, theme);
const system = createSystem(config);
export default system;
