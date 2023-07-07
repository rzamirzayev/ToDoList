import React from 'react'

function User(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <button onClick={props.delete}>sil</button>
    </div>
  )
}

export default User