const app = new Vue({
    el: '#app',
    created(){
        const character_saved = localStorage.getItem('character_sheet') 
        if (character_saved == null){
            localStorage.setItem('character_sheet', JSON.stringify({
                name: '',
                classes: [
                    {name: '', level: 0}
                ]
            }))
        }

        this.character = JSON.parse(localStorage.getItem('character_sheet'))
    },
    data: {
        character: {}
    },
    computed:{
        encoded(){
            console.log(JSON.stringify(this.character))
            console.log(JSON.parse(localStorage.getItem('character_sheet')))
            localStorage.setItem('character_sheet', JSON.stringify(this.character))
            return "data:text/json;charset=utf-8,"
                + encodeURIComponent(JSON.stringify(this.character));
        } 
    },
    methods:{
        save(){

        }
    }
})