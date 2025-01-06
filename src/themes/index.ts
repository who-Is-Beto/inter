// 1. Import `extendTheme`

import { createSystem, defaultSystem, defineConfig } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        green: {
          value: "#ACF510"
        }
      }
    },
    semanticTokens: {
      colors: {
        "brand.green": {
          value: "{colors.green}"
        }
      }
    }
  }
});

const theme = createSystem(config);

export default theme;
