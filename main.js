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
            this.tasks.push(this.newTask);
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
        }

    },
})