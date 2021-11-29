const app = new Vue(
    {
        el: '#root',
        data: {
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
        },

        methods: {

            add(){
                if (this.newTask.text[0] !== ' ' && this.newTask.text.length > 0) {
                    this.tasks.push(this.newTask);
                    this.newTask = {text: '',done: false};
                }
            },
            removeTask(index){
                this.tasks.splice(index, 1);
            },
            doneTask(index){
                if(this.tasks[index].done === true) {
                    this.tasks[index].done = false;
                } else {
                    this.tasks[index].done = true;
                }                
            }
        }
    }
);