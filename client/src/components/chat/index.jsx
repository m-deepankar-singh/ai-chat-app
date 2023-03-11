import React from 'react'
import { useMultiChatLogic,MultiChatSocket,MultiChatWindow } from 'react-chat-engine-advanced'
import Header from '@/components/customHeader'
import StandardMessageForm from '@/components/customMessageForms/StandardMessageForm'

const Chat = () => {
    const chatProps = useMultiChatLogic(
        "07fda33f-9f32-4007-b498-e7df0b203033",
        "test",
        "12345678"
    )

  return (
    <div style={{flexBasis:"100%"}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow 
         {...chatProps}
         style={{height:"100vh"}}
         renderChatHeader={(chat)=> <Header chat={chat}/>} 
         renderMessageForm={(props)=>{
          return(
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          )
         }}
        />
    </div>
  )
}

export default Chat