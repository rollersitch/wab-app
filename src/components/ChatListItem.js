import React, { useContext } from "react";
import { ChatsContext } from "../store/ChatsProvider";
import styles from "./ChatListItem.module.css";

export default function ChatListItem(props) {
  const chatsCtx = useContext(ChatsContext);

  const selectChatHandler = (ev) => {
    ev.preventDefault();
    chatsCtx.setCurrentChat(props.contact.chat.id);
  };

  return (
    <div className={styles["chat-list-item"]} onClick={selectChatHandler}>
      <p>Nome: {props.contact.name}</p>
      <p>ID: {props.contact.id}</p>
      <p>{props.lastMessage.text}</p>
    </div>
  );
}
