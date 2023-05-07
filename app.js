const App = {
    data() {
        return {
            placeholderString: "Enter note name",
            title: 'Counter',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value;
        },
        addNewNote() {
            this.notes.push(this.inputValue)
        }
    }
}

Vue.createApp(App).mount('#app')