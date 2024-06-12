'use client';

import {
  Card,
  CardBody,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import Wallet from '@/app/components/layout/Wallet';

export interface NavProps {
  user: {
    wallet: { inventory: string };
    prices: { traffic: string; date: string; limit: string };
    _id: string;
    email: string;
    password: string;
    name: string;
    accountStatus: string;
    accounts: {
      amount: string;
      userLimit: string;
      accountName: string;
      expireTime: string;
      serverType: null;
      id: string;
      _id: string;
    }[];
  };
}

export default function Nav({ user }: NavProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

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
          <Wallet inventory={user.wallet.inventory} />
        </NavbarItem>
        <NavbarItem>
          <Card className="hidden md:block">
            <CardBody>
              <p> {user.name} </p>
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
              className={` flex w-40 ${pathname === path ? 'font-bold text-blue-600' : 'text-zinc-950'} rounded-md bg-white p-2`}
            >
              {link}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
