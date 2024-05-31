import { FaWallet } from "react-icons/fa";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure ,Input} from "@nextui-org/react";
import { IoIosAddCircle } from "react-icons/io";


export default function Wallet() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div  className="me-2 flex items-center cursor-pointer rounded p-3.5 text-[1rem]  text-blue-800 md:text-[1.2rem] ">
        <Button onPress={onOpen} className="">
            <FaWallet className="me-2 " />
            <span className="me-2 ">تومان</span>
            <span className="me-2 ">700.000</span>
            <IoIosAddCircle />
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">افزایش موجودی</ModalHeader>
              <ModalBody>
              <Input type="number" label="افزایش موحودی" placeholder="حداقل مبلغ 100 هزارتومان میباشد" />
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
  )
}
