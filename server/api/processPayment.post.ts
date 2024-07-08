import { Payment, MercadoPagoConfig } from "mercadopago/dist";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  // console.log(body);
  const client = new MercadoPagoConfig({
    accessToken: process.env.MERCADOPAGO_SUBSCRIPTIONS_ACCESS_TOKEN,
  });

  const payment = new Payment(client);

  return payment
    .create({
      body: {
        transaction_amount: body.transaction_amount,
        description: body.description || "Suscripción a Tienda e-commerce",
        token: body.token,
        installments: body.installments,
        payment_method_id: body.payment_method_id,
        issuer_id: body.issuer_id,
        payer: {
          email: body.payer.email,
          identification: {
            type: body.payer.identification.type,
            number: body.payer.identification.number,
          },
        },
      },
      requestOptions: {
        idempotencyKey: "0d5020ed-1af6-469c-ae06-c3bec19954bb",
      },
    })
    .then((result) => result)
    .catch((err) => {
      event.res.statusCode = err.status || 500;
      return err;
    });
});
