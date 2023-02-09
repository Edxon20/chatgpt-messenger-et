'use client'
import { useSession, signOut } from 'next-auth/react'
import '../styles/globals.css'
import NewChat from './NewChat'

function SideBar() {

  const { data: session } = useSession();
  console.log(session)
  return (
    <div className='p-2 flex flex-col h-screen'>

        <div className='flex-1'>

            {/* NewChat */}
            <NewChat />

            <div>
                {/* ModalSelection */}
            </div>  

            <div>
                {/* Map through there ChatRows */}


            </div>

        </div>       
        {session && (
          < img 
              onClick={() => signOut()}
              src={session.user?.image!} alt="profile picture" 
              className='h-12 w-12 rounded-full cursor-pointer ml-2 mx-auto mb-2 hover:opacity-50'
          
          />
        )}
    </div>
  )
}

export default SideBar