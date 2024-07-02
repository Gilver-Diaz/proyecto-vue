<!-- eslint-disable vue/multi-word-component-names -->

<template>
  {{weatherStore.temperatura }}
</template>

<script setup>
import { useWeather } from '@/composables/useWather';
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';

    const weatherStore = useWeatherStore ();
// esta funcion es para que cuando llame la api de temperaturas la buscara en el getweather se garda en els store y muestra
 onMounted(()=>{
    useWeather ();
 })

</script>

 <style scoped> 

</style>