export type Message = string;

export type MessageActions = {
  setMessage: (message: Message) => void;
};

export const messageActions = (setState: React.Dispatch<React.SetStateAction<Message>>): MessageActions => ({
    setMessage: message => setState(message)
  });
