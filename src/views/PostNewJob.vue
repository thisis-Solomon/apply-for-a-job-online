<template>
  <ContainerLayout>
    <form @submit.prevent="handleSubmitFormData">
      <InputField
        v-model="company"
        label="Company name"
        placeholder="e.g - BrainStorm Innovation"
        type="text"
      />
      <InputField
        v-model="website"
        label="Company website"
        placeholder="e.g - www.brainstorminnovation.com/careers"
        type="text"
      />
      <InputField
        label="Company logo"
        placeholder="e.g - BrainStorm Innovation"
        type="file"
        @change="handleFileChange"
      />
      <InputField
        v-model="emailforappliction"
        label="Email for applications"
        placeholder="recruitementlead@brainstorminnovation.com"
        type="email"
      />
      <InputField
        v-model="salary"
        label="Salary range"
        placeholder="e.g - K6800 - K8200"
        type="number"
      />
      <InputField
        v-model="position"
        label="Position"
        placeholder="Fullstack Developer"
        type="text"
      />
      <InputField
        v-model="role"
        label="Role"
        placeholder="Fullstack"
        type="text"
      />
      <InputField
        v-model="level"
        label="Level"
        placeholder="Midweight"
        type="text"
      />
      <InputField
        v-model="contract"
        label="Contract"
        placeholder="Part Time | Intern | Full Time"
        type="text"
      />
      <InputField
        v-model="location"
        label="Location"
        placeholder="Lusaka - In office"
        type="text"
      />
      <InputField
        v-model="languages"
        label="Languages"
        placeholder="Javascript, React, Firebase"
        type="text"
      />
      <InputField
        v-model="tools"
        label="Tools"
        placeholder="Figma, git, gitlab"
        type="text"
      />
      <InputField
        v-model="closeDate"
        label="Close date"
        placeholder="1994/03/28"
        type="date"
      />
      <InputField
        v-model="jobDescription"
        class="whitespace-pre-wrap"
        label="Job description"
        placeholder="- Company overview  -Job description -Role Responsibilities and Requirement"
      />
      <button
        class="bg-desaturated-dark-cyan text-light-rayish-cyan--background font-bold mt-5 py-2 px-8 text-lg uppercase rounded-sm"
      >
        Post a job
      </button>
    </form>
  </ContainerLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { uploadFile } from "../auth/firebaseConfig";
import ContainerLayout from "../components/ContainerLayout.vue";
import InputField from "../components/shared/InputField.vue";
import { addNewJobPost } from "../controllers/data";
import { JobPost } from "../types/types";
import { serverTimestamp } from "firebase/firestore";
import { useRouter } from "vue-router";

const router = useRouter();
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
const website = ref("");
const company_logo = ref<File | null>(null);
const companyLogoURL = ref<string | null>(null);
const emailforappliction = ref("");
const salary = ref("");

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    company_logo.value = target.files[0];
  }
};

const handleSubmitFormData = async () => {
  if (company_logo.value) {
    companyLogoURL.value = await uploadFile(company_logo.value);
  }

  const jobData: JobPost = {
    company: company.value,
    featured: featured.value,
    position: position.value,
    role: role.value,
    level: level.value,
    contract: contract.value,
    location: location.value,
    languages: languages.value.split(",").map((lang: string) => lang.trim()),
    tools: tools.value.split(",").map((tool: string) => tool.trim()),
    closeDate: closeDate.value,
    jobDescription: jobDescription.value,
    website: website.value,
    company_logo: companyLogoURL.value || "",
    emailforappliction: emailforappliction.value,
    salary: +salary.value,
    createdAt: serverTimestamp(),
  };

  await addNewJobPost(jobData);
  router.push({ name: "Home" });
};
</script>
