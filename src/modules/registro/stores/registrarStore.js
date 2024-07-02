// aca usaremos la libreria pinia 

import {defineStore} from 'pinia';
// en REF son las formas en la que se inician 
//las variables reactivas
import { ref } from 'vue';

 export  const useRegistrarStore = defineStore ('registrar', () => {
  //nombre viene del formulario que ya cree en registrarview

    const nombre = ref('');
    const email  = ref ('');
    
    //ahora tengo que crear funciones para que las variables cambien de estado
     const guardarRegistro = (nombreFormualario , emailFormualario) => {
         //aca guardare los nuevos valores del nombre y del email que vienen del formualario
          nombre.value = nombreFormualario;
          email.value = emailFormualario;
        }
        //retornamos la funcionn 
        return {nombre,email, guardarRegistro} 

        //hay que exportar la constante principal (userRegistrarStore)
});