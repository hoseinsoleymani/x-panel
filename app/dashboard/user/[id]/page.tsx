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
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import { useQRCode } from 'next-qrcode';

export default function Page({ params }: { params: { id: string } }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { Canvas } = useQRCode();

  return (
    <div className="w-full p-5 mt-5 ">
      <h1 className="text-2xl">مشخصات:</h1>
      <div className="mainUser flex flex-row justify-evenly w-full my-5  ">
        <h1 className="text-xl">یوزر: {params.id}</h1>
        <div className="link">
          <Span>https://site.imfromir.site/sub/FkPiwni6qq2lf9bQTp2c</Span>
        </div>
        <div className="qr">
          <span>برای دریافت qr کلیک کنید</span>
          <Button
            onPress={onOpen}
            className="p-2 text-white text-2xl mx-3 bg-[#415FEF] rounded-lg  "
          >
            <IoQrCodeOutline />
          </Button>
        </div>
      </div>
      <hr />

      <div className="info py-12 grid grid-cols-3 gap-7  items-center">
        <div className="stat flex flex-row">
          <h1 className="text-xl ">وضعیت اکانت</h1>
          <Switch
            isDisabled
            color="success"
            defaultSelected
            thumbIcon={<FaCheck />}
          >
            Automatic updates
          </Switch>
        </div>
        <Infobox title="حجم کل" content="30 GB" />
        <Infobox title="حجم مصرف شده" content="8.8 GB" />
        <Infobox title="زمان پایان" content="1403/11/11" />
        <Infobox title="تعداد کاربر" content="4" />
        <div className="used flex items-center">
          <p>تغییر لینک اکانت و ریست uuid</p>
          <Buttonc>
            <BiReset />
          </Buttonc>
        </div>
      </div>
      <hr />
      <h1 className="p-5 text-xl">تمدید</h1>
      <div className="info py-17 grid grid-cols-3 gap-7 ">
        <NumberInput />
        <UserLimitInput />
        <div className="me-5">
          <Label>مدت زمان اکانت</Label>
          <DatePicker label="Birth date" className="max-w-[284px]" />
        </div>
      </div>

      <div className="flex flex-row p-10 justify-center">
        <Cost />
        <Button color="primary" className="max-w-36 mx-5">
          تمدید اکانت
        </Button>
      </div>

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
