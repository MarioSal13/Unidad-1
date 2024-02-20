function CustomInput({label,tipo,disabled}) {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input type={tipo} disabled={disabled}/>
    </>
  );
}

export default CustomInput;



