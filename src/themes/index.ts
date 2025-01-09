// 1. Import `extendTheme`

import { createSystem, defineConfig } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        green: {
          value: "#ACF510"
        },
        black: {
          value: "#000"
        }
      }
    },
    semanticTokens: {
      colors: {
        "brand.green": {
          value: "{colors.green}"
        },
        "brand.black": {
          value: "{colors.black}"
        }
      }
    }
  }
});

const theme = createSystem(config);

export default theme;
