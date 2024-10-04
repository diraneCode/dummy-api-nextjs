import { useEffect, useState } from "react"
import { product } from "../types/product"
import { useFetchCategorie, useFetchCategorieData, useFetchSearchData } from "../hooks/useProduct"

type Tprops = {
    sendDataSearch: (data: product[]) => void
}

export default function SearchSection({ sendDataSearch }: Tprops) {
    const [search, setSearch] = useState<string>("")
    const [categorie, setCategorie] = useState([]);
    const [select, setSelect] = useState<string>("");


    const HandleSearch = async (search: string) => {
        setSearch(search)
        const { data } = await useFetchSearchData(search)
        sendDataSearch(data)
    }

    const HandleSelect = async (select: string) => {
        setSelect(select)
        if (select != '') {
            const { data } = await useFetchCategorieData(select)
            sendDataSearch(data)
        }
    }

    useEffect(() => {
        const GetCategories = async () => {
            const { data } = await useFetchCategorie();
            setCategorie(data)
        }
        GetCategories()
    }, [])

    return (
        <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 px-5 md:space-y-0 py-4 bg-white dark:bg-gray-900">
            <div>
                <label htmlFor="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Trier par categorie</label>
                <select
                    id="default"
                    value={select}
                    onChange={(e) => HandleSelect(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value='' selected>---Selectionner une categorie---</option>
                    {
                        categorie.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="table-search" className="sr-only">Recherche</label>
                <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="table-search-users"
                        placeholder="Rechercher un produit"
                        onChange={(e) => HandleSearch(e.target.value)}
                        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                {search && <div className="w-full break-words flex-wrap justify-end items-end">
                    <span>Result de la recherche pour : </span>
                    <span className="text-blue-700 w-full flex flex-wrap">{search}</span>
                </div>}
            </div>
        </div>
    )
}