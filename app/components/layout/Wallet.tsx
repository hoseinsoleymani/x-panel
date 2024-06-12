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
import { FaWallet } from 'react-icons/fa';

export default function Wallet({ inventory }: { inventory: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex cursor-pointer items-center rounded text-[1rem]  text-blue-800 md:text-[1.2rem] ">
      <Button onPress={onOpen} className="">
        <FaWallet className="" />
        <span className="font-bold">{inventory}</span>
        <span className="me-2 ">تومان</span>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                افزایش موجودی
              </ModalHeader>
              <ModalBody>
                <Input
                  type="number"
                  label="افزایش موحودی"
                  placeholder="حداقل مبلغ 100 هزارتومان میباشد"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  لغو
                </Button>
                <Button color="primary" onPress={onClose}>
                  پرداخت
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
