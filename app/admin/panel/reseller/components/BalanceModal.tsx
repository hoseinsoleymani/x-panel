import React from 'react';
import {Input,Modal,ModalContent,ModalHeader,ModalBody,ModalFooter,Button,useDisclosure,} from '@nextui-org/react';

export default function BalanceModal({ balance }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className='mx-2'>
      <Button color='secondary' variant='shadow' onPress={onOpen}>تغییر موجودی</Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                مقدار موجودی جدید این فرد رو وارد کنید
              </ModalHeader>
              <ModalBody>
                <div className="flex text-black">
                  <span>مقدار موجودی این نماینده:</span>
                  <span className="mx-2">{balance}تومان</span>
                </div>
                <div className="flex flex-col items-center">
                  <Input
                    className="text-black"
                    type="text"
                    variant="bordered"
                    label="مقدار موجودی جدید"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  بستن
                </Button>
                <Button color="primary" onPress={onClose}>
                  تایید
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
