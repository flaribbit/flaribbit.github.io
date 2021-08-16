<template>
  <ul>
    <li v-for="p in pages" :key="p.file">
      <a class="link" :href="p.href">{{ p.title }}</a>
    </li>
  </ul>
</template>

<script>
import { useData } from "vitepress";
export default {
  data: () => ({
    pages: [],
  }),
  mounted() {
    this.pages = useData().site.value.customData.pages;
  },
};
</script>
