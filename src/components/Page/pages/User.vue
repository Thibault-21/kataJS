<template>

  <ul>
    <li>{{user.name}}</li>
    <li>{{user.username}}</li>
    <li>{{user.email}}</li>
    <li>{{user.phone}}</li>
    <li>{{user.website}}</li>
    <p><strong>Album:</strong></p>
    <li>{{ albumTitle }}</li>

    <p><strong>Photos:</strong></p>
    <li>{{photothumbnailUrl}}</li>
    <br>
    <li>{{photoTitle}}</li>
    <button @click.prevent="getTheAlbumTitle(user.id)">View Albums</button>
    <button @click.prevent="getThePhotosInfos(user.id)">View Photos</button>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/albums")
      .then(albumsRes => {
        // console.log(albumsRes.data)
        this.albums = albumsRes.data;
      });
    axios
    .get("https://jsonplaceholder.typicode.com/users/1/photos")
    .then(photosRes => {
      this.photos = photosRes.data;
    });
  },
  data() {
    return {
      albums: [],
      albumTitle: "",
      photothumbnailUrl: "",
      photoTitle: "",
    };
  },
  methods: {
    getTheAlbumTitle(id) {
      const album = this.albums.find(album => album.id === id);
      this.albumTitle = album.title;
    }, 
    getThePhotosInfos(id){
      const photo = this.photos.find(photo => photo.id === id);
      this.photothumbnailUrl = photo.thumbnailUrl;
      this.photoTitle = photo.title;
      }
    }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
