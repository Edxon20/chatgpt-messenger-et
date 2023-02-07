import { PlusIcon } from "@heroicons/react/24/outline"

function NewChat() {
  return (
    <div className="border-gray-700 border chatRow">
        <p className="w-4 h-4"><PlusIcon /></p>
        <p>New Chat</p>
    </div>
  )
}

export default NewChat