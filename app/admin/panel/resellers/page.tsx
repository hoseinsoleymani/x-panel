import { cookies as cookiesReq } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

import User from '@/app/api/models/user';
import type { UserDB } from '@/app/dashboard/create/page';

import AddResellers from './components/AddResellers';
import Rtable from './components/Rtable';

export default async function Users() {
  try {
    const token = cookiesReq().get('token');
    if (!token) return redirect('/auth/login');
  } catch (error) {
    redirect('');
  }

  let data = '';

  try {
    const response = await User.find<UserDB>();
    data = JSON.parse(JSON.stringify(response));
  } catch (error) {
    console.error('Error verifying token:', error);
  }

  return (
    <div className="mx-auto flex flex-col md:w-8/12 md:py-10">
      <div className="mx-5 my-10">
        <AddResellers />
      </div>
      <div className="z-0 overflow-x-scroll xl:overflow-hidden ">
        <Rtable data={data} />
      </div>
    </div>
  );
}
