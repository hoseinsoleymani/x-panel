/* eslint-disable fp/no-let */
import mysql from 'mysql2/promise';
import React from 'react';

import AccDetails from '../components/AccDetails';
import AccID from '../components/AccID';
import Qr from '../components/Qr';
import Span from '../components/Span';
import Tamdid from '../components/Tamdid';

export default async function Page({ params }: { params: { id: string } }) {
  let data = '';

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows, fields] = await connection.execute(
      `SELECT id,username ,iplimit, token, total_data_used , transfer_enable, expire_in FROM user WHERE id = '${params.id}'`,
    );
    data = rows[0];
    await connection.end();
  } catch (error) {
    console.error('Error logging in:', error);
  }

  return (
    <div className="w-full md:mt-5 md:p-5">
      <AccID id={params.id} name={data.username} />

      <div className="grid grid-cols-2 items-center gap-16 rounded-xl bg-[#23273C] px-4 py-12 md:grid-cols-3">
        <div className="text-xs">
          <Span className="text-black bg-white">
            {`${process.env.SUB}${data.token}`}
          </Span>
        </div>
        <div />
        <Qr data={`${process.env.SUB}${data.token}`} />
      </div>

      <AccDetails
        amount={data.transfer_enable}
        used={data.total_data_used}
        time={data.expire_in}
        limit={data.iplimit}
      />
      {/* <Tamdid /> */}
    </div>
  );
}
