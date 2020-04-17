<template>
  <ProductListPage>
  </ProductListPage>
</template>

<script>
  import ProductListPage from "./ProductListPage"
  export default {
    name: "product-module",
      components: {
        ProductListPage,
      },

    data: () => ({
      pages:[],
    }),

    methods: {
    }
  }
</script>
