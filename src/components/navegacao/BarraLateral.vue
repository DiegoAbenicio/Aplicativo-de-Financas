<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <v-list-item
        style="padding-left: 15px;"
        prepend-avatar="https://wallpapers.com/images/hd/cute-anime-profile-pictures-k6h3uqxn6ei77kgl.jpg"
        title="Diego Abenicio"
        nav
      >
        <template v-slot:append>
          <v-btn
            icon="mdi-chevron-left"
            variant="text"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
      </v-list>
    </v-navigation-drawer>
	</div>
</template>
<script>
	export default {
		name: 'BarraLateral',
		data () {
      return {
        drawer: true,
        rail: true,
      }
    },
	};
</script>
