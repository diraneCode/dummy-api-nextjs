const useFetchData = async () => {

    const query = await fetch('https://dummyjson.com/products?limit=10');
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


export {
    useFetchData,
    useFetchOneData,
};