export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  console.log(body);
  return { body };
});
