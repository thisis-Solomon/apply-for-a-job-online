<template>
  <div class="relative container p-2 mx-auto w-[80%]">
    <Card :job="job">
      <JobHeader :job="job" />
      <div
        class="flex text-sm gap-x-5 text-desaturated-dark-cyan font-semibold"
      >
        <JobTag
          v-for="tag in [job.role, job.level, ...job.languages]"
          :key="tag"
          :tag="tag"
        />
      </div>
    </Card>

    <Card :job="job" class="flex-col">
      <article class="whitespace-pre-wrap mb-10">
        {{ description }}
      </article>
      <button class="bg-sky-500 py-3 px-8 rounded-md text-lg font-semibold ">Apply</button>
    </Card>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import JobHeader from "../components/JobHeader.vue";
import JobTag from "../components/JobTag.vue";
import Card from "../components/shared/Card.vue";
import DUMMY_DATA from "../data.json";

const id = ref(1);
const jobs = ref(DUMMY_DATA);

const job = computed(() => {
  return jobs.value.find((job) => job.id === id.value);
});

const description = ref(`Description

We are looking for a Full Stack Web Developer to join our team in building a game-changing point of sale system. A point of sale (POS), or point of purchase, is where you ring up customers. When customers check out online, walk up to our counter, or pick out an item from our stand or booth, they’re at our point of sale. It’s basically a system which includes both the hardware and software that enables businesses to make sales. You’ll be part of our young and energetic team that’s responsible for the full software development life cycle, from conception to
deployment. As a Full Stack Web Developer, you should be knowledgeable about PHP, Javascript and SQL.

Roles & Responsibilities

Participating in the design and creation of scalable software
Writing clean, functional code on the front- and back-end
Testing and fixing bugs or other coding issues Responsibilities
Work with development teams and product managers to ideate software solutions
Design client-side and server-side architecture
Build the front-end of applications through appealing visual design
Develop and manage well-functioning databases and applications with MVC Framework
Write effective APIs
Test software to ensure responsiveness and efficiency
Troubleshoot, debug and upgrade software
Create security and data protection settings
Build features and applications with a mobile responsive design
Write technical documentation
Critical Skills (Must Have)

PHP
Codeigniter framework/Laravel Framework
Javascript
SQL
Experience building applications
On-site work
High integrity
Timely and punctual
Preferred Skills (Nice to have)

1-2 experience building real world applications which are still being used
Lives near Kalundu/East Park area
Loves to build software applications and has proof
Late 20s or Early 30s – Stable mindset with professional aspirations
Exposure to cloud applications – GCP/AWS/Azure
Can work long hours when necessary
Experience with mobile application development (preferably Flutter or React)`);
</script>
