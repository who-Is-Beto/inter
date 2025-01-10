// 1. Import `extendTheme`

import { createSystem, defineConfig } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const config = defineConfig({
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

const theme = createSystem(config);

export default theme;
