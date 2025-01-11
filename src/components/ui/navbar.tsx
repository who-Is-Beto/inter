import { Flex, Link } from "@chakra-ui/react";
import * as React from "react";

const Navbar = React.forwardRef<HTMLDivElement>(function Navbar(_, ref) {
  return (
    <Flex
      gridArea={"navbar"}
      backgroundColor="brandGreen.300"
      as={"nav"}
      position={{ base: "absolute", mdToLg: "static" }}
      justifyContent={"space-evenly"}
      bottom={"2rem"}
      width={{ base: "80%", md: "100%" }}
      margin={"0 auto"}
      left={"calc(50% - 80% / 2)"}
      padding={"1rem"}
      ref={ref}
    >
      <Link color={"brand.green"} href="/">
        Home
      </Link>
      <Link href="/tienda">tienda</Link>
      <Link href="/config">config</Link>
    </Flex>
  );
});

export default Navbar;
