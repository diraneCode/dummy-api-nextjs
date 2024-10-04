import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { FaInfoCircle } from "react-icons/fa"
  import { useState } from "react"
  import { product } from "../types/product"
  import { useFetchOneData } from "../hooks/useProduct"
  import Loading from "./Loading"
import Image from "next/image"
import Barcode from "react-barcode"
  
  type Tprops = {
      id: number
  }
  
  export default function BtnInfo({id} : Tprops) {
    const [data, setData] = useState<product>()
  
    const showProduct = async () => {
      const { data } = await useFetchOneData(id)
      setData(data)
      console.log(data)
    }
  
    return (
      <Dialog>
        <DialogTrigger 
          asChild   
          onClick={showProduct}
          className="flex items-center justify-center"
        >
            <FaInfoCircle color="gray" size={17} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Informations sur le produit</DialogTitle>
            </DialogHeader>
          {
            data ? 
                <div className="space-y-4">
                    <div>
                        <span>Creer le : </span>
                        <span className="font-bold">{data.meta.createdAt}</span>
                    </div>
                    <div>
                        <span>Modifier le : </span>
                        <span className="font-bold">{data.meta.updatedAt}</span>
                    </div>
                    <div className="flex">
                        <div>
                            <span>Code Bar : </span>
                            <Barcode value={data.meta.barcode} />
                        </div>
                        <div>
                            <span>Code Qr : </span>
                            <Image
                                height={200}
                                width={200}
                                alt="Qr code"
                                src={data.meta.qrCode}
                            />
                        </div>
                    </div>
                </div>
            : <Loading />
          }
        </DialogContent>
      </Dialog>
    )
  }
  