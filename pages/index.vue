<template>
<section class="text-gray-600 body-font" >
  <Hero/>
  <div class="container relative z-101  py-20 mx-auto">



    <div class="flex flex-wrap ">
      <div class=" md:w-1/3" v-for="post in filteredList" :key="post.slug">
        <ArticleThumb :feed="post"/>
      </div>
    </div>

  </div>
</section>
</template>

<script>
import { gql } from 'graphql-request'

export default {
  data() {
    return {
      
 };
},
  async asyncData({ $graphcms }) {
    return await $graphcms.request(
      gql`
        {
          posts {
            title
            slug
            categories{
              title
            }
            coverImage{
              url
            }
            excerpt
            author{
              id
              name
              picture{
                url
              }
            }
          }
        }
      `
    )
  },

  head() {
    return { title: 'Blog' }
  },

  computed: {
  filteredList() {
    return this.posts.filter(post => {
    return post.title.toLowerCase().includes(this.$store.state.search.toLowerCase());
    });
  }
} 
}
</script>

