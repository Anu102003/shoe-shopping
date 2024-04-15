import "../Sidebar/Category/Category.css"
function Input({ handleChange, value, title, name, color }) {
  return (<>
    <label class="sidebar-label-container">{title}
      <input onChange={handleChange} value={value} type="radio" name={name} />
      <span class="checkmark" style={{ background: color }}></span>
    </label>
  </>
  )
}
export default Input;