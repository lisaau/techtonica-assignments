import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import RemainingCharacters from './RemainingCharacters';
import Messages from './Messages'
import TextareaInput from './TextareaInput'
import Dropdown from './Dropdown'

const users = {
  User1: 'User1',
  User2: 'User2',
  User3: 'User3',
  User4: 'User4',
  User5: 'User5',
}

class Message {
  constructor(text, user) {
    let date = new Date()
    this.key = date.toString()
    this.text = text
    this.user = user
    this.date = date
  }
}


function App() {
  const [user, setUser] = useState(users.User1);
  const [newPost, setNewPost] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [currPosts, setCurrPosts] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              setCurrPosts([...currPosts, new Message(newPost, user)]);
              setNewPost("");
              setCharCount(0);
            }}
          >
            <Dropdown setUser={setUser} user={user} users={users}/>
            <TextareaInput setNewPost={setNewPost} setCharCount={setCharCount} newPost={newPost}/>
            <input type="submit" />
            <RemainingCharacters charCount={charCount} />
          </form>

          <Messages messages={currPosts}/>
        </div>
      </header>
  </div>
  );
}

export default App;