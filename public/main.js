Vue.component('item', {
    template: '#item-template',
    props: ["artist"],
    data: function () {
      return {
        seen: true
      }
    },
    computed: {
        axiosInstance: function() {
            return vue.axiosInstance;
         }
    },
    methods: {
        toggle: function () {
            console.log|(this.props)
            if (this.isFolder) {
                this.open = !this.open
            }
        },
        renderProfile: function() {

            console.log(this.artist.key)
            this.$parent.$options.methods.setCurrentArtist.call(vue, this.artist.key)

        },

        removeArtist: function (id) {
            this.axiosInstance.post('/remove', {
                    id: id
                })
                .then((responce) => {
                    console.log(responce.data);
                    vue.getAllArtist();
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
                })
                  
        },
        updateArtist: function (key, newValue) {
            
            console.log(key)
            console.log(newValue)
            this.axiosInstance.post('/update', {
                   newArtist: newValue,
                   id: key
                })
                .then((responce) => {
                    console.log(responce.data.about);
                    responce.data.about = this.artist.about
                    // vue.getAllArtist();
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })
        }

    }       
})

Vue.component('user-profile', {
    template: '#user-profile-template',
    props: ["artist"],
    data: function () {
      return {
        seen: true,
        isSuccessful: true,
        isError: false,
        button: {
            text: 'Edit',
          }
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
        toggle: function () {
            console.log|(this.props)
            if (this.isFolder) {
                this.open = !this.open
            }
        },
        updateArtist: function (id, newObject) {

            console.log(id)
            console.log(newObject)
            this.axiosInstance.post('/update', {
                   newArtist: newObject,
                   id: id
                })
                .then((responce) => {
                    console.log(responce.data);
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })
        },
        toggleText: function() {
            console.log('Hide')
            this.button.text =  (this.button.text == 'Edit') ? 'Save' : 'Edit';

          },
          switchClick: function() {
            if(this.isSuccessful && !this.isError)
            {
                this.isSuccessful = false;
                this.isError = true;
            }
            else if(this.isError && !this.isSuccessful)
            {
                this.isError = false;
                this.isSuccessful = true;
            }
        },
        removeArtist: function (id) {
            this.axiosInstance.post('/remove', {
                    id: id
                })
                .then((responce) => {
                    console.log(responce.data);
                    vue.getAllArtist();
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
                })
                  
        },  

    }       
})

var vue = new Vue ({
    el: '#app',
    data: {
        artists: [],
        artist: {
            key: undefined,
            name: undefined,
            location: undefined,
            price: undefined,
            style: undefined,
            dates: undefined,
            about: undefined
        },
        currentArtist: {
            key: undefined,
            name: undefined,
            location: undefined,
            price: undefined,
            style: undefined,
            dates: undefined,
            about: undefined
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
        setCurrentArtist: function(id) {

            var result = this.artists.filter(function( obj ) {
                return obj.key == id;
              });

              var newArtist = result[0];
              this.currentArtist = newArtist; 
        },
        newArtist: function () {
            
            this.axiosInstance.post('/create', {
            newArtist: this.artist   
            })
                .then((responce) => {
                    console.log(responce.data);
                    this.resetForm();
                    this.getAllArtist();
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })

            
        },
        updateArtist: function (id, newObject) {
            ab.appendChild(inp);

            console.log(id)
            console.log(newObject)
            this.axiosInstance.post('/update', {
                   newArtist: newObject,
                   id: id
                })
                .then((responce) => {
                    console.log(responce.data);
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })
        },
        getAllArtist: function () {
            this.axiosInstance.post('/read_all', {
                })
                .then((responce) => {

                    this.artists = [];

                    for (elem in responce.data) {
                        console.log(responce.data[elem]);
                        this.artists.push(responce.data[elem]);
                    }
                    console.log(this.artists);
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })
        },
        renderProfile: function(id) {
            var result = vue.artists.filter(function( obj ) {
                return obj.key == id;
              });
              var resultik = result[0];
              var lol = JSON.stringify(resultik);
              var kek = JSON.stringify(vue.currentArtist);
              kek = lol;
              var cheburek = JSON.parse(kek)
              
              console.log(cheburek);
            },
        resetForm: function() {
            Object.keys(this.artist).forEach( key => this.artist[key] = '');
        }
    },
    created: function (){
        this.getAllArtist();
    }
})

