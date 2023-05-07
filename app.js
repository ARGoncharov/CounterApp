const App = {
    data() {
        return {
            placeholderString: "Enter note name",
            title: 'NoteCounter',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        inputKeyPressed(event) {
            if (event.key === 'Enter') {
                this.addNewNote()
            }
        },
        removeNote(index) {
            this.notes.splice(index, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 50) {
                this.inputValue = ''
            }
            console.log('input  value changed', value)
        }
    }
}

Vue.createApp(App).mount('#app')