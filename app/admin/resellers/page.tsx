'use client';
import React from 'react';
import Rtable from './components/Rtable';
import AddResellers from './components/AddResellers';

export default function Users() {
  return (
    <div className="md:w-8/12 flex flex-col mx-auto md:py-10">
      <div className="mx-5 my-10">
        <AddResellers />
      </div>
      <div className="xl:overflow-hidden overflow-x-scroll z-0 ">
        <Rtable />
      </div>
    </div>
  );
}
