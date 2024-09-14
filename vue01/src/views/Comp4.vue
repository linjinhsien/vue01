<template>
    <div>
      <h3>Comp4 - Product Showcase</h3>
      <button @click="openModal" class="btn btn-primary">View Product</button>
      <ProductModal ref="productModal" :product="selectedProduct" @add-to-cart="addToCart"></ProductModal>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ProductModal from '@/components/ProductModal.vue';
  
  const productModal = ref(null);
  const selectedProduct = ref({
    id: 1,
    name: 'Sample Product',
    price: 19.99,
    description: 'This is a sample product description.'
  });
  
  function openModal() {
    productModal.value.showModal();
  }
  
  function addToCart(product) {
    console.log('Product added to cart:', product);
    // Here you would typically update your cart state or send a request to your backend
    // For now, we'll just log the action
  }
  </script>
<style>

</style>