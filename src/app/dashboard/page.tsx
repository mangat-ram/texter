
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

const Page = () => {

  const { getUser } = getKindeServerSession();
  const user = getUser();

  if(!user || !user.id) redirect('/auth-callback?origin=dashboard')
  return (
    <div>{userOne.catch}</div>
  )
}

export default Page