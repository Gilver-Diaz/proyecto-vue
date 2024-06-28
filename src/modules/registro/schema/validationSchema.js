import *as  yup from 'yup'
//Yup, es una librería que complementa las funciones de Formik.
// Yup se encarga de la evaluación de los campos, por medio de unos 
//presets o reglas muy intuitivas que asignemos a nuestros campos.


export  const schema = yup.object ({
  nombre :yup.string ().required(),
  email : yup.string ().email().required()
});

// aca se crea la validacion para el registro  tanto como nombre
// email .   en Registrarview.vue hay que sustituir los From por Field
// la forma correcta de crearlo es usando (string)
    