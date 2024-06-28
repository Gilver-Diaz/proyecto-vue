<template>
  <div> 
    <h2> Lista de Tareas</h2>
    <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
    <ul>
        <!--<li> tarea</li>-->   
        <li v-for="(Tarea , index) in Tareas" :key="index">
            {{ Tarea }}
            <button @click="borrarTarea">Borrar</button>
        </li>
    </ul>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  const Tareas = ref ([]);
  const nuevaTarea = ref ('');
  const addTarea = () => {
    Tareas.value.push (nuevaTarea.value);
    nuevaTarea.value = '' ; 
  }
   const borrarTarea  =  (index) => {
    Tareas.value.splice(index,1);
   }

</script>


<style>

</style>