'use client';
import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from '@nextui-org/react';
import { MdEdit } from 'react-icons/md';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { useQRCode } from 'next-qrcode';
import { IoQrCodeOutline } from 'react-icons/io5';

export default function Users() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { Canvas } = useQRCode();

  return (
    <div className="md:w-8/12 flex flex-row mx-auto py-10 md:overflow-hidden overflow-x-scroll z-0 ">
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
            نوع اکانت
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
            <TableCell>10.8</TableCell>
            <TableCell>
              <Button
                onPress={onOpen}
                className="p-2 text-white text-2xl mx-3 bg-[#415FEF] rounded-lg  "
              >
                <IoQrCodeOutline />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>
              <Chip color="danger" size="md" variant="flat">
                غیر فعال
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
            <TableCell>60</TableCell>
            <TableCell>
              <Button
                onPress={onOpen}
                className="p-2 text-white text-2xl mx-3 bg-[#415FEF] rounded-lg  "
              >
                <IoQrCodeOutline />
              </Button>
            </TableCell>
          </TableRow>
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
                <div className="q flex flex-col justify-center items-center">
                  <span className="bg-[#17c964] text-black rounded-lg p-3">
                    https://site.imfromir.site/sub/FkPiwni6qq2lf9bQTp2c
                  </span>
                  <Canvas
                    text={'https://site.imfromir.site/sub/FkPiwni6qq2lf9bQTp2c'}
                    options={{
                      errorCorrectionLevel: 'M',
                      margin: 3,
                      scale: 4,
                      width: 200,
                    }}
                  />
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
    </div>
  );
}
