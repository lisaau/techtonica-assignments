import React from 'react';

export default function Messages({messages}) {
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