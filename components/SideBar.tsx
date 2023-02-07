import '../styles/globals.css'
import NewChat from './NewChat'

function SideBar() {
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
    </div>
  )
}

export default SideBar