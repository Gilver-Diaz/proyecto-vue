<!-- eslint-disable vue/multi-word-component-names -->

<template>
 <div class="sidebar">
 <h2>Bienvenido</h2>
 <h3>nombre: {{ nombre }}</h3>
 <h3>email: {{ email }} </h3>
 <ul>
    <!--aca esta los link para el nav  desde aca sale todo para el router-nuew-->
 <li><router-link to="/Contador">Contador</router-link></li>
 <li><router-link to="/lista-de-tareas">Lista De Tareas</router-link></li>
 <li><router-link to="/registrar">Registrar</router-link></li>
</ul> 
</div>
 

</template>

<script setup>
 //aca estoy creando la fuciones para que se complete los nombres y el email 
 // debajo de Bienvenido !  
 import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
 const  registrarSotre = useRegistrarStore ();
 import { ref, watch } from 'vue';
 const nombre = ref (registrarSotre.nombre.value);
const email = ref (registrarSotre.email.value);
// con watch se graban los nombres y asi podems mantenr el valor en la pagina asi cambiemos 
//y siempre se quedare registrado el valor nombre , email  
watch(()  => registrarSotre.nombre, (newValue) =>{
         nombre.value = newValue; 

} );
      watch (() => registrarSotre.email, (newValue) =>{
          email.value = newValue; 
      } )

</script>

<style>
.sidebar {
 width: 200px;
 background-color: rgb(196, 196, 206);
 padding: 9px ;
 height: auto;
}

</style>