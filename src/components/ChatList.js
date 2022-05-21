import React, { useContext } from "react";
import { ChatsContext } from "../store/ChatsProvider";
import styles from "./ChatList.module.css";
import ChatListItem from "./ChatListItem";

const ChatList = () => {
  const chatCtx = useContext(ChatsContext);

  return (
    <div className={styles["chat-list-container"]}>
      {chatCtx.chats.contacts.map((c, index, arr) => (
        <ChatListItem
          key={c.id}
          contact={c}
          lastMessage={c.chat.messages.reduce((item, acc) =>
            item.timestamp > acc.timestamp ? item : acc
          )}
        ></ChatListItem>
      ))}
    </div>
  );
};

export default ChatList;
