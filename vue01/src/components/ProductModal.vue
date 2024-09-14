<script setup>
import { ref, onMounted } from "vue";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const props = defineProps({
  product: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(['addToCart']);

const exampleRef = ref(null);
const exampleObj = ref(null);

onMounted(() => {
  exampleObj.value = new bootstrap.Modal(exampleRef.value);
});

function showModal() {
  exampleObj.value.show();
}

function hideModal() {
  exampleObj.value.hide();
}

function addToCart() {
  emit('addToCart', props.product);
  hideModal();
}

defineExpose({
  showModal,
  hideModal,
});
</script>

<template>
  <div
    ref="exampleRef"
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="productModalLabel">{{ product.name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Price: ${{ product.price }}</p>
          <p>{{ product.description }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>