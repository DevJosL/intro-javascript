function verificarContrasenia(contra) {
let tamanio = contra.length
    if(tamanio >= 8){
            return "Su contraseña es fuerte"
        } else {
            return "No es fuerte, debe ser minimo 8 caracteres"
        }
    }

let contra = prompt("Ingrese la contraseña")
let seguridad = verificarContrasenia(contra)

console.log(seguridad)