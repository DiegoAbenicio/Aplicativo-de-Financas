<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <div>Testando Cadastro Simples</div>
        <v-text-field
          hide-details="auto"
          label="Main input"
          v-model="data.nome"
        />
      </v-col>
    </v-row>
    <v-row class="text-end">
      <v-btn @click="salvar" color="primary">Salvar</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PaginaInicial',
  data() {
    return {
      data: {
        nome: null,
      },
    };
  },
  methods: {
    salvar() {
      axios.post('http://localhost:3000/api/salvar', this.data)
        .then(response => {
          console.log('Dados salvos com sucesso:', response.data);
        })
        .catch(error => {
          console.error('Erro ao salvar dados:', error);
        });
    }
  }
};
</script>
