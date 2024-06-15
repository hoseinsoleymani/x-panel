'use client';
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import Link from 'next/link';
import { MdEdit } from 'react-icons/md';

export default function Rtable({ data }: any) {
  return (
    <Table removeWrapper aria-label="Example static collection table ">
      <TableHeader>
        <TableColumn
          className="md:text-lg bg-white"
          style={{ borderRadius: '0 10px 10px 0', textAlign: 'start' }}
        >
          وضعیت اکانت
        </TableColumn>
        <TableColumn
          className="md:text-lg bg-white"
          style={{ textAlign: 'start' }}
        >
          نام نماینده
        </TableColumn>
        <TableColumn
          className="md:text-lg bg-white"
          style={{ textAlign: 'start' }}
        >
          ادیت
        </TableColumn>

        <TableColumn
          className="md:text-lg bg-white"
          style={{ textAlign: 'start' }}
        >
          موجودی
        </TableColumn>
        <TableColumn
          className="md:text-lg bg-white"
          style={{ borderRadius: '10px 0 0 10px', textAlign: 'start' }}
        >
          تعداد اکانت ها
        </TableColumn>
      </TableHeader>

      <TableBody>
        {data.map(({ _id, wallet, accountStatus, name, accounts }: any) => (
          <TableRow key={_id}>
            <TableCell>
              {accountStatus === 'active' ? (
                <Chip
                  className="bg-[#18c96433] text-[#12a150]"
                  color="success"
                  size="md"
                  variant="flat"
                >
                  فعال
                </Chip>
              ) : (
                <Chip
                  className="text-[#f31260] bg-[#f3126033]"
                  color="danger"
                  size="md"
                  variant="flat"
                >
                  غیر فعال
                </Chip>
              )}
            </TableCell>
            <TableCell className='text-white'>{name}</TableCell>
            <TableCell>
              <button className="mx-3 rounded-lg bg-[#415FEF] p-2 text-2xl ">
                <Link href={`reseller/${_id}`}><MdEdit /></Link>
              </button>
            </TableCell>
            <TableCell className='text-white'>{wallet.inventory}</TableCell>
            <TableCell className='text-white'>{accounts.length}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
