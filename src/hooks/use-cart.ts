import { Product } from "@/payload-types"
import {create} from "zustand"

export type CarItem = {
    product: Product
}

type CartState = {
    items: ClipboardItem
    addItem: (product: Product) => void
}

export const useCart = create()