Vue.component('toggler',{
    props: ['active'],
    template: /*html*/`
        <div>
            <div @click="active = !active">
                <slot></slot>
            </div>       
            <div v-if="active">
                <slot name="content"></slot>
            </div>            
        </div>
    `
})