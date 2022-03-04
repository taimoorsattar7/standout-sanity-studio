import { MdEmojiEmotions } from 'react-icons/md'

export default {
  name: "customer",
  title: "Customer",
  type: "document",
  icon: MdEmojiEmotions,
  fields: [
    {
      name: "name",
      title: "Customer Name",
      type: "string",
    },
    {
      name: "email",
      title: "Customer Email",
      type: "string",
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ),
    },
    {
      title: "Password",
      name: "password",
      type: "string",
    },
    {
      title: "customer ID",
      name: "cusid",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
    },
  },
};
