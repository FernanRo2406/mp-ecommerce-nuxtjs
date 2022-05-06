export const useMpScript = () =>
  "<script>const mp = new MercadoPago('APP_USR-4d253c8c-91e9-4f16-ad71-8fae64a30c33', { locale: 'es-AR'});</script>";

export const useMpCheckout = (id: string) =>
  `<script>var checkout = mp.checkout({ preference: { id: '${id}', },});</script>`;

export const useProducts = () => [
  {
    id: 1,
    name: "Samsung Galaxy S9",
    price: "$15.000",
    rating: 5,
    reviewCount: 38,
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_675342-MLA31637636036_072019-V.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 2,
    name: "LG G6",
    price: "$10.000",
    rating: 5,
    reviewCount: 18,
    imageSrc: "https://m.media-amazon.com/images/I/41k30sQzBNL._AC_.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 3,
    name: "iPhone 8",
    price: "$16.000",
    rating: 5,
    reviewCount: 14,
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_766276-MLA43418289120_092020-O.webp",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 4,
    name: "Motorola G8",
    price: "$9.000",
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_928228-MLA49360192695_032022-O.webp",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 5,
    name: "Moto G4",
    price: "$8.000",
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_909707-MLA46712579058_072021-O.webp",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 6,
    name: "Sony Xperia XZ",
    price: "$10.000",
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_603901-MLA45480198375_042021-O.webp",
    imageAlt: "TODO",
    href: "#",
  },
  // More products...
];
