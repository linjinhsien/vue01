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
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: Number,
  options: Array,
  total: Number
});

const emits = defineEmits(['update:modelValue', 'rowsChange']);

function dochange(event) {
  emits('update:modelValue', Number(event.target.value));
  emits('rowsChange');
}
</script>