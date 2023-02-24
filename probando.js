// function crearUsuario() {
//    // Crea una Clase de ES6 o una función constructora llamada "Usuario".
//    // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
//    // El valor de cada propiedad la recibirá por parámetro.
//    // Además, esta clase debe tener un método llamado "saludar".
//    // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
//    // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
//    // Retornar la clase.
//    // Tu código:
//    class Usuario {
//       constructor(usuario,nombre,email,password){
//          this.usuario = usuario;
//          this.nombre = nombre;
//          this.email = email;
//          this.password = password;
//       }
//       saludar(){
//          return `Hola, mi nombre es ${this.nombre}`;
//       }
//    }
//    var miUsuario = new Usuario("miUsuario", "asdad", "asdasdasd@asdasdas.com", "dasdasdas123");
//    console.log(miUsuario.saludar()); // Imprime "Hola, mi nombre es Juan"

   
// }


// function crearUsuario() {
//     // Crea una Clase de ES6 o una función constructora llamada "Usuario".
//     // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
//     // El valor de cada propiedad la recibirá por parámetro.
//     // Además, esta clase debe tener un método llamado "saludar".
//     // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
//     // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
//     // Retornar la clase.
//     // Tu código:
//     function Usuario(usuario, nombre, email, password) {
//         this.usuario = usuario;
//         this.nombre = nombre;
//         this.email = email;
//         this.password = password;
//         this.saludar = function() {
//           return(`Hola, mi nombre es ${this.nombre}.`);
//         }
//       }
//     const usuario1 = new Usuario('juan123', 'Juan', 'juan@example.com', 'contraseña');
//     return(usuario1.saludar()); // Imprime "Hola, mi nombre es Juan."
//  }

// crearUsuario();

// function crearUsuario() {
//     class Usuario {
//         constructor(usuario, nombre, email, password) {
//             this.usuario = usuario;
//             this.nombre = nombre;
//             this.email = email;
//             this.password = password;
//             this.saludar = function() {
//                 return "Hola, mi nombre es " + this.nombre;
//             };
//         }
//     }
//     var miUsuario = new Usuario("miUsuario", "frer", "dsadasd@example.com", "qwer232");
//     console.log(miUsuario.saludar());
// }

// crearUsuario();

// class Persona {
//     // Crea el constructor de la clase "Persona".
//     // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
//     // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
//     // sus valores.
//     constructor(nombre,apellido,edad,domicilio){
//        this.nombre = nombre
//        this.apellido = apellido
//        this.edad = edad
//        this.domicilio = domicilio
//        this.detalle = function(){
//           return {
//              nombre,apellido,edad,domicilio
//           };
//        }
//     }
//  }

