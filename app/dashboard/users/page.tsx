"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip} from "@nextui-org/react";
import { MdEdit } from "react-icons/md";


export default function Users() {
  return (
<div className="w-8/12 flex flex-row mx-auto py-10 ">
<Table removeWrapper    aria-label="Example static collection table">
      <TableHeader >
        <TableColumn className="text-lg" style={{borderRadius:"0 10px 10px 0", textAlign:"start"}}>وضعیت</TableColumn>
        <TableColumn className="text-lg" style={{textAlign:"start"}}>آیدی</TableColumn>
        <TableColumn className="text-lg" style={{textAlign:"start"}}>نام اکانات</TableColumn>
        <TableColumn className="text-lg" style={{textAlign:"start"}}>نوع اکانت</TableColumn>
        <TableColumn className="text-lg" style={{textAlign:"start"}}>حجم کل (GB)</TableColumn>
        <TableColumn className="text-lg" style={{textAlign:"start"}}>حجم مصرفی (GB)</TableColumn>
        <TableColumn className="text-lg" style={{borderRadius:"10px 0 0 10px",textAlign:"start"}}>ادیت</TableColumn>
      </TableHeader>
      <TableBody  >
        <TableRow key="1">
          <TableCell><Chip color="success" size="md" variant="flat">فعال</Chip></TableCell>
          <TableCell>1055</TableCell>
          <TableCell>ali</TableCell>
          <TableCell>تک سرور</TableCell>
          <TableCell>50</TableCell>
          <TableCell>10.8</TableCell>
          <TableCell><button className="p-2 text-2xl mx-3 bg-[#415FEF] rounded-lg "><MdEdit  /></button></TableCell>
        </TableRow>
        <TableRow key="2">
        <TableCell><Chip color="danger" size="md" variant="flat">غیر فعال</Chip></TableCell>
          <TableCell>1011</TableCell>
          <TableCell>ali</TableCell>
          <TableCell>سابسکریپشن</TableCell>
          <TableCell>60</TableCell>
          <TableCell>10</TableCell>
          <TableCell><button className="p-2 text-2xl mx-3 bg-[#415FEF] rounded-lg "><MdEdit  /></button></TableCell>
        </TableRow>
      </TableBody>
    </Table>


</div>
  )
}
