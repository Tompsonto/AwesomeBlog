<template>

  <nav class="bg-white  dark:bg-gray-800 relative z-50">
        <div class="container  pt-5 mx-auto md:flex md:justify-between md:items-baseline">
            <div class="flex items-baseline justify-between">
                <div>
                   
                    	<NuxtLink  to="/" tag="a" class="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300">AwesomeBlog</NuxtLink>
                </div>
                
                <!-- Mobile menu button -->
                <div class="flex md:hidden" @click="isActive = !isActive">
                    <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div class="items-baseline md:flex md:relative absolute bg-white ms:w-full inset-x-0 pl-8 pt-2" :class="{ 'block ' : isActive , 'hidden ' : !isActive}">
                <div class="flex flex-col md:flex-row md:mx-6">
                    <!--<a class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0" href="#" v-for="category in categories" :key="category.index">{{category.category_title}}</a>
                  -->
                  
                </div>

         <div class="flex flex-col md:flex-row items-baseline mt-4 md:mt-0">
             	<NuxtLink to="/About" tag="a" class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">About</NuxtLink>
             	<NuxtLink to="/Creators" tag="a" class="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0">Creators</NuxtLink>
           
                     
        </div>
            <div class="relative mb-5">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg class="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </span>
        <input type="text" v-model="searchValue" @keyup.enter="upSearch" class="w-full py-1 pl-10 pr-3 text-gray-700 bg-white border border-gray-600 rounded-md dark:bg-gray-800 dark:text-gray-600 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Search">
    </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
 
  data() {
    return {
    isActive: false,
    searchValue: ''
    }
  },
  methods:{
      upSearch(){
            this.$store.commit('searchPass', this.searchValue )
      }
  }



}
</script>
