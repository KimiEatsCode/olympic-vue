<template>
  <div id="app">
<div class="container-fluid">

<navLogo></navLogo>
<home></home>
<featured></featured>
</div>
  <footer></footer>

  </div>

</template>

<style>

@import 'styles/css/style.css';
</style>

<script>

import home from '@/components/home'
import navLogo from '@/components/navLogo'
import featured from '@/components/featured'


export default {
  name: 'app',
  components: { navLogo, home, featured }
}
</script>
