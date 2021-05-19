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
        userChoice: '',
    },
    methods: {
        // Add a task on the todo list
        addTask() {
            if (this.newTask.length > 4) {
                return this.tasks.push(this.newTask);
            }
            return alert('You must insert at least 4 characters')
        },
        // Removes a task and moves it to the bin
        removeTask(el, index) {
            this.tasks.splice(index, 1);
            this.deletedTasks.push(el)
        },
        // Add a task to the list of completed tasks
        completedTask(el, index) {
            this.completedTasks.push(el)
            this.tasks.splice(index, 1);
        },
        // Moves a completed task back on the todo list
        redoTask(el, index) {
            this.completedTasks.splice(index, 1)
            this.tasks.push(el)
        },
        // Moves a deleted task back on the todo list
        redoDeletedTask(el, index) {
            this.deletedTasks.splice(index, 1)
            this.tasks.push(el)
        },
        // Empties the bin, deleting completely all the elements inside
        emptyBin(list) {
            userChoice = prompt('This will delete all your binned tasks forever, are you sure to continue? (Y/N)')
            if (userChoice === 'N') {
                return alert('Your bin has not been cancelled'), list
            } else if (userChoice === 'Y')
                return this.deletedTasks = [], alert('Your bin has been emptied successfully')
        }

    },
})