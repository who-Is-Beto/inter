import { Flex, Link } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const Navbar: FC = (): ReactNode => {
  return (
    <Flex
      backgroundColor="brandGreen.100"
      as={"nav"}
      position={"absolute"}
      justifyContent={"space-evenly"}
      bottom={"2rem"}
      width={"80%"}
      margin={"0 auto"}
      left={"calc(50% - 80% / 2)"}
      padding={"1rem"}
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
