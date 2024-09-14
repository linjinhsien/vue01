<template>
    <h3>Component Two：{{ route.params.xyz}}</h3>
    <div><input type="text" v-model="msg">：{{ msg }}</div>
    <div><input type="number" ></div>
</template>
    
<script setup>
    import { ref } from 'vue';
    const msg = ref("this is a demo");

    import { useRoute } from 'vue-router';
    const route = useRoute();
</script>

<style scoped>
    h3 {color: red;}
</style>