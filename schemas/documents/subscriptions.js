import React from 'react'
import { MdSubscriptions } from 'react-icons/md'

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
      title0: 'title',
      date0: 'start_date',
      status: 'status'
    },
    prepare: ({title0, date0, status}) => {
      let isDatePass = "Today Date is greater than Date One."
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
        isDatePass,
        subtitle: `${status}, Subscribed on  ${date0}`,
        media: <span style={{fontSize: '1.5rem'}}>
                  {status ? EMOJIS[status] : '🎫'}
                </span>
      }
    }
  }
};


function compareDate(dateString) {    
  
  return "Today Date is greater than Date One.";
  // var todayDate = new Date(); //Today Date    
  // var dateOne = new Date(dateString);    
  // if (todayDate > dateOne) {    
  //      return "Today Date is greater than Date One.";    
  //  }else {    
  //      return "Today Date is greater than Date One.";    
  //  }    
}