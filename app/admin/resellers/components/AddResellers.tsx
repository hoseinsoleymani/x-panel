'use client'
import React from 'react';
import {
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

export default function AddResellers({ balance }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button onPress={onOpen} color="secondary">
        نماینده جدید
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                اطلاعات نماینده جدید رو وارد کنید
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-row justify-between items-center text-black">
                  <div>
                    <span>مقدار موجودی را وارد کنید:</span>
                  </div>
                  <div>
                    <Input
                      className="text-black"
                      type="text"
                      variant="bordered"
                      label="مقدار موجودی "
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Input
                    className="text-black m-2"
                    type="text"
                    variant="bordered"
                    label="ایمیل نماینده"
                  />
                  <Input
                    className="text-black m-2"
                    type="text"
                    variant="bordered"
                    label="نام نماینده"
                  />
                  <Input
                    className="text-black m-2"
                    type="text"
                    variant="bordered"
                    label="پسورد نماینده"
                  />
                  <span className="text-black">تعرفه های نماینده:</span>
                  <Input
                    className="m-2"
                    type="number "
                    variant="bordered"
                    label="قیمت هر گیگ"
                  />
                  <Input
                    className="m-2"
                    type="number"
                    variant="bordered"
                    label="قیمت هر روز"
                  />
                  <Input
                    className="m-2"
                    type="number"
                    variant="bordered"
                    label="قیمت هر یوزر"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  بستن
                </Button>
                <Button color="primary" onPress={onClose}>
                  ساخت نماینده
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
