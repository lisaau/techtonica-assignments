import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

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

function Messages({messages}) {
  //<Messages/>

  if (messages.length === 0) {
    return (
      <div>No posts found</div>
    );
  }

  // Sort messages by date
  return (
    <div>
    <h2>Posts:</h2>
    <ul>
      {messages.sort((a, b) => b.date - a.date).map(message => (
        <li key={message.key}>{message.user} ({message.key}): {message.text}</li>
      ))}
    </ul>
    </div>
  );
}

function RemainingCharacters({charCount}) {
  // <RemainingCharacters />
  let maxChars = 100;
  let remainingChars = maxChars - charCount;
  if (remainingChars <= 0) {
    return (<p style={{color: "red"}}>Characters left: {remainingChars}</p>);
  }
  return (<p>Characters left: {remainingChars}</p>);
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

          <select value={user} onChange={e => setUser(e.target.value)}>
            {Object.entries(users).map(([name, value]) => (
            <option value={value} key={name}>{name}</option>
            ))}
          </select>


            <label> New Post:
              <input
                  type="text"
                  name="name"
                  value={newPost}
                  onChange={e => {
                    setNewPost(e.target.value);
                    setCharCount(e.target.value.length);
                    }
                  }
              />
            </label>
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