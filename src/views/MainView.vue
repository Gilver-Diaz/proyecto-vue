<template>
 <Header></Header>
<div class="container">
    <Sidebar></Sidebar>
    <div class="content"></div>
    <!--desde aca sera lo que le dara la interaccion al router-view (cargara el contenido donde haremos click )-->
       <router-View></router-View>
</div>
</template>

<script setup>
 import { RouterView } from 'vue-router';
import Sidebar from '../components/Sidebar.vue';
import Header from '@/components/Header.vue'
</script>

<style>
.container {
    display: flex;

}
.content {
  display: flex;
    padding: auto;
}
</style>