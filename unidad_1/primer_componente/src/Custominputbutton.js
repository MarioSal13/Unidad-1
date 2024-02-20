function CustomInputButton ({text, disabled}) {
    return (
      <>
        <input type="button" disabled={disabled} value={text} />
      </>
    );
  }
  
  
  export default CustomInputButton;