<script setup>
const route = useRoute();
const status = route.params.status;
const methodId = route.query.payment_method_id;
const externalReference = route.query.external_reference;
const paymentId = route.query.collection_id;
const links = [
  {
    title: "Medio de pago",
    description: methodId,
  },
  {
    title: "Email del comprador",
    description: externalReference,
  },
  {
    title: "ID de la transacción",
    description: paymentId,
  },
];

// https://www.tusitio.com/success.php?collection_id=[PAYMENT_ID]&collection_status=app
// roved&external_refe
// rence=[EXTERNAL_REFERENCE]&payment_type=credit_card&preference_id=[PREFER
// ENCE_ID]&site_id=[ SITE_ID]&processing_mode=aggregator&merchant_account_id=null
</script>
<template>
  <div class="bg-white">
    <main class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex-shrink-0 pt-8">
        <SolidCheckCircleIcon
          v-if="status === 'success'"
          class="mx-auto h-12 w-auto text-green-500"
        />
        <SolidXCircleIcon
          v-if="status === 'failure'"
          class="mx-auto h-12 w-auto text-red-500"
        />
        <SolidMinusCircleIcon
          v-if="status === 'pending'"
          class="mx-auto h-12 w-auto text-yellow-500"
        />
        <!-- <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
          alt="Workflow"
        /> -->
      </div>
      <div class="max-w-xl mx-auto py-4 sm:py-8">
        <div class="text-center">
          <p
            class="text-sm font-semibold uppercase tracking-wide"
            :class="{
              'text-red-600': status === 'failure',
              'text-green-600': status === 'success',
              'text-yellow-600': status === 'pending',
            }"
          >
            {{
              status == "failure"
                ? "fallado"
                : status == "pending"
                ? "pendiente"
                : status == "success"
                ? "aprobado"
                : ""
            }}
          </p>
          <h1
            class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
          >
            {{
              status == "failure"
                ? "Tu pago ha fallado"
                : status == "pending"
                ? "Tu pago está pendiente"
                : status == "success"
                ? "Tu pago ha sido aprobado"
                : ""
            }}
          </h1>
        </div>
        <div class="mt-12">
          <h2
            class="text-sm font-semibold text-gray-500 tracking-wide uppercase"
          >
            Detalles del pago
          </h2>
          <ul
            role="list"
            class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
          >
            <li
              v-for="(link, linkIdx) in links"
              :key="linkIdx"
              class="relative py-6 flex items-start space-x-4"
            >
              <div class="flex-shrink-0">
                <span
                  class="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50"
                >
                  <OutlineAtSymbolIcon
                    :is="link.icon"
                    v-if="link.title === 'Email del comprador'"
                    class="h-6 w-6 text-indigo-700"
                    aria-hidden="true"
                  />
                  <OutlineCashIcon
                    :is="link.icon"
                    v-if="link.title === 'Medio de pago'"
                    class="h-6 w-6 text-indigo-700"
                    aria-hidden="true"
                  />
                  <OutlineHashtagIcon
                    :is="link.icon"
                    v-if="link.title === 'ID de la transacción'"
                    class="h-6 w-6 text-indigo-700"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div class="min-w-0 flex-1">
                <h3 class="text-base font-medium text-gray-900">
                  <span
                    class="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <div class="focus:outline-none">
                      <span class="absolute inset-0" aria-hidden="true" />
                      {{ link.title }}
                    </div>
                  </span>
                </h3>
                <p class="text-base text-gray-500">{{ link.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<!-- <template>
  <div>
    <h1>
      {{
        status == "failure"
          ? "Tu pago ha fallado"
          : status == "pending"
          ? "Tu pago está pendiente"
          : status == "success"
          ? "Tu pago ha sido aprobado"
          : ""
      }}
    </h1>
    <h1>Datos del pago</h1>

  </div>
</template> -->
