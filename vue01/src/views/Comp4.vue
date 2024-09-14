<template>
    <h3>Comp4</h3>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
    </button>
    <button type="button" class="btn btn-primary" @click="openModal">open</button>

    <ProductModal ref="productModal"></ProductModal>
</template>
    
<script setup>
    import ProductModal from '@/components/ProductModal.vue';
    import { ref } from 'vue';

    const productModal = ref(null);
    function openModal() {
        productModal.value.showModal();
    }
</script>
    
<style>

</style>