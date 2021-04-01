<template>
  <div class="lg:container mx-auto bg-top bg-no-repeat bg-cover mt-5  "  > 
    <div class=" w-full h-full bg-gray-900 bg-opacity-50">
      <div class="items-center lg:px-12 px-6 py-32  md:flex ">
        <div class="w-full md:w-1/2">
          <div class="max-w-lg">
              <h1 class="text-2xl font-semibold text-white uppercase dark:text-white md:text-3xl"></h1>
              <p class="mt-2 text-white dark:text-white"></p>
              <button class="px-3 py-2 mt-4 text-sm font-medium text-white uppercase bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-request'

export default {
  async asyncData({ $graphcms }) {
    const { post } = await $graphcms.request(
      gql`
       query MyQuery {
        hero(where: {title: "Hero"}) {
        buttonTitle
          }
        }
      `,

    )

    return { post }
  },


}
</script>