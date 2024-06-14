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
import { BiMenu } from 'react-icons/bi';

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
      isBordered
      maxWidth="2xl"
      className="border border-tprimary-200 bg-tprimary-100 py-5 text-white"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          icon={<BiMenu />}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="font-sans text-white sm:hidden"
        />
        <NavbarBrand className="flex flex-col items-start gap-4">
          <h1 className="md:text-3xl">داشبورد</h1>
          <p className="hidden  text-tgray-200 md:flex ">
            داشبورد ادمین مدیریت اکانت های vpn
          </p>
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
      <NavbarMenu className="mt-6 bg-[#22025cdcc]">
        {links.map(({ id, link, path }) => (
          <NavbarMenuItem className=" m-2" key={id}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href={path}
              className={` flex w-40 ${pathname === path ? 'text-blue-600 font-bold' : 'text-zinc-950'} rounded-md bg-white p-2`}
            >
              {link}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
