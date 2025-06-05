'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar';
import Link from 'next/link';
import Image from 'next/image';
import tiLogo from '../../public/icons/tiLogo.png';
import SearchBar from '@/components/ui/searchbar';
import NavigationIcons from '@/components/ui/navigation-icons';
import { FC } from 'react';
import { NavbarProps } from '@/types';
import { LOCALES, ROUTES, getLocalizedRoute } from '../../src/constants/i18n';

const NavbarComponent: FC<NavbarProps> = ({className}) => {
  return (
    <>
      <Navbar
        className="flex items-center h-20"
        maxWidth={'xl'}
        isBlurred={true}
      >
        {/* logo */}
        <NavbarBrand className="w-40 h-fit">
          <Link href={'/home'} className="flex items-center gap-3">
            <Image src={tiLogo} alt="icon" width={150} height={150} />
          </Link>
        </NavbarBrand>

        {/* menu buttons */}
        <NavbarContent className="hidden sm:flex gap-8 z-10">
          <NavigationMenu
            className="hidden md:flex items-center justify-between gap-8 h-full max-w-none"
            viewport={false}
          >
            <NavigationMenuList className="hidden md:flex gap-12 ">
              {/* curriculums button*/}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg">
                  Academics
                </NavigationMenuTrigger>
                <NavigationMenuContent className="cursor-pointer">
                  <NavigationMenuLink>TOEFL IBT</NavigationMenuLink>
                  <NavigationMenuLink>Into Reading</NavigationMenuLink>
                  <NavigationMenuLink>Library</NavigationMenuLink>
                  <NavigationMenuLink>Debate Club</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* reservation button */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg">
                  Admissions
                </NavigationMenuTrigger>
                <NavigationMenuContent className="cursor-pointer">
                  <NavigationMenuLink>TOEFL IBT</NavigationMenuLink>
                  <NavigationMenuLink>Library</NavigationMenuLink>
                  <NavigationMenuLink>Summer Camp</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* contacts button */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent className="cursor-pointer">
                  <NavigationMenuLink>Our goals</NavigationMenuLink>
                  <NavigationMenuLink>Our principles</NavigationMenuLink>
                  <NavigationMenuLink>Visiting</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-8" justify="center">
          <SearchBar />
          <NavigationIcons />
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
