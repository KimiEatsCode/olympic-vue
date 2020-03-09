<template>
  <div id="app">
<div class="container-fluid">

<navLogo></navLogo>
<home></home>

</div>
  <footer></footer>

  </div>

</template>

<style>

@import '/css/style.css';
</style>

<script>

import home from '@/components/home'
import navLogo from '@/components/navLogo'

export default {
  name: 'app',
  components: { navLogo, home }
}
</script>
