'use client';
import {
  Button,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from '@nextui-org/react';
import Link from 'next/link';
import { useQRCode } from 'next-qrcode';
import React, { useState } from 'react';
import { IoQrCodeOutline } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';

export default function RTables({ data }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { Canvas } = useQRCode();
  const [selectedData, setSelectedData] = useState('');
  const handleButtonClick = (data) => {
    setSelectedData(data);
    console.log(selectedData);
  };

  return (
    <>
      <Table removeWrapper aria-label="Example static collection table">
        <TableHeader>
          <TableColumn
            className="md:text-lg"
            style={{ borderRadius: '0 10px 10px 0', textAlign: 'start' }}
          >
            وضعیت
          </TableColumn>
          <TableColumn className="md:text-lg" style={{ textAlign: 'start' }}>
            نام اکانت
          </TableColumn>
          <TableColumn className="md:text-lg" style={{ textAlign: 'start' }}>
            ادیت
          </TableColumn>
          <TableColumn className="md:text-lg" style={{ textAlign: 'start' }}>
            آیدی
          </TableColumn>
          <TableColumn className="md:text-lg" style={{ textAlign: 'start' }}>
            حجم کل (GB)
          </TableColumn>
          <TableColumn className="md:text-lg" style={{ textAlign: 'start' }}>
            حجم مصرفی (GB)
          </TableColumn>
          <TableColumn
            className="md:text-lg"
            style={{ borderRadius: '10px 0 0 10px', textAlign: 'start' }}
          >
            لینک اتصال
          </TableColumn>
        </TableHeader>
        <TableBody>
          {data.map(({ amount, accountName, id, used, token }: any) => (
            <TableRow key="1">
              <TableCell>
                {amount >= used / 1073741824 ? (
                  <Chip color="success" size="md" variant="flat">
                    فعال
                  </Chip>
                ) : (
                  <Chip color="danger" size="md" variant="flat">
                    غیر فعال
                  </Chip>
                )}
              </TableCell>
              <TableCell>{accountName}</TableCell>
              <TableCell>
                <button className="mx-3 rounded-lg bg-[#415FEF] p-2 text-2xl ">
                  <Link href={`/dashboard/user/${id}`}>
                    <MdEdit />
                  </Link>
                </button>
              </TableCell>
              <TableCell>{id}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{used / 1073741824}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handleButtonClick(token)}
                  onPress={onOpen}
                  className="mx-3 rounded-lg bg-[#415FEF] p-2 text-2xl text-white  "
                >
                  <IoQrCodeOutline />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                لینک اتصال{' '}
              </ModalHeader>
              <ModalBody>
                <div className="q flex flex-col items-center justify-center">
                  <span className="rounded-lg bg-[#17c964] p-3 text-black">
                    {selectedData
                      ? `https://sub.domain.com/sub/${selectedData}`
                      : ''}
                  </span>
                  {selectedData ? (
                    <Canvas
                      text={`https://sub.domain.com/sub/${selectedData}`}
                      options={{
                        errorCorrectionLevel: 'M',
                        margin: 3,
                        scale: 4,
                        width: 200,
                      }}
                    />
                  ) : null}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  بستن
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
