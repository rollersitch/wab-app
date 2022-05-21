import React, { useContext, useRef } from "react";
import { ChatsContext } from "../store/ChatsProvider";
import ChatMessage from "./ChatMessage";
import styles from "./CurrentChat.module.css";

export default function CurrentChat() {
  const chatCtx = useContext(ChatsContext);
  const newMessageInputRef = useRef();

  const currentContact = chatCtx.chats.contacts.find(
    (c) => c.chat.id === chatCtx.chats.currentChat
  );

  const addMessageHandler = (ev) => {
    ev.preventDefault();
    chatCtx.addChatMessage(currentContact.id, newMessageInputRef.current.value);
    newMessageInputRef.current.value = "";
  };

  return (
    <>
      <div className={styles["current-chat-container"]}>
        {currentContact.chat.messages.map((message) => (
          <ChatMessage key={message.id} message={message}></ChatMessage>
        ))}
      </div>
      <div className={styles["send-input-container"]}>
        <input type="text" placeholder="Invia" ref={newMessageInputRef} />
        <button onClick={addMessageHandler}>Invia</button>
      </div>
    </>
  );
}
