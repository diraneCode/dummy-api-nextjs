'use client'

import { useEffect, useState } from "react";
import SearchSection from "./components/SearchSection";
import Tbody from "./components/Tbody";
import Thead from "./components/Thead";
import { product } from "./types/product";
import { useFetchData } from "./hooks/useProduct";
import Loading from "./components/Loading";
import Pagination from "./components/Pagination";


export default function Home() {
  const [data, setData] = useState<product[]>([]);

  const handleSearchData = (dataSearch: product[]) => {
    setData(dataSearch)
  }

  useEffect(() => {
    const GetProduct = async () => {
      const { data } = await useFetchData()
      setData(data)
    }
    GetProduct()
  }, [])
  return (
    <div className="relative w-[90%] h-[90%] overflow-x-auto shadow-md sm:rounded-lg">
      <SearchSection sendDataSearch={handleSearchData} />
      {
        data.length > 0 ?
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <Thead />
            <Tbody data={data} />   
            <Pagination />  
          </table>
       : <Loading />
      }
    </div>
  )
}
