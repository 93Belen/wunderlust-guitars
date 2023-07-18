"use client"
import Image from "next/image"
import { useWebStore } from "components/store"

export default function Cart(){
    const webStore = useWebStore()
    console.log(webStore.cart)
}