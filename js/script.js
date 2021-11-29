const app = new Vue({
    el:'#root',
    data:{

    },
    methods:{
        newTask: {
            text: '',
            done: false
        },
        tasks: [
            {
                text: 'Bring luky for a walk',
                done: false
            },
            {
                text: 'Repeat js',
                done: false
            },
            {
                text: 'trainning',
                done: false
            },
            {
                text: 'practice tabled faro shuffle',
                done: false
            },
            
        ]
    }
})