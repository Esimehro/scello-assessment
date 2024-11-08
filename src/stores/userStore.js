// src/stores/userStore.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [
      {
        id: 1,
        name: "Justin Septimus",
        email: "justin@gmail.com",
        userStatus: "Active",
        lastLogin: "14/APR/2020",
        paymentStatus: "Paid",
        paymentDate: "2/APR/2019",
        amount: 200,
        currency: "USD",
      },
      {
        id: 2,
        name: "Annika Rihl Madsen",
        email: "rihl@gmail.com",
        userStatus: "Active",
        lastLogin: "14/APR/2020",
        paymentStatus: "Overdue",
        paymentDate: "13/AUG/2021",
        amount: 300,
        currency: "USD",
        activity: [
          {
            date: "12/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "08/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "04/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "08/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "04/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
        ],
      },
      {
        id: 3,
        name: "Miracle Vaccaro",
        email: "miracle@gmail.com",
        userStatus: "Active",
        lastLogin: "14/APR/2020",
        paymentStatus: "Paid",
        paymentDate: "15/APR/2020",
        amount: 250,
        currency: "USD",
      },
      {
        id: 4,
        name: "Erin Levin",
        email: "erin@gmail.com",
        userStatus: "Inactive",
        lastLogin: "13/APR/2020",
        paymentStatus: "Unpaid",
        paymentDate: "15/APR/2020",
        amount: 100,
        currency: "USD",
        activity: [
          {
            date: "12/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "08/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "04/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
        ],
      },
      {
        id: 5,
        name: "Mira Harwitz",
        email: "mira@gmail.com",
        userStatus: "Active",
        lastLogin: "12/APR/2020",
        paymentStatus: "Paid",
        paymentDate: "31/NOV/2024",
        amount: 300,
        currency: "USD",
      },
      {
        id: 6,
        name: "Jaxson Sipheron",
        email: "jaxson@gmail.com",
        userStatus: "Active",
        lastLogin: "11/APR/2020",
        paymentStatus: "Overdue",
        paymentDate: "21/MAR/2022",
        amount: 320,
        currency: "USD",
        activity: [
          {
            date: "12/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "08/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "04/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "12/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "08/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "04/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
        ],
      },
      {
        id: 7,
        name: "Mira Levin",
        email: "levin@gmail.com",
        userStatus: "Inactive",
        lastLogin: "14/APR/2020",
        paymentStatus: "Paid",
        paymentDate: "14/0CT/2024",
        amount: 150,
        currency: "USD",
      },
      {
        id: 8,
        name: "Asher Prescott",
        email: "asher@gmail.com",
        userStatus: "Active",
        lastLogin: "14/APR/2020",
        paymentStatus: "Unpaid",
        paymentDate: "18/SEP/2023",
        amount: 370,
        currency: "USD",
        activity: [
          {
            date: "12/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "08/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "04/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
        ],
      },
      {
        id: 9,
        name: "Stella Kingsley",
        email: "stella@gmail.com",
        userStatus: "Inactive",
        lastLogin: "13/APR/2020",
        paymentStatus: "Paid",
        paymentDate: "11/DEC/2020",
        amount: 350,
        currency: "USD",
      },
      {
        id: 10,
        name: "Carter Whitmore",
        email: "carter@gmail.com",
        userStatus: "Active",
        lastLogin: "14/APR/2020",
        paymentStatus: "Paid",
        paymentDate: "15/MAY/2024",
        amount: 155,
        currency: "USD",
      },
      {
        id: 11,
        name: "Ivy Sinclair",
        email: "ivy@gmail.com",
        userStatus: "Active",
        lastLogin: "14/APR/2020",
        paymentStatus: "Paid",
        paymentDate: "10/JUN/2023",
        amount: 400,
        currency: "USD",
      },
      {
        id: 12,
        name: "Felix Harrington",
        email: "felix@gmail.com",
        userStatus: "Inactive",
        lastLogin: "14/APR/2020",
        paymentStatus: "Overdue",
        paymentDate: "25/OCT/2012",
        amount: 225,
        currency: "USD",
        activity: [
          {
            date: "12/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "08/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "04/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
        ],
      },
      {
        id: 13,
        name: "Miles Kensington",
        email: "miles@gmail.com",
        userStatus: "Active",
        lastLogin: "14/APR/2020",
        paymentStatus: "Paid",
        paymentDate: "20/JUL/2010",
        amount: 200,
        currency: "USD",
      },
      {
        id: 14,
        name: "Isaac Langley",
        email: "isaac@gmail.com",
        userStatus: "Active",
        lastLogin: "14/APR/2020",
        paymentStatus: "Overdue",
        paymentDate: "17/AUG/2021",
        amount: 300,
        currency: "USD",
        activity: [
          {
            date: "12/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "08/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "04/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "08/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "04/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
        ],
      },
      {
        id: 15,
        name: "Grace Kim",
        email: "graceMAR@gmail.com",
        userStatus: "Active",
        lastLogin: "14/APR/2020",
        paymentStatus: "Paid",
        paymentDate: "8/MAR/2020",
        amount: 250,
        currency: "USD",
      },
      {
        id: 16,
        name: "Samuel Turner",
        email: "samuel@gmail.com",
        userStatus: "Inactive",
        lastLogin: "13/APR/2020",
        paymentStatus: "Unpaid",
        paymentDate: "2/AUG/2020",
        amount: 100,
        currency: "USD",
        activity: [
          {
            date: "12/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "08/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "04/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
        ],
      },
      {
        id: 17,
        name: "Noah Richardson",
        email: "noah@gmail.com",
        userStatus: "Active",
        lastLogin: "12/APR/2020",
        paymentStatus: "Paid",
        paymentDate: "31/DEC/2024",
        amount: 300,
        currency: "USD",
      },
      {
        id: 18,
        name: "Ava Patel",
        email: "ava@gmail.com",
        userStatus: "Active",
        lastLogin: "11/APR/2020",
        paymentStatus: "Overdue",
        paymentDate: "21/NOV/2022",
        amount: 320,
        currency: "USD",
        activity: [
          {
            date: "12/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "08/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "04/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "12/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "08/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "04/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
        ],
      },
      {
        id: 19,
        name: "Zoe Martinez",
        email: "zoe@gmail.com",
        userStatus: "Inactive",
        lastLogin: "14/APR/2020",
        paymentStatus: "Paid",
        paymentDate: "14/APR/2024",
        amount: 150,
        currency: "USD",
      },
      {
        id: 20,
        name: "Leo Harrison",
        email: "leo@gmail.com",
        userStatus: "Active",
        lastLogin: "14/APR/2020",
        paymentStatus: "Unpaid",
        paymentDate: "8/MAY/2023",
        amount: 370,
        currency: "USD",
        activity: [
          {
            date: "12/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "08/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "04/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
        ],
      },
      {
        id: 21,
        name: "Jonah Prescott",
        email: "jonah@gmail.com",
        userStatus: "Inactive",
        lastLogin: "13/APR/2020",
        paymentStatus: "Paid",
        paymentDate: "12/JUL/2020",
        amount: 350,
        currency: "USD",
      },
      {
        id: 22,
        name: "Mia Caldwell",
        email: "mia@gmail.com",
        userStatus: "Active",
        lastLogin: "14/APR/2020",
        paymentStatus: "Paid",
        paymentDate: "15/MAY/2021",
        amount: 155,
        currency: "USD",
      },
      {
        id: 23,
        name: "Elias Grayson",
        email: "elias@gmail.com",
        userStatus: "Active",
        lastLogin: "14/APR/2020",
        paymentStatus: "Paid",
        paymentDate: "4/JAN/2020",
        amount: 400,
        currency: "USD",
      },
      {
        id: 24,
        name: "Clara Hawthorne",
        email: "clara@gmail.com",
        userStatus: "Inactive",
        lastLogin: "14/APR/2020",
        paymentStatus: "Overdue",
        paymentDate: "15/FEB/2020",
        amount: 225,
        currency: "USD",
        activity: [
          {
            date: "12/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "08/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
          {
            date: "04/APR/2020",
            activity: "Lorem ipsum dolor sit amet...",
            detail: "Consectetur adipiscing elit...",
          },
        ],
      },
    ],
  }),
  getters: {
    totalAmount: (state) => {
      return state.users.reduce((sum, user) => sum + user.amount, 0);
    },
  },
});
