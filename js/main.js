const btnCambiarPersona = document.getElementById('btnCambiar');
const url = 'https://randomuser.me/api/';
const foto = document.getElementById('fotoUsuario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');

const generarPersona = async() => {
    try {
        let response = await fetch(url);
        const data = await response.json();
        let objetoPersona = data.results[0];
        console.log(objetoPersona);

        foto.src = objetoPersona.picture.large;
        nombre.textContent = objetoPersona.name.first + " " +  objetoPersona.name.last;
        email.textContent = "Email: "+ objetoPersona.email;

    } catch (error) {
        console.log(error);
    }
}

btnCambiarPersona.addEventListener('click',generarPersona);
document.addEventListener('DOMContentLoaded',generarPersona);