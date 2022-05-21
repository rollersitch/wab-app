import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const DUMMY_CHATS = {
  contacts: [
    {
      name: "Jack",
      id: "c1",
      chat: {
        id: "ch1",
        messages: [
          {
            text: "messg1",
            id: uuidv4(),
            timestamp: new Date(),
          },
          {
            text: "msg2",
            id: uuidv4(),
            timestamp: new Date(),
          },
        ],
      },
    },
    {
      name: "Mark",
      id: "c2",
      chat: {
        id: "ch2",
        messages: [
          {
            text: "messg3",
            id: uuidv4(),
            timestamp: new Date(),
          },
          {
            text: "msg4",
            id: uuidv4(),
            timestamp: new Date(),
          },
        ],
      },
    },
  ],
  currentChat: "ch1",
};

export const ChatsContext = React.createContext({});

export default function ChatsProvider(props) {
  const [chats, setChats] = useState(DUMMY_CHATS);

  //   useEffect(() => {
  //     setChats(DUMMY_CHATS);
  //   }, []);

  const setCurrentChat = (chatId) => {
    setChats((state) => {
      const newState = Object.assign({}, state);

      newState.currentChat = chatId;
      return newState;
    });
  };

  const addChatMessage = (contactId, chatMessage) => {
    setChats((state) => {
      const contact = state.contacts.find((c) => c.id === contactId);
      const updatedContact = {
        ...contact,
        chat: {
          ...contact.chat,
          messages: contact.chat.messages.concat([
            {
              text: chatMessage,
              id: uuidv4(),
              timestamp: new Date(),
            },
          ]),
        },
      };

      const updatedContacts = state.contacts.map((c) => {
        if (c.id === updatedContact.id) return updatedContact;
        return c;
      });

      return {
        ...state,
        contacts: updatedContacts,
      };
    });
  };

  const chatsState = {
    chats,
    setCurrentChat,
    addChatMessage,
  };

  return (
    <ChatsContext.Provider value={chatsState}>
      {props.children}
    </ChatsContext.Provider>
  );
}
