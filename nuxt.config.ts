import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "MercadoPago Ecommerce",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [{ src: "https://sdk.mercadopago.com/js/v2" }],
  },
  body: {
    script: [{ src: "https://sdk.mercadopago.com/js/v2" }],
  },
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxt-hero-icons/outline/nuxt",
    "@nuxt-hero-icons/solid/nuxt",
  ],
});
