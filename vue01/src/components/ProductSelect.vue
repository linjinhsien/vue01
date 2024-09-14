<template>
  <span>
    <span v-if="total <= 0">查無資料，</span>
    <span v-else>查到{{ total }}筆資料，</span>
    每頁顯示<select :value="modelValue" @change="dochange">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option></select
    >筆
  </span>
</template>
<script setup>
import { onBeforeUpdate, onUpdated } from "vue";

const props = defineProps(["modelValue", "options", "total"]);
const emits = defineEmits(["update:modelValue", "rowsChange"]);
function dochange(event) {
  emits("update:modelValue", event.target.value);
  emits("rowsChange");
}
</script>

<style></style>
