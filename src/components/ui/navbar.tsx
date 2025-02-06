import { Flex, Link } from '@chakra-ui/react';
import * as React from 'react';
import { FaHouseChimney } from 'react-icons/fa6';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaShoppingBag } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { Routes } from '@/constants';

const NavBarIcon = React.forwardRef<
  HTMLAnchorElement,
  { children: React.ReactNode; to: string }
>(function NavBarIcon({ children, to }, ref) {
  const { pathname } = useLocation();

  const isActive = pathname === to;

  return (
    <Link
      color={isActive ? 'brandWhite' : 'brandBlack.200'}
      transitionDuration={'5000ms'}
      scale={isActive ? '1.3' : '1'}
      fontWeight={isActive ? 'bold' : 'normal'}
      padding={'0.5rem'}
      outline={'none'}
      as={'a'}
      href={to}
      ref={ref}
    >
      {children}
    </Link>
  );
});

const Navbar = React.forwardRef<HTMLDivElement>(function Navbar(_, ref) {
  return (
    <Flex
      gridArea={'navbar'}
      backgroundColor="brandBlack"
      as={'nav'}
      borderRadius={'1rem'}
      position={{ base: 'absolute', mdToLg: 'static' }}
      justifyContent={'space-evenly'}
      bottom={'1rem'}
      width={{ base: '85%', md: '100%' }}
      margin={'0 auto'}
      left={'calc(50% - 85% / 2)'}
      padding={'1rem'}
      fontSize={'1.5rem'}
      ref={ref}
    >
      <NavBarIcon to={Routes.home}>
        <FaHouseChimney />
      </NavBarIcon>
      <NavBarIcon to={Routes.dashboard}>
        <MdSpaceDashboard />
      </NavBarIcon>
      <NavBarIcon to={Routes.tienda}>
        <FaShoppingBag />
      </NavBarIcon>
      <NavBarIcon to={Routes.config}>
        <IoSettingsSharp />
      </NavBarIcon>
    </Flex>
  );
});

export default Navbar;
