import { IoQrCodeOutline } from "react-icons/io5";
import React from "react";
import {Switch} from "@nextui-org/react";



export default function Page({ params }: { params: { id: string } }) {
    return (

      <div className="w-full p-5 mt-5 ">
        <h1 className="text-2xl">مشخصات:</h1>
    <div className="mainUser flex flex-row justify-evenly w-full my-5  ">
        <h1 className="text-xl">یوزر: {params.id}</h1>
        <div className="link"><span className="bg-slate-600 rounded-md p-3">https://site.imfromir.site/sub/FkPiwni6qq2lf9bQTp2c</span></div>
        <div className="qr"><span>برای دریافت qr کلیک کنید</span><button className="p-2 text-xl mx-3 bg-[#415FEF] rounded-lg "><IoQrCodeOutline /></button></div>
    </div>  
    <hr/>
    <div className="info p-5">
      <div className="stat flex flex-row">
        <h1>وضعیت اکانت</h1>
        <Switch defaultSelected color="secondary">Secondary</Switch>
      </div>
    </div>
    </div>
    );
  }