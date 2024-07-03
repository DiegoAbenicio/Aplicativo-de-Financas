<template>
  <v-app>
    <v-main>
      <PaginaInicial />
    </v-main>
  </v-app>
</template>

<script>
import PaginaInicial from './components/PaginaInicial.vue'

export default {
  name: 'App',

  components: {
    PaginaInicial,
  },

  data: () => ({
    //
  }),
}
</script>
