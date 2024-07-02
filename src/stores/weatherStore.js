/* eslint-disable no-undef */
// cree una  un stone de pinia  para almacenar los datos que me vengan de la peticion de la api 

import { defineStore } from "pinia";
import { ref } from "vue";

  export const useWeatherStore = defineStore ('weather', () => {
    const  temperatura = ref (0);
     const setTemperatura = (temp) => {
          temperatura.value = temp ;
     }
     return {temperatura,setTemperatura};
});