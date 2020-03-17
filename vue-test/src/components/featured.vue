<template>
<div id="featured">
  <section class="promoVideo">
  <div class="row">

  <div class="card">
  <div class="card-body"></div>
</div>
<div class="card">
  <div class="card-body" v-for="feature of featured" :key="feature.id">
  <h2> {{ feature['body'] | striphtml}} </h2>
    <hr class="purpleRule ruleLeft"/>
    <p>{{ feature.body | striphtml}}</p>
  </div>
</div>
  </div>
   </section>
</div>
</template>

<script>
import '../htmlTagsFilter.js'

export default {
  name: 'featured',
  featured: [],

  data () {
    return {
      featured: this.getfeaturedCards()
    }
  },
  methods: {

    getfeaturedCards: function () {
      this.$http.get('http://192.168.33.10/featured').then(

        response => {
          console.log(response.body)
          this.featured = response.body
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
