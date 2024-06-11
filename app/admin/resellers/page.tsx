import React from 'react';
import Rtable from './components/Rtable';
import AddResellers from './components/AddResellers';
import User from '@/app/api/models/user';

export default async function Users() {
  var data = '';
  try {
    const response = await User.find<UserDB>();
    data = JSON.parse(JSON.stringify(response)) 
  } catch (error) {
    console.error('Error verifying token:', error);
  }

  return (
    <div className="md:w-8/12 flex flex-col mx-auto md:py-10">
      <div className="mx-5 my-10">
        <AddResellers />
      </div>
      <div className="xl:overflow-hidden overflow-x-scroll z-0 ">
        <Rtable data={data}/>
      </div>
    </div>
  );
}
