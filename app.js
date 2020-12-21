new Vue({
    el: "#app",
    data: {
        src:"https://i.picsum.photos/id/977/200/200.jpg?hmac=bhLVu-kBB_plx-DkWXz4gYn-ViPAhDjTtGFwu143FiA",
        alt: "This is dog",
        link: "https://google.com",
        myText: "This is dog",
        myWrite: "This is rate",
        myStrong: "<strong>I am happy</strong>",

        user: "Redo",
        age: 50,
        allowAge: 18,
        cars: {
            Toyota112:' Toyota',
            Tesla113: 'Tesla',
            BMW114: 'BMW',
            Hybrid115: 'Hybrid'
        },
        name: "Redoy",

    },

    methods: {
        changeUser(){
            return this.user==="Redoy" ? true : false;
        },
        update(){
            setTimeout(() =>{
                return this.name = 'Bristy'
            }, 2000)
        }
        
    }
});