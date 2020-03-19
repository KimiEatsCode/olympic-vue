<template>
<div id="home">
  <section class="promoVideo">
  <div class="row">

  <div class="card">
  <div class="card-body"></div>
</div>

<div class="card">
  <div class="card-body" v-for="promo of promoText" :key="promo.id">
  <h2> {{ promo.test | striphtml}}
    <hr class="purpleRule ruleLeft"/>
  </h2>
    <p>{{ promo.body | striphtml}}</p>
  </div>
</div>
  </div>
   </section>

</div>
</template>

<script>
import '../htmlTagsFilter.js'

export default {
  name: 'home',
  promoText: [],

  data () {
    return {
      promoText: this.getPromoText()
    }
  },
  methods: {
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
