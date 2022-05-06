import mp from "mercadopago";
export const createPreference = async (product: any) => {
  mp.configure({ access_token: process.env.MERCADOPAGO_ACCESS_TOKEN });
  const preference = {
    items: [
      {
        id: product.id,
        title: product.name,
        description: "Dispositivo móvil de Tienda e-commerce",
        quantity: 1,
        unit_price: product.price,
        currency_id: "ARS",
        picture_url: product.imageSrc,
      },
    ],
    payer: {
      name: "Lalo",
      surname: "Landa",
      email: "test_user_63274575@testuser.com",
      phone: {
        area_code: "11",
        number: 33838881,
      },
      address: {
        zip_code: "1440",
        street_name: "Falsa",
        street_number: 123,
      },
    },
    payment_methods: {
      //excluir los pagos visa
      excluded_payment_methods: [
        {
          id: "visa",
        },
      ],
      installments: 6,
    },
    external_reference: "fernan.ro.2406@gmail.com",
    back_urls: {
      // declaramos las urls de redireccionamiento
      success: "https://localhost:3000/payments/success",
      pending: "https://localhost:3000/payments/pending",
      failure: "https://localhost:3000/payments/error",
    },
    notification_url: "https://localhost:3000/api/webhook",
    auto_return: "approved",
  };
  var result;
  await Promise.resolve(mp.preferences.create(preference)).then((res) => {
    result = res;
  });
  return result;
};

export const useMpScript = () =>
  `<script>const mp = new MercadoPago('${process.env.MERCADOPAGO_PUBLIC_KEY}', { locale: 'es-AR'});</script>`;

export const useMpCheckout = (id: string) =>
  `<script>var checkout = mp.checkout({ preference: { id: '${id}', },});</script>`;

export const useProducts = () => [
  {
    id: 1456,
    name: "Samsung Galaxy S9",
    price: 15000,
    rating: 5,
    reviewCount: 38,
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_675342-MLA31637636036_072019-V.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 2789,
    name: "LG G6",
    price: 10000,
    rating: 5,
    reviewCount: 18,
    imageSrc: "https://m.media-amazon.com/images/I/41k30sQzBNL._AC_.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 2345,
    name: "iPhone 8",
    price: 16000,
    rating: 5,
    reviewCount: 14,
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_766276-MLA43418289120_092020-O.webp",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 4659,
    name: "Motorola G8",
    price: 9000,
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_928228-MLA49360192695_032022-O.webp",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 5789,
    name: "Moto G4",
    price: 8000,
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_909707-MLA46712579058_072021-O.webp",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 6456,
    name: "Sony Xperia XZ",
    price: 10000,
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_603901-MLA45480198375_042021-O.webp",
    imageAlt: "TODO",
    href: "#",
  },
  // More products...
];
