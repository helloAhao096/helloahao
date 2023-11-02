<script setup lang="ts">
import {onMounted} from "vue";

interface Props {
  buttonText: String
}
const props = defineProps<Props>()

onMounted(() => {
  const showDialog = document.getElementById('showDialog') as HTMLButtonElement;
  const modal = document.getElementById('modal') as HTMLDialogElement;
  const cancel = document.getElementById('cancel') as HTMLButtonElement;

  showDialog.addEventListener('click', () => {
    console.log(modal)
    if (typeof modal.showModal === "function") {
      modal.showModal();
    }})

  cancel.addEventListener('click',()=> {
    modal.close()
  })



})
// if (typeof modal.showModal !== 'function') {
//   modal.hidden = true;
  /* a fallback script to allow this dialog/form to function
     for legacy browsers that do not support <dialog>
     could be provided here.
  */
// }
// "Update details" button opens the <dialog> modally

</script>

<template>
  <button id="showDialog">{{ buttonText }}</button>
  <dialog id="modal"
          class="modal w-full min-h-1/2">
      <button id="cancel" class="absolute top-5 right-5 " >
        <span class="i-akar-icons:cross"></span>
      </button>
  </dialog>

</template>

<style scoped lang="scss">

//@screen mobile {
//  .modal {
//    @apply w-full
//  }
//}

</style>