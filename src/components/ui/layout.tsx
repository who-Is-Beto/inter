import { Box, SimpleGrid } from "@chakra-ui/react";
import * as React from "react";
import Navbar from "./navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  function Layout({ children }, ref) {
    return (
      <SimpleGrid
        columns={{ sm: 1 }}
        gridTemplateAreas={{
          sm: `content
              navbar`
        }}
        as="main"
        ref={ref}
      >
        <Navbar />
        <Box gridArea="content" as="section">
          {children}
        </Box>
      </SimpleGrid>
    );
  }
);
