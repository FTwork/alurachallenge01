
let encriptar = document.getElementById('boton1');
let desencriptar = document.getElementById('boton2');
let copiar = document.getElementById('boton3')


function validarTexto(texto){
    const noValido = /[^a-z]/y; //Usamos una expresion regular para buscar los caracteres no permitidos
    return !noValido.test(texto);
}

function showWarning(mensaje){
    Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: `${mensaje}`,
        width: '25rem'
      })
}

function copyMsj(mensaje){
    Swal.fire({
        icon: 'success',
        title: 'Exito!',
        text: `${mensaje}`,
        width: '22rem'
      })
}

function encriptado (letras) {

    for (let i = 0; i < letras.length; i++) { //Encriptamos las letras que nos indica el enunciado
        switch (letras[i]) {
            case 'a':
                letras[i] = 'ai';
                break;
            case 'e':
                letras[i] = 'enter';
                break;
            case 'i':
                letras[i] = 'imes';
                break;    
            case 'o':
                letras[i] = 'ober';
                break;
            case 'u':
                letras[i] = 'ufat';
                break;        
        }
    }

}

function desencriptado (letras) {

    for (let i = 0; i < letras.length; i++) { 
        switch (letras[i]) {
            case 'a':
                if(letras[i+1] == 'i'){
                    letras.splice(i+1,1);
                }
                break;
            case 'e':
                if(letras[i+4] == 'r'){
                    letras.splice(i+1,4)
                }
                break;
            case 'i':
                if(letras[i+3] == 's'){
                    letras.splice(i+1,3)
                }
                break;    
            case 'o':
                if(letras[i+3] == 'r'){
                    letras.splice(i+1,3)
                }
                break;
            case 'u':
                if(letras[i+3] == 't'){
                    letras.splice(i+1,3)
                }
                break;           
        }
    }
}

function eliminarElemento(id){
    let h2 = document.getElementById(id);
    if(h2){
        let padreH2 = h2.parentNode;
        padreH2.removeChild(h2); 
    }
}


//Funcionalidad para encriptar mensaje:

encriptar.addEventListener('click', () => {

    let frase = document.getElementById('text1').value; //Tomamos la frase del textarea y la pasamos a minuscula
    
    if(validarTexto(frase)){

        let arrayLetras = [...frase]; //Separamos la frase completa en caracteres y los alojamos en un array
    
        if(arrayLetras == ""){ //Verificamos que el array no este vacio
    
            showWarning('Debe ingresar una frase para continuar');
    
        }else{
    
            encriptado(arrayLetras);
            let fraseEncrip = arrayLetras.toString().replaceAll(',',""); //Trasformamos el array de caracteres en una cadena de texto
            console.log(fraseEncrip)
        
            //Mostramos el mensaje encriptado en la seccion que delimitamos para ello
        
            let mostrar = document.getElementById('encriptado');
            eliminarElemento('title');
            mostrar.innerText = fraseEncrip; 
    
        }
        
    }else{

        showWarning('Hay caracteres invalidos');

    }


})

//Funcionalidad para desencriptar mensaje

desencriptar.addEventListener('click', () =>{

    let fraseEncrip = document.getElementById('text1').value;

    if(validarTexto(fraseEncrip)){

        let arrayLetras = [...fraseEncrip];

        if(arrayLetras == ""){ 
    
            showWarning('Debe ingresar una frase para continuar');
    
        }else{
    
            desencriptado(arrayLetras);
            let fraseDesencrip = arrayLetras.toString().replaceAll(',','');
    
            let mostrar = document.getElementById('encriptado');
            eliminarElemento('title');
            mostrar.innerText = fraseDesencrip;
    
        }

    }else{

        showWarning('Hay caracteres invalidos');

    }

    
})

//Funcionalidad copiar

copiar.addEventListener('click', () => {

    let texto = document.getElementById('encriptado').innerHTML;
    navigator.clipboard.writeText(texto)  //Usamos la API navigator para copiar el texto al portapapeles
    .then(() => {
        copyMsj('Mensaje Copiado');
    }) 
       
})