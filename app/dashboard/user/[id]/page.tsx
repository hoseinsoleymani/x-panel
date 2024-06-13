'use client';
import { IoQrCodeOutline } from 'react-icons/io5';
import React from 'react';
import { Switch } from '@nextui-org/switch';
import Buttonc from '@/app/dashboard/user/components/Buttonc';
import { FaCheck } from 'react-icons/fa';
import Span from '../components/Span';
import Infobox from '../components/Infobox';
import { BiReset } from 'react-icons/bi';
import NumberInput from '../../create/components/Input';
import UserLimitInput from '../../create/components/UserLimitInput';
import { DatePicker } from '@nextui-org/date-picker';
import { Label } from '@/app/components/shared';
import Cost from '../components/Cost';
import {
  Modal,
  CardBody,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  useDisclosure,
} from '@nextui-org/react';
import { useQRCode } from 'next-qrcode';

export default function Page({ params }: { params: { id: string } }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { Canvas } = useQRCode();

  return (
    <div className="w-full md:mt-5 md:p-5">
      <div className=" flex items-center  gap-5 py-5">
        <h1 className="text-2xl text-white">مشخصات:</h1>
        <Card className=" bg-[#d4d4d8]">
          <CardBody>
            <p className="w-full inline-block text-xl justify-start px-1  font-medium">
              یوزر: {params.id}
            </p>
          </CardBody>
        </Card>
        <Card className="bg-[#d4d4d8]">
          <CardBody>
            <p className="text-xl justify-start px-1 font-medium">
              نام اکانت: AMIR
            </p>
          </CardBody>
        </Card>
      </div>

      <div className="py-12 px-4 grid md:grid-cols-3 grid-cols-2 gap-16 items-center bg-[#23273C] rounded-xl">
        <div className="text-xs">
          <Span className="bg-white text-black">
            https://sub.domain.com/sub/FkPiwni6qq2lf9bQTp2c
          </Span>
        </div>
        <div className="a"></div>
        <div className="flex items-center text-white">
          <span className="">برای دریافت qr کلیک کنید</span>
          <Button
            onPress={onOpen}
            className="p-2 text-white text-2xl mx-3 bg-[#415FEF] rounded-lg "
          >
            <IoQrCodeOutline />
          </Button>
        </div>
      </div>

      <div className="py-16 px-4 grid md:grid-cols-3 grid-cols-2 gap-16 items-center mt-8 bg-[#23273C] rounded-xl">
        <div className="flex flex-row">
          <h1 className="md:text-xl  text-sm text-white">وضعیت اکانت</h1>
          <Switch
            isDisabled
            color="success"
            defaultSelected
            thumbIcon={<FaCheck />}
          ></Switch>
        </div>
        <Infobox title="حجم کل" content="30 GB" />
        <Infobox title="حجم مصرف شده" content="8.8 GB" />
        <Infobox title="زمان پایان" content="2024/08/11" />
        <Infobox title="تعداد کاربر" content="4" />
        <div className="flex items-center text-white">
          <p>تغییر لینک اکانت</p>
          <Buttonc>
            <BiReset />
          </Buttonc>
        </div>
      </div>
      <h1 className="py-5 text-xl">تمدید</h1>
      <div className="py-6 grid md:grid-cols-3 grid-cols-2 gap-16 items-center">
        <NumberInput />
        <div className="me-5">
          <Label>مدت زمان اکانت</Label>
          <DatePicker label="زمان تمدید" className="max-w-[284px]" />
        </div>
        <UserLimitInput />
      </div>

      <div className="mt-5 flex items-center justify-center">
        <Cost />

        <Button color="primary" className="mx-5 max-w-36">
          تمدید اکانت
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
                <div className="flex flex-col justify-center items-center">
                  <span className="bg-[#17c964] text-black rounded-lg p-3">
                    https://sub.domain.com/sub/FkPiwni6qq2lf9bQTp2c
                  </span>
                  <Canvas
                    text={'https://sub.domain.com/sub/FkPiwni6qq2lf9bQTp2c'}
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
