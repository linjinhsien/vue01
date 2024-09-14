<template>
    <h3>Component One</h3>
    <button @click="doclick()">count：{{ count }}</button>
</template>

<script setup>
    import { ref, onBeforeUpdate, onUpdated } from 'vue';
    const count = ref(0);
    function doclick() {
        count.value++;
    }
    onBeforeUpdate(function() {
        console.log("onBeforeUpdate");
    });
    onUpdated(function() {
        console.log("onUpdated");
        count.value++;

    });
</script>
    
<style scoped>
    h3 { color: blue;}
</style>