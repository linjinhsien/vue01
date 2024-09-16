# Vue 專案結構和元件說明

本文件概述了 Vue 專案的主要元件和路由設定。專案使用 Vue 3 和 Vue Router 來建構一個包含購物車功能的單頁應用程式。

## 1. 應用程式主入口 (App.js)

App.js 是應用程式的主要入口點，它定義了應用程式的基本結構和導覽連結。

```vue
<template>
  <div>
    <RouterLink to="/">首頁</RouterLink>｜
    <RouterLink :to="{name: 'dir1-comp1-link'}">元件1</RouterLink>｜
    <RouterLink :to="{name: 'dir2-comp2-link', params: { xyz: '123456'} }">元件2</RouterLink>｜
    <RouterLink to="/dir1/comp3">元件3</RouterLink>｜
    <RouterLink to="/dir1/comp4">元件4</RouterLink>｜
    <RouterLink to="/dir1/cart-container">購物車容器</RouterLink>｜
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
/* 全域樣式可以在這裡添加 */
</style>
```

這個元件設定了應用程式的基本結構，包括導覽連結和一個 `<RouterView>` 元件來顯示當前路由對應的內容。

## 2. 路由設定 (router.js)

router.js 檔案定義了應用程式的路由結構，將 URL 路徑對應到相應的元件。

```javascript
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';
import CompOne from '../views/Comp1.vue';
import CompTwo from '../views/Comp2.vue';
import Comp3 from '@/views/Comp3.vue';
import Comp4 from '@/views/Comp4.vue';
import CartContainer from '../views/CartContainer.vue';

const routes = [
  { name: "home-link", path: "/", component: Home},
  { name: "notfound-link", path: "/:pathMatch(.*)*", component: NotFound},
  { name: "dir1-comp1-link", path: "/dir1/comp1", component: CompOne},
  { name: "dir2-comp2-link", path: "/dir2/comp2/:xyz", component: CompTwo },
  { name: "dir3-comp1-link", path: "/dir1/comp3", component: Comp3},
  { name: "dir4-comp1-link", path: "/dir1/comp4", component: Comp4},
  { name: "cart-container-link", path: "/dir1/cart-container", component: CartContainer },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

這個設定定義了應用程式的路由結構，包括首頁、各個元件頁面和購物車頁面的路由。

## 3. 元件說明

以下是專案中的主要元件：

### 3.1 ProductModal 元件

ProductModal 元件用於顯示商品詳情和新增到購物車的功能。

```vue
<script setup>
// 腳本內容省略，請參考之前的程式碼
</script>

<template>
  <div ref="exampleRef" class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
    <!-- 互動視窗內容省略，請參考之前的程式碼 -->
  </div>
</template>
```

這個元件建立了一個互動視窗來展示商品詳情，並允許使用者將商品新增到購物車。

### 3.2 ProductSelect 元件

ProductSelect 元件用於顯示購物車狀態和控制每頁顯示的商品數量。

```vue
<template>
  <span>
    <span v-if="total <= 0">購物車為空，</span>
    <span v-else>購物車中有{{ total }}件商品，</span>
    每頁顯示
    <select :value="modelValue" @change="dochange">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
    件
  </span>
</template>

<script setup>
// 腳本內容省略，請根據需要添加
</script>
```

這個元件顯示購物車中的商品數量，並允許使用者選擇每頁顯示的商品數量。

### 3.3 ShoppingCart 元件

ShoppingCart 元件是購物車的主要介面，它整合了 ProductSelect 和 ProductModal 元件。

```vue
<template>
  <div>
    <h2>購物車</h2>
    <ProductSelect
      v-model="itemsPerPage"
      :options="[5, 10, 20]"
      :total="cartItems.length"
      @rows-change="updateDisplayedItems"
    />
    <CompCart :items="displayedItems" />
    <button @click="showProductModal">新增商品</button>
    <ProductModal ref="productModal" :product="selectedProduct" @add-to-cart="addToCart" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProductSelect from '@/components/ProductSelect.vue';
import ProductModal from '@/components/ProductModal.vue';

// 腳本內容省略，請參考之前的程式碼
</script>
```

這個元件管理購物車的整體邏輯，包括顯示商品列表、新增商品和更新購物車內容。

## 結論

這個 Vue 專案結構提供了一個基本的購物車功能實現。它包括路由設定、商品展示、購物車管理等功能。要進一步完善這個專案，您可能需要：

1. 實作實際的後端 API 整合
2. 新增使用者認證功能
3. 改進購物車的狀態管理（可能使用 Vuex 或 Pinia）
4. 新增更多的錯誤處理和載入狀態
5. 優化元件的樣式和使用者體驗

透過這種結構，您可以輕鬆地擴展和維護您的 Vue 應用程式。
