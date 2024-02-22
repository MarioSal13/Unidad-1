function CartasCompontentes ({link,text,buton}){
    return(
        <>
        <h1>
        <img src={link} className = "img_Combos" />
        </h1>
        
        <h1>
        <label> {text} </label>
        </h1>
        
        <h1>
        <input type="button" value={buton} />
        </h1>

        </>

    );
    
}

export default CartasCompontentes;
