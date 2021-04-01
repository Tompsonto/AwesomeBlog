<template>

 <NuxtLink   :to="{ name: 'posts-slug', params: { slug: feed.slug } }" tag="a" class="text-indigo-500 inline-flex m-5 items-center md:mb-2 lg:mb-0">
         <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img  class="object-cover w-full h-64" :src="feed.coverImage.url" alt="Article">

        <div class="p-6">
            <div>
                <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400" v-for="category in feed.categories" :key="category.index">{{category.title}} </span>
                <a href="#" class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">{{feed.title}}</a>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{feed.excerpt}}</p>
            </div>

           <div class="mt-4">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <img class="object-cover h-10 w-10 rounded-full" :src="feed.author.picture.url" alt="Avatar">
                        <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200">{{feed.author.name}}</a>
                    </div>
                    <span class="mx-1 text-xs text-gray-600 dark:text-gray-300"></span>
                </div>
            </div>
        </div>
    </div>
     </NuxtLink>
</template>

<script>

export default {
  props:['feed'],


}
</script>
