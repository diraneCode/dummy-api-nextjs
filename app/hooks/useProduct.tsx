const useFetchData = async () => {
    
    const query = await fetch(`https://dummyjson.com/products?limit=10`);
    const response = await query.json();
    const data = response.products

    return { data }
}


const useFetchOneData = async (id: number) => {

    const query = await fetch(`https://dummyjson.com/products/${id}`);
    const response = await query.json()
    const data = response

    return { data }
}

const useFetchSearchData = async (search: string) => {

    const query = await fetch(`https://dummyjson.com/products/search?q=${search}&limit=10`);
    const response = await query.json();
    const data = response.products

    return { data }
}


const useFetchCategorie = async () => {
    
    const query = await fetch('https://dummyjson.com/products/category-list');
    const response = await query.json();
    const data = response

    return { data }
}

const useFetchCategorieData = async (categorie: string) => {
    
    const query = await fetch(`https://dummyjson.com/products/category/${categorie}?limit=10`);
    const response = await query.json();
    const data = response.products

    return { data }
}


export {
    useFetchData,
    useFetchOneData,
    useFetchSearchData,
    useFetchCategorie,
    useFetchCategorieData,
};