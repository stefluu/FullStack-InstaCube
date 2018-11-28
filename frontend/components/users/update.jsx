
import React from 'react';

export default function UpdateUser() {
  return (
    <div>
      <form action="">
        <input type="text" value={currentUser.username}/>
        <input type="text" value={currentUser.full_name}/>
        <input type="text" value={currentUser.bio}/>
      </form>
    </div>
  )
}
