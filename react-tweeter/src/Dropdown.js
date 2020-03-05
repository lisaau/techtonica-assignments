import React from 'react';

export default function Dropdown({user, setUser, users}) {
    return (
        <select value={user} onChange={e => setUser(e.target.value)}>
            {Object.entries(users).map(([name, value]) => (
            <option value={value} key={name}>{name}</option>
            ))}
        </select>
    )
}