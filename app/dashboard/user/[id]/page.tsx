import { IoQrCodeOutline } from "react-icons/io5";
import React from "react";
import {Switch} from "@nextui-org/switch";
import Button  from "@/app/dashboard/user/components/Button";
import { FaCheck } from "react-icons/fa";
import Span from "../components/Span";
import Infobox from "../components/Infobox";
import { BiReset } from "react-icons/bi";


export default function Page({ params }: { params: { id: string } }) {
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
          <Button><IoQrCodeOutline /></Button>
        </div>
    </div>  
    <hr/>



    <div className="info py-12 grid grid-cols-3 gap-7  items-center">
      <div className="stat flex flex-row">
            <h1 className="text-xl ">وضعیت اکانت</h1>
            <Switch isDisabled color="success" defaultSelected thumbIcon={<FaCheck/>}>Automatic updates</Switch>
      </div>
      <Infobox title="حجم کل" content="30 GB" />
      <Infobox title="حجم مصرف شده" content="8.8 GB" />
      <Infobox title="زمان پایان" content="1403/11/11" />
      <Infobox title="تعداد کاربر" content="4" />
      <div className="used flex items-center">
        <p>تغییر لینک اکانت و ریست uuid</p>
        <Button><BiReset /></Button>
      </div>
    </div>
    <hr/>


    <div className="tamdid py-10">
    <h1 className="text-xl">تمدید</h1>
    
    </div>




    </div>



    );
  }