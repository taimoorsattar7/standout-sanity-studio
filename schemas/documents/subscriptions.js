import React from 'react'
import { MdSubscriptions } from 'react-icons/md'

import { format } from 'date-fns'

export default {
  name: "subscriptions",
  title: "Subscriptions",
  type: "document",
  icon: MdSubscriptions,
  fields: [
    {
      name: "subID",
      title: "Subscription ID",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "customer",
      title: "customer",
      type: "reference",
      to: { type: "customer" },
    },
    {
      name: "price",
      title: "Price",
      type: "reference",
      to: { type: "price" },
    },
    {
      title: "Plan keyword",
      name: "plankey",
      type: "string",
    },
    {
      title: "Cancel at period end",
      name: "cancel_at_period_end",
      type: "boolean"
    },
    
    {
      title: "Canceled at",
      name: "canceled_at",
      type: "datetime"
    },
    {
      title: "Cancel at",
      name: "cancel_at",
      type: "datetime"
    },
    {
      title: "Live Mode",
      name: "livemode",
      type: "boolean"
    },
    {
      title: "Start date",
      name: "start_date",
      type: "datetime"
    },
    {
      title: "Status",
      name: "status",
      type: "string"
    }
  ],
  preview: {
    select: {
      title: 'title',
      start_date: 'start_date',
      status: 'status'
    },
    prepare: ({title, start_date, status}) => {
      let previewData = format(new Date(start_date), 'MMMM yyyy')
      const EMOJIS = {
        active: '✅',
        pending: '🎫',
        canceled: '🚫',
        incomplete: '😞',
        incomplete_expired: '⌛',
        trialing: '🌠',
        past_due: '👀',
        unpaid: '😶'
      }
      return {
        title,
        subtitle: `${status}, Subscribed on  ${previewData}`,
        media: <span style={{fontSize: '1.5rem'}}>
                  {status ? EMOJIS[status] : '🎫'}
                </span>
      }
    }
  }
};
