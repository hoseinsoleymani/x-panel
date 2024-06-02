import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Button,
} from '@nextui-org/react';
import { MdEdit } from 'react-icons/md';
import { IoQrCodeOutline } from 'react-icons/io5';

export default function Rtable() {
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
        <TableColumn className="md:text-lg" style={{ textAlign: 'start' }}>
          تعداد اکانت های خریداری شده
        </TableColumn>
        <TableColumn
          className="md:text-lg"
          style={{ borderRadius: '10px 0 0 10px', textAlign: 'start' }}
        >
          تعداد اکانت های فعال
        </TableColumn>
      </TableHeader>

      <TableBody>
        <TableRow key="1">
          <TableCell>
            <Chip color="success" size="md" variant="flat">
              فعال
            </Chip>
          </TableCell>
          <TableCell>ali</TableCell>
          <TableCell>
            <button className="p-2 text-2xl mx-3 bg-[#415FEF] rounded-lg ">
              <MdEdit />
            </button>
          </TableCell>
          <TableCell>1055</TableCell>
          <TableCell>تک سرور</TableCell>
          <TableCell>50</TableCell>
          <TableCell>
            <Button className="p-2 text-white text-2xl mx-3 bg-[#415FEF] rounded-lg  ">
              <IoQrCodeOutline />
            </Button>
          </TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>
            <Chip color="success" size="md" variant="flat">
              فعال
            </Chip>
          </TableCell>
          <TableCell>ali</TableCell>
          <TableCell>
            <button className="p-2 text-2xl mx-3 bg-[#415FEF] rounded-lg ">
              <MdEdit />
            </button>
          </TableCell>
          <TableCell>1011</TableCell>
          <TableCell>سابسکریپشن</TableCell>
          <TableCell>60</TableCell>
          <TableCell>
            <Button className="p-2 text-white text-2xl mx-3 bg-[#415FEF] rounded-lg  ">
              <IoQrCodeOutline />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
