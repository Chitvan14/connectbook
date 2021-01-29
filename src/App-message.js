import React, { useState, useEffect } from "react";
import "./App-message.css";
import Message from "./Message";
import { IconButton, FormControl, InputLabel, Input } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { useStateValue } from "./StateProvider";


function App() {
  
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  // const [username, setUsername] = useState("");
  const [{ user }, dispatch] = useStateValue();

  // reading
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  // useEffect(() => {
  //   setUsername(prompt("Please enter your name"));
  // }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    // all the logic to send message
    // send data to Array in firebase
    db.collection("messages").add({
      message: input,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="App__message">
      <h1>Chat</h1>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={user.displayName} message={message} />
        ))}
      </FlipMove>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter the message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      
    </div>
  );
}

export default App;
