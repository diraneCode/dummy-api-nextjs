import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { FaEye } from "react-icons/fa"
  import { useEffect, useState } from "react"
  import { product } from "../types/product"
  import { useFetchOneData } from "../hooks/useProduct"
  import Image from "next/image"
  import Loading from "./Loading"
  import { FaMessage } from "react-icons/fa6"
import Chat from "./Chat"
  
  type Tprops = {
      id: number
  }
  
  export default function BtnComment({id} : Tprops) {
    const [data, setData] = useState<product>()
  
    const showProduct = async () => {
      const { data } = await useFetchOneData(id)
      setData(data)
    }
  
    return (
      <Dialog>
        <DialogTrigger 
          asChild   
          onClick={showProduct}
          className="flex items-center justify-center"
        >
            <FaMessage color="#9d6cf8" size={14} />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Commentaires du produit</DialogTitle>
            </DialogHeader>
          {
            data ? 
                data.reviews.map((review, index) => (
                    <div key={index}>
                        <Chat 
                            name={review.reviewerName}
                            message={review.comment}
                            date={review.date}
                            email={review.reviewerEmail}
                        />
                    </div>
                ))
            : <Loading />
          }
        </DialogContent>
      </Dialog>
    )
  }
  