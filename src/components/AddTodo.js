import React, { useState } from 'react'

function AddTodo(props) {
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addTodo(title)
        setTitle('')
    }

  
    return (
      <form 
      style={{display: 'flex'}}
      onSubmit={handleSubmit}
      >
        <input 
        type="text" 
        name="title" 
        style={{flex: '10', padding: '5px'}}
        placeholder="What do you need to get done?" 
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
        <input 
        type="submit" 
        value="Submit" 
        className="btn"
        style={{flex: '1'}}
        />
      </form>
    )
}

export default AddTodo