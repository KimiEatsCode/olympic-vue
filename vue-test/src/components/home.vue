<template>

<div id="home">
<header>
  <div class="header-wave"></div>
<div class="header-image"></div>

<title>GAMES OF THE XXXII OLYMPIAD

  <span class="subtitle">Tokyo, Japan </span>
</title>

<div class="header-gradient"></div>

 </header>

  <section class="promoVideo">
  <div class="row">
    <div class="card">

  <div class="card-body">

  </div>
</div>
<div class="card">
  <div class="card-body" v-for="promo of promoText" :key="promo.id">
  <h2> {{ promo.test | striphtml}} </h2>
    <hr class="purpleRule"/>
     {{ promo.body | striphtml}}
  </div>
</div>
  </div>
   </section>

   <section class="readMore">
      <div class="row">

      </div>
   </section>

</div>
</template>

<script>
import '../htmlTagsFilter.js'

export default {
  name: 'home',
  promoText: [],
  // initializing data to be load into the component
  data () {
    return {
      test: 'test',
      promoText: this.getPromoText()
    }
  },
  methods: {
    // sending request to get promise from the hitting URL
    getPromoText: function () {
      this.$http.get('http://192.168.33.10/promoPath').then(
        response => {
          this.promoText = response.body

          console.log(this.promoText)
        },
        response => {
          console.log(
            'Error fetching data from URL make sure your server up running'
          )
        }
      )
    }
  }
}
</script>
