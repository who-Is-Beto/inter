import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import theme from "@/themes";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={theme} i18nIsDynamicList>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
