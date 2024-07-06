<template>
  <v-app class="bg-surface">
    <AppBar />
    <v-main>
      <v-container fluid class="fill-height d-flex">
        <v-row class="fill-height no-gutters">
          <v-col cols="12" class="d-flex flex-column">
						<BarraLateral />
            <router-view class="bg-primary-darken-1 flex-grow-1" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BarraLateral from "@/components/navegacao/BarraLateral.vue";

export default {
  name: 'LayoutDefault',
  components: {
    BarraLateral,
  },
};
</script>

<style>
.fill-height {
  height: 100%;
}
.no-gutters {
  margin-right: 0;
  margin-left: 0;
}
.no-gutters > [class^="v-col"] {
  padding-right: 0;
  padding-left: 0;
}
</style>
