import { useState } from "react";

export default function CardForm({
  buttonname,
  values,
  onChange,
  onSubmit,
  onAdd,
  busy,
  error,
  submitText,
}) {
  /* TODO: Complete the CardForm component 
  - display form inputs for card_name and card_pic
  - display error message
  - display submit button 
  - handle form submission 
  - style as a form UI */
  const [name,setName] = useState(values ? values.card_name : "")
  const [pic,setPic] = useState(values ? values.card_pic :"")

  const handleSubmit = (e)=>{
    e.preventDefault()
      onSubmit(name,pic)
  }

  return <form onSubmit={handleSubmit}>
    <label>Card Name:
      <input  type="text" name="name" value={name} onChange={e => setName(e.target.value)}  />
    </label>
    <label>
      Card Image URL:
      <input type="text" name="pic" value={pic} onChange={e=>setPic(e.target.value)} />
    </label>
    <button type="submit" >{buttonname}</button>
  </form>;
}
