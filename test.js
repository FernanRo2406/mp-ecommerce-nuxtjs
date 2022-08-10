const mp = new MercadoPago("${process.env.MERCADOPAGO_PUBLIC_KEY}", {
  locale: "es-AR",
});
const bricksBuilder = mp.bricks();
const renderCardPaymentBrick = async (bricksBuilder) => {
  const settings = {
    initialization: {
      amount: 100,
      payer: {
        email: "test@mail.com",
      },
    },
    customization: {
      visual: {
        style: {
          theme: "dark",
        },
      },
    },
    callbacks: {
      onReady: () => {},
      onSubmit: (cardFormData) => {
        return new Promise((resolve, reject) => {
          fetch("/process_payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cardFormData),
          })
            .then((response) => {
              resolve();
            })
            .catch((error) => {
              reject();
            });
        });
      },
      onError: (error) => {},
    },
  };
  window.cardPaymentBrickController = await bricksBuilder.create(
    "cardPayment",
    "cardPaymentBrick_container",
    settings
  );
};
renderCardPaymentBrick(bricksBuilder);
