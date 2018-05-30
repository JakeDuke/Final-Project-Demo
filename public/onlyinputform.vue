<template>
    <div id="container">
        <div>
        <div class="container">
        <input type="text" name="name" v-model="artist.name">
        </div>

        <div class="container">
        <input type="text" name="location" v-model="artist.location">
        </div>

        <div class="container">
        <input type="text" name="price" v-model="artist.price">
        </div>

        <div class="container">
        <input type="text" name="price" v-model="artist.style">
        </div>

        <div class="container">
        <input type="text" name="dates" v-model="artist.dates">
        </div>


        <div class="container">
        <textarea name="About" rows="4" cols="50" v-model="artist.about">
            Write any additional details.
        </textarea>
        </div>



</template>

<script>

    import Axios from 'axios'
    import Vue from 'vue'

    new Vue ({
        el: 'app'
        render: h => h(App)
    })

</script>

<!-- input form end -->

