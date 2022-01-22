<template>
  <div class="row">
    <span class="label">l</span>
    <input v-model="input.l" type="text" />
  </div>
  <div class="row">
    <span class="label">r</span>
    <input v-model="input.r" type="text" />
  </div>
  <div class="row">
    <span class="label">A</span>
    <input v-model="input.A" type="text" />
  </div>
  <div class="row">
    <span class="label">B</span>
    <input v-model="input.B" type="text" />
  </div>
  <div class="row">f2={{ result.f2 }}</div>
  <div class="row">f3={{ result.f3 }}</div>
  <div class="row">fc={{ result.fc }}</div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
const input = reactive({
  l: "",
  r: "",
  A: "",
  B: "",
})
const result = reactive({
  f2: 0,
  f3: 0,
  fc: 0,
})
watch(input, () => {
  const [l, r, A, B] = [input.l, input.r, input.A, input.B].map(x => parseFloat(x))
  const fc = l ** 2 / (8 * r)
  const f2 = B ** 2 / 2 * fc
  const f3 = (1 - A ** 2 / 2) * fc
  result.fc = fc.toFixed(6)
  result.f2 = f2.toFixed(6)
  result.f3 = f3.toFixed(6)
})
</script>

<style scoped>
.label {
  width: 20px;
  display: inline-block;
}
</style>
