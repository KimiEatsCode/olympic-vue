<template>
<div id="featured">
  <section class="promoFeatured" >
    <div class="row">
      <h2 class="header">Olympic Talk
       <hr class="purpleRule ruleLeft"/>
       </h2>
    </div>
<div class="row">
 <div class="col" v-for="feature of featured" :key="feature.id">
<div class="card">
  <div class="card-body">
  <p> {{ feature['body'][0].value | striphtml}} </p>
  </div>
</div>
  </div>
</div>
   </section>
</div>
</template>

<script>
import '../htmlTagsFilter.js'
import '../JSONstringify'

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
