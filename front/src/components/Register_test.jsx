export function RegisterTest () {

    const campos = ['Nombre', 'Email', 'DNI'];
    
    // console.log(formData);
    
    return (
        <>
            <form>
            {campos.map((campo, index) => (
                <div key={index} className="campo">
                <label htmlFor={campo.toLowerCase()}>{campo}</label>
                <input type={campo === 'Email' ? 'email' : 'text'} id={campo.toLowerCase()} placeholder={`Ingrese ${campo}`} />
                </div>
            ))}
            </form>
        </>
    )
}