import React from 'react'
import { BsMessenger } from 'react-icons/bs'
import "./messengerChatHead.css"
function MessengerChatHead() {
  return (
    <div className="chat_head">
        <BsMessenger style={{fontSize:"2.5rem"}} className="fixed_messenger"/>
    </div>
  )
}

export default MessengerChatHead