'use client'

import Header from "@/components/Header"
import { useUser } from "@/hooks/useUser"
import { FaUserAlt } from "react-icons/fa"


const Account = async ({}) => {
  const { userDetails, subscription } = useUser();

  console.log(userDetails, subscription);
  

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
        <Header>
            <div className="mt-20">
                <div className="flex justify-start items-center gap-x-6">
                    <div className="bg-white w-44 h-44 rounded-full flex justify-center items-center shadow-md">
                        <FaUserAlt color="black" size={70}/> 
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <span className="text-md font-semibold">Perfil</span>
                        <h1></h1>
                    </div>
                </div>
            </div>
        </Header>
    </div>
  )
}

export default Account