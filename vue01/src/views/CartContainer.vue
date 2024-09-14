<template>
    <div>
      <h2>Shopping Cart</h2>
      <ProductSelect
        v-model="itemsPerPage"
        :options="[5, 10, 20]"
        :total="cartItems.length"
        @rows-change="updateDisplayedItems"
      />
      <CompCart :items="displayedItems" />
      <button @click="showProductModal">Add Product</button>
      <ProductModal ref="productModal" :product="selectedProduct" @add-to-cart="addToCart" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import ProductSelect from '@/components/ProductSelect.vue';
  import ProductModal from '@/components/ProductModal.vue';
  
  const cartItems = ref([
    { id: 1, name: 'Product 1', price: 10, description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', price: 30, description: 'Description for Product 3' },
  ]);
  
  const itemsPerPage = ref(5);
  const currentPage = ref(1);
  
  const displayedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    return cartItems.value.slice(start, start + itemsPerPage.value);
  });
  
  const productModal = ref(null);
  const selectedProduct = ref({});
  
  function showProductModal() {
    selectedProduct.value = { id: 4, name: 'New Product', price: 25, description: 'Description for New Product' };
    productModal.value.showModal();
  }
  
  function addToCart(product) {
    cartItems.value.push(product);
  }
  
  function updateDisplayedItems() {
    currentPage.value = 1;
  }
  </script>