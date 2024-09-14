<template>
    <h3>Comp3</h3>
    <div>
        <ProductSelect :options="[5, 10, 15, 50, 100]" :total="total" v-model="rows" @rows-change="callFind"></ProductSelect>
    </div>
    <h4>測試</h4>
    <div>total：<input type="number" v-model="total"></div>
    <div>rows<input type="number" v-model="rows"></div>
</template>
<script setup>
    import ProductSelect from '@/components/ProductSelect.vue';
    import { ref } from 'vue';
    const total = ref(10);
    const rows = ref(50);
    function callFind() {
        console.log("callFind", new Date());
    }
</script>
    
<style>
    
</style>