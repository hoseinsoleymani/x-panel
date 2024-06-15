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
export default function PriceModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className='mx-2'>
      <Button color='secondary' variant='shadow'  onPress={onOpen}>تغییر قیمت ها</Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                قیمت هر متغیر رو وارد کنید
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-center">
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
