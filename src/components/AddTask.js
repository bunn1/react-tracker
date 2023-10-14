import { useState } from 'react'

const AddTask = ( { onAdd } ) => {

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)


// Save task
const onSubmit = (e) => {
  // Så att den inte kommer till en annan sida
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd( {text, day, reminder} )

    setText('')
    setDay('')
    setReminder(false)
}

  return (
    <form className="add-form" onSubmit={onSubmit}>

      <div className="form-control">
      <label>Task
      <input 
      name="field-name"
      id="unique-field-id" 
      type="text" 
      placeholder='Add Task' 
      value={text} 
      onChange={(e) => setText(e.target.value)}/>
      </label>
      </div>

      <div className="form-control">
      <label>Day and Time
      <input 
      name="field-name-two"
      id="unique-field-id-two"
      type="text" 
      placeholder='Add Day and Time' 
      value={day} 
      onChange={(e) => setDay(e.target.value)}/> 
      </label>
      </div>

      <div className="form-control form-control-check">
      <label>Set Reminder
      <input 
      name="field-name-three"
      id="unique-field-id-three"
      type="checkbox" 
      checked={reminder} 
      // value={reminder}
      onChange={(e) => setReminder(e.currentTarget.checked)} />  
      </label>
      </div>

      <input 
      type="submit" 
      value="Save Task" 
      className="btn btn-block" 
      />

    </form>
  )
}

export default AddTask;