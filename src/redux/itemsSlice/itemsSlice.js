import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemsApi = createApi({
  reducerPath: 'items',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63204bee9f82827dcf295a69.mockapi.io',
  }),
  tagTypes: ['item'],
  endpoints: builder => ({
    getItems: builder.query({
      query: () => '/contacts',
      providesTags: ['item'],
    }),
    addItem: builder.mutation({
      query: item => ({ url: '/contacts', method: 'POST', body: item }),
      invalidatesTags: ['item'],
    }),
    deleteItem: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['item'],
    }),
  }),
});

export const { useGetItemsQuery, useAddItemMutation, useDeleteItemMutation } =
  itemsApi;
