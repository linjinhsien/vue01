<template>
    <div>
        <RouterLink to="/">Home</RouterLink>｜
        <RouterLink :to="{name: 'dir1-comp1-link'}">Comp1</RouterLink>｜
        <RouterLink :to="{name: 'dir2-comp2-link', params: { xyz: '123456'} }">Comp2</RouterLink>｜
        <RouterLink to="/dir1/comp3">Comp3</RouterLink>｜
        <RouterLink to="/dir1/comp4">Comp4</RouterLink>｜
        <RouterLink to="/dir1/cart-container">Cart Container</RouterLink>｜
    </div>
    <div>
        <RouterView></RouterView>
    </div>
</template>
  
<script setup>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';
    
</script>
  
<style>
  
</style>