function CustomInputAlte({label,tipo,disabled}) {
    return (
      <>
        <label htmlFor=""> <input type={tipo} disabled={disabled}/> {label}</label>
      </>
    );
  }
  
  export default CustomInputAlte;