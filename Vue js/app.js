const app = Vue.createApp({
    //data,functions
    //template: '<h2> I am the template</h2>'

    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            // title: 'The Final empire',
            // author: 'Brandon ',
            // age: 40,
            // x: 0,
            // y: 0
            books: [
                { title: 'name  of the wind', author: 'Shake' },
                { title: 'success in life', author: 'Tanzi' },
                { title: 'name  of the wind', author: 'Harry' },
            ]

        }
    },

    methods: {
        // changeTitle(abc) {
        //     this.title = abc
        // },

        toggleshowBooks() {
            this.showBooks = !this.showBooks
        },
        // computed: {
        //     filteredBooks() {
        //         return this.books.filter((book) => book.isFav)
        //     }
        // }
        // handleEvent(e, data) {
        //     console.log(e, e.type)
        //     if (data) {
        //         console.log(data)
        //     }
        // },
        // handleMouseMove(e) {
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // }

    }
})


app.mount('#app')