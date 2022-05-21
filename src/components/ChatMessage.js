import React from "react";

export default function ChatMessage(props) {
  return (
    <>
      <div>{props.message.text}</div>
      <div>
        <small>{props.message.timestamp.toISOString()}</small>
      </div>
    </>
  );
}
