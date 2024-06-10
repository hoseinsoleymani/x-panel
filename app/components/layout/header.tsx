'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  Card,
  CardBody,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';

import Wallet from '@/app/components/layout/Wallet';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  console.log(pathname);

  const delayedSetIsMenuOpen = (val: boolean) => {
    setTimeout(() => {
      setIsMenuOpen(val);
    }, 500);
  };

  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'صفحه اصلی',
      path: '/dashboard',
      icon: 'FaHome ',
    },
    {
      id: 4,
      link: 'ساخت یوزر',
      path: '/dashboard/create',
      icone: 'IoPersonAdd',
    },
    {
      id: 5,
      link: 'یوزر ها',
      path: '/dashboard/users',
      icon: 'FaUsers ',
    },
  ];

  return (
    <Navbar
      maxWidth="2xl"
      className="bg-[#22025cdcc]"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          onChange={setIsMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="text-xl" href="/">
            {' '}
            VPN LOGO{' '}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Wallet />
        </NavbarItem>
        <NavbarItem>
          <Card className="hidden md:block">
            <CardBody>
              <p> ابوالفضل حسن زاده</p>
            </CardBody>
          </Card>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-[#22025cdcc]">
        {links.map(({ id, link, path }) => (
          <NavbarMenuItem className=" m-2" key={id}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href={path}
              className={` flex w-40 ${pathname == path ? 'text-blue-600 font-bold' : 'text-zinc-950'} bg-white rounded-md p-2`}
            >
              {link}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
