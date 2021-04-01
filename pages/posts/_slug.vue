<template>
<section class="text-gray-600  body-font ">
	<div class="bg-center bg-cover min-h-31 h-auto"   v-bind:style="{ 'background-image': 'url('+ post.coverImage.url + ')' }"> 
     
		 <div class="relative z-50 h-full min-h-31 px-10 flex justify-between flex-col items-stretch" >
		      <div>
            <h1 class="lg:text-8xl md:text-6xl text-5xl text-shadow-lg font-semibold w-full text-white dark:text-white pt-10 text-shadow-xl ">{{post.title}}</h1>
                <p class="pt-5 text-sm md:text-base font-normal text-white text-shadow-xl">Posted {{ formatDate(post.createdAt) }}</p>
                <p  >
                  <span  v-for="category in post.categories"  :key="category.index">{{category.title}}</span></p>
          </div>
				<div class="font-sans py-4">
					<p class="text-base md:text-sm text-green-500 font-bold">&lt; <a href="#" class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
					 @click="$router.go(-1)">BACK TO BLOG</a>
					</p>
				</div>
		</div>
    </div>


 	<div class="mx-auto relative z-100 bg-white p-10" >
		<div class=" px-4 py-10 md:px-6 text-xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">
				<div class="prose lg:prose-xl" style="margin:auto" v-html="$md.render(post.content.markdown)"></div>
		</div>

		<hr class="border-b-2 border-gray-400 mb-8 mx-4">

		<div class="flex items-center font-sans px-4 pb-10">
			<img class="w-20 h-20 rounded-full mr-4 object-cover object-center" :src="post.author.picture.url" alt="Avatar of Author">
			<div class="flex-1 px-2">
				<p class="text-base font-bold text-base md:text-xl leading-none mb-2 ">{{post.author.name}} </p>
				<p class="text-gray-600 text-xs md:text-base w-4/5">{{post.author.biography}}</p>
			</div>
			<div class="justify-end">
				<NuxtLink    :to="{ name: 'authors-slug', params: { slug: post.author.slug } }" tag="button" class="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">		
					Read More
				</NuxtLink> 
			</div>
		</div>

	</div>
</section>
</template>

<script>
import { gql } from 'graphql-request'

export default {
  async asyncData({ $graphcms, params }) {
    const { post } = await $graphcms.request(
      gql`
        query GetPost($slug: String) {
          post(where: { slug: $slug }) {
            title
            coverImage{
                url
            }
            content {
                markdown
            }
             categories {
                title
              }
            author{
                id
                name
                biography
                slug
            picture{
                url
            }
      
            }
            slug
            createdAt
            updatedAt
          }
        }
      `,
      { slug: params.slug }
    )

    return { post }
  },

  head() {
    return { title: this.post?.title }
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" }

      return new Intl.DateTimeFormat('default', options).format(new Date(date))
    },
  }
}
</script>