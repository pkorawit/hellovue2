Vue.component('hobby-card', {
    template: '#hobbyCard',
    props:['hobby', 'hobbyindex'],
    data() {
        return {
            count: 0
        }
    },
    methods: {
        up() {
            this.count++;
        },
        down() {
            this.count--;
        },
        deleteHobby() {
            this.$emit('deleterequest', this.hobbyindex);
        }
    }
})



var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        firstname: 'Korawit',
        lastname: 'Prutsa',
        dob: '19/05/1977',
        email: 'korawit.p@gmail.com',
        showEmail: true,
        hobbies: [
            { id: 1, name: "Gaming" },
            { id: 2, name: "Reading" },
            { id: 3, name: "Drinking" },
            { id: 4, name: "Sleeping" },
        ],
        newHobby: ''
    },
    methods: {
        setShowEmail() {
            this.showEmail = true;
        },
        setHideEmail() {
            this.showEmail = false;
        },
        addNewHobby() {
            const newItem = { id: this.hobbies.length + 1, name: this.newHobby }
            this.hobbies.push(newItem);
        },
        clearHobby() {
            this.hobbies = [];
        },
        deleteHobby(index) {
            this.hobbies.splice(index, 1)
        }        
    }
})