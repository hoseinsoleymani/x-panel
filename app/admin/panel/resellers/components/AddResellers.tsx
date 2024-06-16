'use client';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import React from 'react';
import { useFormState } from 'react-dom';

import { createReseller } from '../actions/createReseller';

const initialState = {
  message: '',
};

export default function AddResellers({ balance }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [state, formAction] = useFormState(createReseller, initialState);

  const [value, setValue] = React.useState('');

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === '') return false;

    return !validateEmail(value);
  }, [value]);
  return (
    <div>
      <Button onPress={onOpen} color="secondary">
        نماینده جدید
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form action={formAction}>
              <ModalHeader className="flex flex-col gap-1 bg-white text-black ">
                اطلاعات نماینده جدید رو وارد کنید
              </ModalHeader>
              <ModalBody className="bg-white p-2">
                <div className="flex flex-row items-center justify-between text-black">
                  <div>
                    <span>مقدار موجودی را وارد کنید:</span>
                  </div>
                  <div>
                    <Input
                      className="text-black"
                      type="number"
                      variant="bordered"
                      label="مقدار موجودی "
                      name="inventory"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Input
                    className="m-2 text-black"
                    type="text"
                    variant="bordered"
                    label="ایمیل نماینده"
                    name="email"
                    value={value}
                    isInvalid={isInvalid}
                    color={isInvalid ? 'danger' : 'success'}
                    onValueChange={setValue}
                  />
                  <Input
                    className="m-2 text-black"
                    type="text"
                    variant="bordered"
                    label="نام نماینده"
                    name="name"
                  />
                  <Input
                    className="m-2 text-black"
                    type="text"
                    variant="bordered"
                    label="پسورد نماینده"
                    name="password"
                  />
                  <span className="text-black">تعرفه های نماینده:</span>
                  <Input
                    className="m-2"
                    type="number"
                    variant="bordered"
                    label="قیمت هر گیگ"
                    name="traffic-price"
                  />
                  <Input
                    className="m-2"
                    type="number"
                    variant="bordered"
                    label="قیمت هر روز"
                    name="date-price"
                  />
                  <Input
                    className="m-2"
                    type="number"
                    variant="bordered"
                    label="قیمت هر یوزر"
                    name="user-price"
                  />
                </div>
              </ModalBody>
              <ModalFooter className="bg-white">
                <Button color="danger" variant="light" onPress={onClose}>
                  بستن
                </Button>
                <Button type="submit" color="primary" onPress={onClose}>
                  ساخت نماینده
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
