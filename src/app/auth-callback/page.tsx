import { useRouter, useSearchParams } from "next/navigation"
import React from "react"
import { trpc } from "../_trpc/client";

const Page = () => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get('origin')

  const { data,isLoading } = trpc.test.useQuery()

  return (
    <div>Page</div>
  )
}

export default Page