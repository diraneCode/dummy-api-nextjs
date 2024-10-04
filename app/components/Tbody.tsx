import Image from "next/image";
import { product } from "../types/product";
import BtnView from "./BtnView";
import BtnComment from "./BtnComment";
import BtnInfo from "./BtnInfo";

type Tprops = {
    data: product[]
}

export default function Tbody({data}: Tprops){
    return(
        <tbody>
          {
            data.map((product, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                    </td>
                    <td align="center">{product.id}</td>
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="size-10 rounded-full shadow shadow-slate-400">
                            <Image width={1000} height={1000} className="w-full h-full rounded-full" src={product.images[0]} alt={product.images} />
                        </div>
                    </th>
                    <td align="center" className="px-6 py-4">
                        {product.title}
                    </td>
                    <td align="center" className="px-6 py-4">
                        {product.stock}
                    </td>
                    <td align="center" className="px-6 py-4">
                        {product.category}
                    </td>
                    <td align="center" className="px-6 py-4 flex items-center justify-center space-x-2">
                        <BtnView id={product.id} />
                        <BtnComment id={product.id} />
                        <BtnInfo id={product.id} />
                    </td>
                </tr>
            ))
          }
        </tbody>
    )
}