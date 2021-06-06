<template>
    <div id="app">
        <h3>{{title}}</h3>
        <div class="container">
        <div class="d-flex"
        v-for="(id,index) in initial_ids"
        :key="index"
        >
        <Character :id="id"/>
        </div>
        </div>
    </div>
</template>

<script>
import Character from './components/Character'
export default {
    name: 'app',
    components: {
        Character
    },
    data() {
        return {
            title: 'Generate Your Team',
            initial_ids: ['1', '4', '30']
        }
    },
    methods: {
      
    }
}
</script>
