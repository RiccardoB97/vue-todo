const app = new Vue({
    el: '#app',
    data: {
        logo: './assets/img/logo.png',
        newTask: '',
        tasks: [
            "Learn CSS",
            "Learn JS",
            "Learn VueJS",

        ],
        completedTasks: [],
        deletedTasks: [],
    },
    methods: {
        addTask() {
            if (this.newTask.length > 4) {
                return this.tasks.push(this.newTask);
            }
            return alert('You must insert at least 4 characters')
        },
        removeTask(el, index) {
            this.tasks.splice(index, 1);
            this.deletedTasks.push(el)
        },
        completedTask(el, index) {
            this.completedTasks.push(el)
            this.tasks.splice(index, 1);
        },
        redoTask(el, index) {
            this.completedTasks.splice(index, 1)
            this.tasks.push(el)
        },
        redoDeletedTask(el, index) {
            this.deletedTasks.splice(index, 1)
            this.tasks.push(el)
        },
        emptyBin(list) {
            var userChoise = prompt('This will delete all your binned tasks forever, are you sure to continue? (Y/N)')
            if (userChoise === 'N') {
                console.log(list);
                return alert('Your bin has not been cancelled'), list
            } else if (userChoise === 'Y')
                return list = [], alert('Your bin has been emptied successfully')
        }

    },
})