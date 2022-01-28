export default {
  name: "price",
  title: "Price",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "reference",
      to: { type: "content" },
      },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      title: "Currency",
      name: "currency",
      type: "string",
    },
    {
      name: "priceID",
      title: "Stripe Price ID",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};