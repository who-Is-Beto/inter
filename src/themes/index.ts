// 1. Import `extendTheme`

import {
  createSystem,
  defaultConfig,
  defineConfig,
  mergeConfigs
} from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = defineConfig({
  theme: {
    tokens: {
      colors: {
        brandGreen: {
          DEFAULT: { value: "#ABF510" },
          100: { value: "#96D90E" },
          200: { value: "#87BE0C" },
          300: { value: "#73A608" }
        }
      }
    }
  }
});

const config = mergeConfigs(defaultConfig, theme);
const system = createSystem(config);
export default system;
