import { MdPages } from 'react-icons/md'

export default {
  name: "product",
  title: "Product",
  type: "document",
  icon: MdPages,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "mainImage",
    },
    {
      name: "exerpt",
      title: "Exerpt",
      type: "bodyPortableText",
    },
    {
      name: "productPrice",
      title: "Product Price Reference",
      type: "reference",
      to: [{ type: "price" }],
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "body",
      title: "Body",
      type: "bodyPortableText",
    },
 
  ],

  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
