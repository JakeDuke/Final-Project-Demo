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
    export default

    new Vue ({
        el: 'app'
        render: h => h(App)
    })

        data: function () {
            return {
   
                artist: {
                    key: undefined,
                    name: undefined,
                    location: undefined,
                    price: undefined,
                    style: undefined,
                    dates: undefined,
                    about: undefined
                },

            }
    },
    computed: {
        axiosInstance: function () {
            return axios.create({
                baseURL: 'http://localhost:3001/api',
            })
        }
    },
    methods: {

        newArtist: function () {
            
            this.axiosInstance.post('/create', {
            newArtist: this.artist   
            })
                .then((responce) => {
                    console.log(responce.data);
                    this.resetForm();
                    this.$parent.$options.methods.getAllArtist.call(this.$parent)
                    
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })

            
        },


        resetForm: function() {
            Object.keys(this.artist).forEach( key => this.artist[key] = '');
        }
    },


}
</script>

<!-- input form end -->

