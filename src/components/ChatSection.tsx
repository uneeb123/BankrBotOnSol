"use client";

import { useState } from "react";
import styles from "./ChatSection.module.css";

type Message = {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
};

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hello! I'm Bankr Bot. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [messageCount, setMessageCount] = useState(1);
  const maxDailyMessages = 10;

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputText,
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInputText("");
    setMessageCount(prev => prev + 1);
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "I'm a demo bot for now. In the future, I'll be able to help you with your banking needs!",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setMessageCount(prev => prev + 1);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={styles.chatSection}>
      <h2 className={styles.sectionTitle}>Chat</h2>
      
      <div className={styles.chatArea}>
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`${styles.message} ${
              message.sender === "user" ? styles.userMessage : styles.botMessage
            }`}
          >
            <div className={styles.messageContent}>{message.text}</div>
            <div className={styles.messageTime}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.messageCounter}>
        {messageCount} / {maxDailyMessages} free daily messages used
        <div className={styles.usageBar}>
          <div 
            className={styles.usageProgress} 
            style={{ width: `${(messageCount / maxDailyMessages) * 100}%` }}
          >
            {((messageCount / maxDailyMessages) * 100).toFixed(2)}%
          </div>
        </div>
      </div>
      
      <div className={styles.inputArea}>
        <textarea 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className={styles.textInput}
        />
        <button 
          onClick={handleSendMessage}
          disabled={!inputText.trim()}
          className={styles.sendButton}
        >
          Send
        </button>
      </div>
    </div>
  );
}