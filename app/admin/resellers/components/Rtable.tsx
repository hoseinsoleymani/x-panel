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
import { MdEdit } from 'react-icons/md';

export default function Rtable({ data }: any) {
  return (
    <Table removeWrapper aria-label="Example static collection table ">
      <TableHeader>
        <TableColumn
          className="md:text-lg"
          style={{ borderRadius: '0 10px 10px 0', textAlign: 'start' }}
        >
          وضعیت اکانت
        </TableColumn>
        <TableColumn className="md:text-lg" style={{ textAlign: 'start' }}>
          نام نماینده
        </TableColumn>
        <TableColumn className="md:text-lg" style={{ textAlign: 'start' }}>
          ادیت
        </TableColumn>
        <TableColumn className="md:text-lg" style={{ textAlign: 'start' }}>
          آیدی
        </TableColumn>
        <TableColumn className="md:text-lg" style={{ textAlign: 'start' }}>
          موجودی
        </TableColumn>
        <TableColumn
          className="md:text-lg"
          style={{ borderRadius: '10px 0 0 10px', textAlign: 'start' }}
        >
          تعداد اکانت های فعال
        </TableColumn>
      </TableHeader>

      <TableBody>
        {data.map(({ id, wallet, accountStatus, name , accounts }: any) => (
          <TableRow key={id}>
            <TableCell>
              {accountStatus === 'active' ? (
                <Chip color="success" size="md" variant="flat">
                  فعال
                </Chip>
              ) : (
                <Chip color="danger" size="md" variant="flat">
                  غیر فعال
                </Chip>
              )}
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>
              <button className="mx-3 rounded-lg bg-[#415FEF] p-2 text-2xl ">
                <MdEdit />
              </button>
            </TableCell>
            <TableCell>1</TableCell>
            <TableCell>{wallet.inventory}</TableCell>
            <TableCell>{accounts.length}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
