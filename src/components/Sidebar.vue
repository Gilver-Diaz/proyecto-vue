<!-- eslint-disable vue/multi-word-component-names -->

<template>
 <div class="sidebar">
 <h2>Barra Lateral</h2>
 <ul>
    <!--aca esta los link para el nav  desde aca sale todo para el router-nuew-->
 <li><router-link to="/Contador">Contador</router-link></li>
 <li><router-link to="/lista-de-tareas">Lista De Tareas</router-link></li>
 <li><router-link to="/registrar">Registrar</router-link></li>
</ul> 
</div>
 

</template>

<script setup>
</script>

<style>
.sidebar {
 width: 200px;
 background-color: rgb(196, 196, 206);
 padding: 9px ;
 height: auto;
}

</style>