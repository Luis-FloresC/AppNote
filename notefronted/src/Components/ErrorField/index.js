import './ErrorField.css';
const ErrorField = ({ children }) => {
  return (
    <section className="error">
      {children}
    </section>
  );
}

export default ErrorField;
