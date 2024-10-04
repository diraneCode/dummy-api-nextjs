import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FaEye } from "react-icons/fa"
import { useState } from "react"
import { product } from "../types/product"
import { useFetchOneData } from "../hooks/useProduct"
import Image from "next/image"
import Loading from "./Loading"

type Tprops = {
    id: number
}

export default function BtnView({id} : Tprops) {
  const [data, setData] = useState<product>()

  const ShowProduct = async () => {
    const { data } = await useFetchOneData(id)
    setData(data)
  }

  return (
    <Dialog>
      <DialogTrigger 
        asChild   
        onClick={ShowProduct}
      >
        <FaEye color="#1b80f3" size={18} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {
          data ? <div>
                  <DialogHeader>
                    <DialogTitle>{data?.title}</DialogTitle>
                    <DialogDescription>
                      {data?.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex space-x-5 mt-4">
                    <div className="size-52 overflow-hidden bg-gray-100/10 rounded-md shadow-sm shadow-slate-500">
                      <Image
                        width={1000}
                        height={1000}
                        src={data?.images[0]}
                        alt={data?.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div>
                        <span className="text-gray-700">Prix :</span>
                        <span className="text-lg font-bold">{data?.price} $</span>
                      </div>
                      <div>
                        <span className="text-gray-700">Stock :</span>
                        <span>{data?.stock}</span>
                      </div>
                      <div>
                        <span className="text-gray-700">Categorie :</span>
                        <span>{data?.category}</span>
                      </div>
                      <div>
                        <span className="text-gray-700">Poids :</span>
                        <span>{data?.weight}</span>
                      </div>
                      <div>
                        <span className="text-gray-700">Status :</span>
                        <span className="text-sm">{data?.availabilityStatus}</span>
                      </div>
                      <div>
                        <span className="text-gray-700">Note :</span>
                        <span>{data?.rating}</span>
                      </div>
                    </div>
                  </div>
                </div> : <Loading />
        }
      </DialogContent>
    </Dialog>
  )
}
