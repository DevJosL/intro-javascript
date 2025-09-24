let nums = [1,2,3,4,5,6,7,8,9,0]

function verificarContrasenia(contra) {
let tamanio = contra.length
    if(tamanio >= 8){
        for (num of nums) {
            if(contra.includes(num)){
                return "La contraseña es segura; es mayor a 8 caracteres y contiene números"
            } else{
                return "La contraseña no es fuerte. ¡Debe contener un número!"
            }            
        }
        } else {
            return "No es fuerte, debe ser minimo 8 caracteres"
        }
    }

let contra = prompt("Ingrese la contraseña")
let seguridad = verificarContrasenia(contra)

console.log(seguridad)