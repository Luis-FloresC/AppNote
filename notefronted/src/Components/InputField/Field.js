//import './Field.css';
const Field = ({
  name = "",
  labelText = "",
  type = "text",
  value = "",
  onChange = () => { },
  ...rest
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{labelText}</span>
      </label>
      <input type={type} id={name} name={name} value={value} onChange={onChange} {...rest} />
    </div>
  );
}

export default Field;
