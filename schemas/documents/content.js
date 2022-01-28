import React from 'react'
import { MdOutlineContentCopy } from 'react-icons/md'

export default {
  name: "content",
  title: "Content",
  type: "document",
  icon: MdOutlineContentCopy,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
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
      title: 'Documents',
      name: 'documents',
      type: "array",
      of: [
        {
          type: 'localfile'
        },
      ],
    }
  ],

  preview: {
    select: {
      title: "title"
    },
    prepare: ({title}) => {
      return {
        title: title,
        media: <span style={{fontSize: '1.5rem'}}>📁</span>
      }
    }
  },
};
