import { Flex, Link } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const Navbar: FC = (): ReactNode => {
  return (
    <Flex
      bg={"brand.white"}
      as={"nav"}
      pos={"relative"}
      position={"absolute"}
      justifyContent={"space-evenly"}
      bottom={"2rem"}
      w={"80%"}
      mx={"auto"}
      left={"calc(50% - 80% / 2)"}
      p={"1rem"}
    >
      <Link color={"brand.green"} href="/">
        Home
      </Link>
      <Link href="/tienda">tienda</Link>
      <Link href="/config">config</Link>
    </Flex>
  );
};

export default Navbar;
