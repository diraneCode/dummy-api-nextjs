export type product = {
    id: number
    title: string
    price: number
    category: string
    stock: number
    description: string
    images: string
    weight: number
    availabilityStatus: string
    rating: number
    reviews: review[]
    meta: meta
}

type review = {
    name: string
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

type meta = {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
}