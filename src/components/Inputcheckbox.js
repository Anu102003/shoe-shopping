import "../Sidebar/Category/Category.css"
function Input({ handlecheckboxChange, value, title, name, color }) {
  return (<>
    <label class="sidebar-label-container-checkbox">{title}
      <input onChange={handlecheckboxChange} value={value} type="checkbox" name={name} />
      <span class="checkmarkk" style={{ background: color }}></span>
    </label>
  </>
  )
}
export default Input;