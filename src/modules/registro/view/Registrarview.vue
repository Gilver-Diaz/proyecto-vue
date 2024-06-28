<!-- eslint-disable vue/multi-word-component-names -->
<template>
 <div>
    <h2>Formulario de resgistro</h2>
     <!--aca la validacion de schema se usa con los componentes que se instalaron 
     ahora tengo que exportarlos para poder darle la funcion  / 
     luego tenemos que agg una directiva llama  @submit  que nos 
     permite ejecutar una funcion al momento de enviar el formulario
     <tnemos que crear una funcion en scrip llamada submit para que funcione 
      FIELd se usa para  permitir organizar en grupos los campos de un formulario es otra libreria-->
    <Form :validation-schema="schema" @submit="onSubmit" >
    
      <div class="form">
      <label for="nombre">Nombre</label>
       <Field type="text" name="nombre" id="nombre" placeholder="ingrese su nombre"/>
       <ErrorMessage name="nombre"></ErrorMessage>
    </div>
    
    <div class="form">
       <label for="correo">correo</label>
       <Field type="email" name="email" id="correo" placeholder="increse su email"/>
       <ErrorMessage name="email"></ErrorMessage>
     </div>
    
       <div class="form"> 
         <button  type="submit">Registrar</button>
     </div>
    
   </Form>
 </div>
</template>

<script setup>
import { Form, Field , ErrorMessage} from 'vee-validate';
import { schema } from '../schema/validationSchema';
const onSubmit = () => {
   console.log('Se ha enviado el formulario');
}

</script>

<style scoped>
.form{
   margin-bottom: 10px
}
</style>

<!-- haciendolo de esta forma es que se incorpora el 
 esquema de formuluario que hicimos en js  ( repasar el tema)
 vee-validate es una libreria -->