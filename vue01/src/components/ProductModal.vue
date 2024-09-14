<script setup>
import { ref, onMounted } from "vue";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const props=defineProps(["a","b","c","d","e"])


const exampleRef = ref(null);
const exampleObj = ref(null);
onMounted(function () {
  exampleObj.value = new bootstrap.Modal(exampleRef.value);
});
function showModal() {
  exampleObj.value.show();
}
function hideModal() {
  exampleObj.value.hide();
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
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Woo-hoo, you're reading this text in a modal!</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
