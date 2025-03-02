import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quranApi = createApi({
    reducerPath: 'quranApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.quran.com/api/v4/' }),
    endpoints: (builder) => ({
        getRandomAyah: builder.query({
            query: () => 'verses/random?translations=131&language=ar&words=false&fields=text_uthmani',
        }),
        getRandomRuku: builder.query({
            query: () => {
                const randomRuku = Math.floor(Math.random() * 558) + 1; // Random Ruku between 1 and 558
                return `verses/by_ruku/${randomRuku}?translations=131&language=ar&words=false&fields=text_uthmani`;
            },
        }),
    }),
});

export const { 
    useGetRandomAyahQuery, 
    useGetRandomRukuQuery 
} = quranApi;