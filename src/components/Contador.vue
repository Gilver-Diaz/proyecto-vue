<!-- eslint-disable vue/multi-word-component-names -->
<template> 
<div class="todo">
<h1>Hola Mundo </h1>
<p>{{ contador }}</p> 
 <button class="contador" @click="incrementar">Incrementar</button>
 <button class="contador2" @click="decrementar">Decrementar</button>
</div>
</template>

<script setup>
 import { ref } from 'vue';
  const contador  = ref (0);
  const incrementar = () => {
    contador.value++; 
  }
  const decrementar = () => {
    contador.value--; 
  }
</script>

<style scoped>

.todo{
  margin: 20px;
  padding: 1%
}


 p {
  
  color: red
  
 }
 h1 {
  display: flex;
  padding: 10px;   
 }
 
 
 .contador.contador2{
  
    font-size: 10px ;
    padding: 10px;
    display: flex
    
     
 }
</style>
