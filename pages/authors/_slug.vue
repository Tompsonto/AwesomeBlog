<template>
<section class="text-gray-600 body-font">
  <div class="container px-5  mx-auto mt-10 flex flex-col">
    <div class=" mx-auto">
    
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/4 flex items-center justify-center m-auto align-middle ">
         
          <img class="object-cover text-center" :src="author.picture.url" alt="blog" >
         
        
        </div>
        <div class="sm:w-3/4 sm:pl-8 sm:py-8    sm:mt-0 text-center sm:text-left">
      
                  <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-2 text-gray-900 text-5xl">{{author.name}}</h2>
            <p>{{author.title}}</p>
          </div>
          <p class="leading-relaxed text-base mb-2 mt-2 text-justify">{{author.biography}}</p>
       
        </div>
      </div>
    </div>
  </div>
   <div class=" justify-start align-center flex flex-col mt-10" v-for="post in author.posts" :key="post.slug" >
     <NuxtLink  :to="{ name: 'posts-slug', params:  { slug: post.slug }}">		
       <div class="flex flex-col items-center justify-center max-w-sm mx-auto">
        <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"  v-bind:style="{ 'background-image': 'url('+ post.coverImage.url + ')' }"></div>

        <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 class="py-4 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{{post.title}}</h3>
      
        </div>
    </div>
     </NuxtLink>
   </div>
</section>
</template>

<script>
import { gql } from 'graphql-request'

export default {
  async asyncData({ $graphcms, params }) {
    const { author } = await $graphcms.request(
      gql`
        query GetAuthor($slug: String) {
          author(where: { slug: $slug }) {
            title
           biography
      picture{
        url
      }
      name
      slug
      posts{
        slug
        title
        coverImage{
          url
      	}
        content{
          markdown
        }
    }
          }
        }
      `,
      { slug: params.slug }
    )

    return { author }
  },

 // head() {
 //   return { title: this.author?.title }
 // },


}
</script>
