<script setup>
const products = useProducts();
</script>
<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div
        class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
      >
        <div v-for="product in products" :key="product.id">
          <div class="relative">
            <div class="relative w-full h-72 rounded-lg overflow-hidden">
              <img
                :src="product.imageSrc"
                :alt="product.imageAlt"
                class="w-full h-full object-center object-contain"
              />
            </div>
            <div class="relative mt-4">
              <h3 class="text-sm font-medium text-gray-900">
                {{ product.name }}
              </h3>
            </div>
            <div
              class="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden"
            >
              <div
                aria-hidden="true"
                class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
              />
              <p class="relative text-lg font-semibold text-white">
                ${{ product.price.toLocaleString() }}
              </p>
            </div>
          </div>
          <div class="mt-6">
            <a
              :href="`/products/${product.id}`"
              class="relative flex bg-indigo-600 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-white hover:bg-indigo-700"
              >Comprar<span class="sr-only">, {{ product.name }}</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
