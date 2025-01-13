import { Flex, Link } from "@chakra-ui/react";
import * as React from "react";
import { FaHouseChimney } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = React.forwardRef<HTMLDivElement>(function Navbar(_, ref) {
  return (
    <Flex
      gridArea={"navbar"}
      backgroundColor="brandBlack"
      as={"nav"}
      borderRadius={"1rem"}
      position={{ base: "absolute", mdToLg: "static" }}
      justifyContent={"space-evenly"}
      bottom={"2rem"}
      width={{ base: "80%", md: "100%" }}
      margin={"0 auto"}
      left={"calc(50% - 80% / 2)"}
      padding={"1rem"}
      ref={ref}
      color={"brandWhite"}
    >
      <Link href="/">
        <FaHouseChimney />
      </Link>
      <Link href="/dashboard">
        <MdSpaceDashboard />
      </Link>
      <Link href="/tienda">
        <FaShoppingBag />
      </Link>
      <Link href="/config">config</Link>
    </Flex>
  );
});

export default Navbar;
