'use client';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { useQRCode } from 'next-qrcode';
import React from 'react';
import { IoQrCodeOutline } from 'react-icons/io5';

export default function Qr({ data }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { Canvas } = useQRCode();
  return (
    <>
      <div className="flex items-center text-white">
        <span className="">برای دریافت qr کلیک کنید</span>
        <Button
          onPress={onOpen}
          className="mx-3 rounded-lg bg-[#415FEF] p-2 text-2xl text-white "
        >
          <IoQrCodeOutline />
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                لینک اتصال
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-center justify-center">
                  <span className="rounded-lg bg-[#17c964] px-1 py-2 text-black">
                    {data}
                  </span>
                  <Canvas
                    text={data}
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
    </>
  );
}
