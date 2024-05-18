<script setup>
import Header from "./components/Header.vue";
import DUMMY_DATA from "./data.json";

</script>

<template>
  <Header />
  <main class="bg-light-rayish-cyan--background py-10">
    <section
      class="container p-2 mx-auto w-[80%]"
      v-for="job in DUMMY_DATA"
      :key="job.id"
    >
      <section
        class="flex justify-between items-center bg-white rounded-md px-10 py-5 shadow-lg shadow-dark-grayish-cyan/10"
      >
        <div class="flex gap-x-5 items-center">
          <img :src="job.logo" :alt="job.company" class="h-20" />
          <div class="flex flex-col gap-y-0.5">
            <h1 class="font-bold text-lg text-desaturated-dark-cyan">
              {{ job.company }}
            </h1>
            <h2 class="font-bold text-lg">{{ job.position }}</h2>
            <ul class="flex gap-2 text-dark-grayish-cyan items-center">
              <li>{{ job.postedAt }}</li>
              <span class="w-1 h-1 bg-dark-grayish-cyan rounded-full" />
              <li>{{ job.contract }}</li>
              <span class="w-1 h-1 bg-dark-grayish-cyan rounded-full" />
              <li>{{ job.location }}</li>
            </ul>
          </div>
        </div>
        <div class="flex text-sm gap-x-5 text-desaturated-dark-cyan font-semibold">
          <p class="bg-light-rayish-cyan--background py-0.5 px-3">{{ job.role }}</p>
          <p class="bg-light-rayish-cyan--background py-0.5 px-3">{{ job.level }}</p>
          <ul
            v-for="language in job.languages"
            :key="language"
            class="bg-light-rayish-cyan--background py-0.5 px-3"
          >
            <li>{{ language }}</li>
          </ul>
        </div>
      </section>
      <!-- <div v-for="item in items" :key="item.id">
        <section>
          <img src="{{item.logo}}" alt="" />
          <div></div>
        </section>
      </div> -->
    </section>
  </main>
</template>
