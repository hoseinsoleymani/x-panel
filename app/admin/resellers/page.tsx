'use client';
import React from 'react';
import Rtable from './components/Rtable';
import AddResellers from './components/AddResellers';

export default function Users() {
  return (
    <div className="w-8/12 flex flex-col mx-auto py-10">
      <div className="mx-5 my-10">
        <AddResellers />
      </div>
      <Rtable />
    </div>
  );
}
