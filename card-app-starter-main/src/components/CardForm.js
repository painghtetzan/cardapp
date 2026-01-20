export default function CardForm({
  values,
  onChange,
  onSubmit,
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

  return <form >
    <label>Card Name:
      <input  type="text" name="name" />
    </label>
    <label>
      Card Image URL:
      <input type="text" name="pic" />
    </label>
    <button type="Submit">Add</button>
  </form>;
}
