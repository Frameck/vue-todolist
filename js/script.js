Vue.config.devtools = true

const vueApp = new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasksList: ['Fare la spesa', 'Andare in banca', 'Comprare il pane']
    },
    methods: {
        addTaskOnClick() {
            const duplicatedElement = this.tasksList.find(el => this.newTask.trim().toLowerCase() === el.toLowerCase())
            
            // se il nuovo task è una stringa vuota o se esiste già non eseguo il push
            if (this.newTask.trim() === '' || duplicatedElement !== undefined) {
                return
            }
            this.tasksList.push(this.newTask.trim())
            this.newTask = ''
        },
        removeTaskOnClick(i) {
            this.tasksList.splice(i, 1)
        }
    }
})