<template>
  <ContainerLayout>
    <form @submit.prevent="handleSubmitFormData">
      <InputField
        v-model="company"
        label="Company name"
        placeholder="e.g - BrainStorm Innovation"
      />
      <InputField
        v-model="position"
        label="Position"
        placeholder="Fullstack Developer"
      />
      <InputField v-model="role" label="Role" placeholder="Fullstack" />
      <InputField v-model="level" label="Level" placeholder="Midweight" />
      <InputField
        v-model="contract"
        label="Contract"
        placeholder="Part Time | Intern | Full Time"
      />
      <InputField
        v-model="location"
        label="Location"
        placeholder="Lusaka - In office"
      />
      <InputField
        v-model="languages"
        label="Languages"
        placeholder="Javascript - React - Firebase"
      />
      <InputField
        v-model="tools"
        label="Tools"
        placeholder="Figma - git - gitlab"
      />
      <InputField
        v-model="closeDate"
        label="Close date"
        placeholder="28/03/1994"
      />
      <InputField
        v-model="jobDescription"
         class="whitespace-pre-wrap"
        label="Job description"
        placeholder="- Company overview  -Job description -Role Responsibilities and Requirement"
      />
      <button
        class="bg-desaturated-dark-cyan text-light-rayish-cyan--background font-bold mt-5 py-2 px-8 text-lg uppercase rounded-lg"
      >
        Post a job
      </button>
    </form>
  </ContainerLayout>
</template>

<script setup>
import { ref } from "vue";
import ContainerLayout from "../components/ContainerLayout.vue";
import InputField from "../components/shared/InputField.vue";

const company = ref("");
const featured = ref(false);
const position = ref("");
const role = ref("");
const level = ref("");
const contract = ref("");
const location = ref("");
const languages = ref("");
const tools = ref("");
const closeDate = ref("");
const jobDescription = ref("");

const handleSubmitFormData = () => {
  const jobData = {
    company: company.value,
    featured: featured.value,
    position: position.value,
    role: role.value,
    level: level.value,
    contract: contract.value,
    location: location.value,
    languages: languages.value,
    tools: tools.value,
    closeDate: closeDate.value,
    jobDescription: jobDescription.value,
  };
  console.log("form data submitted", jobData);
};
</script>
