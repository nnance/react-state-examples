import React from "react";

export type Message = string;

export type MessageActions = {
  setMessage: (message: Message) => void;
};

export type MessageTupil = [Message, MessageActions];

const messageActions = (
  setState: React.Dispatch<React.SetStateAction<Message>>
): MessageActions => ({
  setMessage: message => setState(message)
});

export const useMessage = (value: Message): MessageTupil => {
  const [message, setMessage] = React.useState(value);
  const actions = messageActions(setMessage);
  return [message, actions];
}