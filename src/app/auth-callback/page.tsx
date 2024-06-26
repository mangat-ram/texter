import { useRouter, useSearchParams } from "next/navigation"
import React from "react"
import { trpc } from "../_trpc/client";

const Page = () => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get('origin')

  const { data,isLoading } = trpc.authCallback.useQuery(undefined,{
    onSuccess : ({success}) => {
        if(success){
          //user is sunced to database
          router.push(origin ? `/${origin}` : '/dashboard')
        }
      } 
    }
  )
}

export default Page