<template >

  <div id="albums">
    <div class="row">
      <div class="col-md-3 col-sm-12" v-for="album in albums" :key="album.id">
        <div class="card">
                   {{ album.id }}
         {{ album.field_image }}
          <div class="card-body">
            <h5 class="card-title album_title">{{ album.title[0].value }}</h5>
            <div class="card-text">
              <p>
                <strong>Artist :</strong>
                <span>{{ album.title }}</span>
              </p>
              <p>
                <strong>Genres :</strong>
                <span v-for="genre in  album.field_genres" :key="genre">{{ genre.value }}</span>
              </p>
              <p>
                <strong>Labels :</strong>
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'albums',
  albums: [],
  // initializing data to be load into the component
  data () {
    return {

      albums: this.getAlbums()
    }
  },
  methods: {
    // sending request ot get promise from the hitting URL
    getAlbums: function () {
      this.$http.get('http://192.168.33.10/api/edmalbum').then(
        response => {
          this.albums = response.body
          // console.log(this.albums);
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
