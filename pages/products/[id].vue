<script setup>
const route = useRoute();
const products = useProducts();
const product = products.find((p) => p.id === Number(route.params.id));
const reviews = { average: 4, totalCount: 1624 };
const preference = await createPreference(product);
const mpScript = useMpScript();
const mpCheckout = useMpCheckout(preference.body.id);
</script>
<template>
  <div class="bg-white">
    <div v-html="mpScript"></div>
    <div v-html="mpCheckout"></div>
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8"
    >
      <!-- Product details -->
      <div class="lg:max-w-lg lg:self-end">
        <nav aria-label="Breadcrumb">
          <ol role="list" class="flex items-center space-x-2">
            <li
              v-for="(breadcrumb, breadcrumbIdx) in product.breadcrumbs"
              :key="breadcrumb.id"
            >
              <div class="flex items-center text-sm">
                <a
                  :href="breadcrumb.href"
                  class="font-medium text-gray-500 hover:text-gray-900"
                >
                  {{ breadcrumb.name }}
                </a>
                <svg
                  v-if="breadcrumbIdx !== product.breadcrumbs.length - 1"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  aria-hidden="true"
                  class="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              </div>
            </li>
          </ol>
        </nav>

        <div class="mt-4">
          <h1
            class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            {{ product.name }}
          </h1>
        </div>

        <section aria-labelledby="information-heading" class="mt-4">
          <h2 id="information-heading" class="sr-only">Product information</h2>

          <div class="flex items-center">
            <p class="text-lg text-gray-900 sm:text-xl">
              ${{ product.price.toLocaleString() }}
            </p>

            <div class="ml-4 pl-4 border-l border-gray-300">
              <h2 class="sr-only">Reviews</h2>
              <div class="flex items-center">
                <div>
                  <div class="flex items-center">
                    <SolidStarIcon
                      v-for="rating in [0, 1, 2, 3, 4]"
                      :key="rating"
                      :class="[
                        reviews.average > rating
                          ? 'text-yellow-400'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                  </div>
                  <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
                </div>
                <p class="ml-2 text-sm text-gray-500">
                  {{ reviews.totalCount }} reviews
                </p>
              </div>
            </div>
          </div>

          <div class="mt-4 space-y-6">
            <p class="text-base text-gray-500">{{ product.description }}</p>
          </div>

          <div class="mt-6 flex items-center">
            <SolidCheckIcon
              class="flex-shrink-0 w-5 h-5 text-green-500"
              aria-hidden="true"
            />
            <p class="ml-2 text-sm text-gray-500">
              En stock y listo para comprar
            </p>
          </div>
        </section>
      </div>

      <!-- Product image -->
      <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
        <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="w-full h-full object-center object-cover"
          />
        </div>
      </div>

      <!-- Product form -->
      <div
        class="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start"
      >
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" class="sr-only">Product options</h2>

          <form>
            <div class="mt-10">
              <button
                type="button"
                onclick="checkout.open()"
                class="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Pagar
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>
