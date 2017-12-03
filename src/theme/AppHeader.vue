<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <div class="navbar-brand" >
        <router-link to="/category/front-end">
          <img src="http://bit.ly/vue-img"
               alt="Vue SPA" />
        </router-link>
      </div>
      <router-link class="navbar-item is-tab" to="/category/front-end">Home</router-link>
      <router-link class="navbar-item is-tab" :to="{ name: 'category', params: { id: 'mobile' } }">Mobile</router-link>
      <router-link class="navbar-item is-tab" to="/login">Login</router-link>
      </div>
    </div>
  </nav>
</template>
