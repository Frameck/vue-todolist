Vue.config.devtools = true

const vueApp = new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasksList: ['Fare la spesa', 'Andare in banca', 'Comprare il pane']
    }
})