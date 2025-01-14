import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";
import Navbar from "./navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  function Layout({ children }, ref) {
    return (
      <Flex
        flexDirection={"column"}
        w={"100%"}
        h={"100vh"}
        gridTemplateAreas={{
          sm: `content
                navbar`
        }}
        as="main"
        color={"brandBlack"}
        ref={ref}
        bg={"brandWhite"}
      >
        <Navbar />
        <Box gridArea="content" as="section">
          {children}
        </Box>
      </Flex>
    );
  }
);
