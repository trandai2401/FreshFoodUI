function Input({ input, placeholder, type, classWrapper }) {
  const className = `field `;

  return (
    <div className={classWrapper}>
      <input
        className="form-control"
        {...input}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default Input;
