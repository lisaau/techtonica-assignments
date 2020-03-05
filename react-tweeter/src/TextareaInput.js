import React from 'react';

export default function TextareaInput({setNewPost, setCharCount, newPost}) {
    return (
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
    )
}