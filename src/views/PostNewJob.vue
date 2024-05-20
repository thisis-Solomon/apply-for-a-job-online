<template>
  <ContainerLayout>
    <form @submit.prevent="handleSubmitFormData">
      <InputField
        label="Company name"
        placeholder="e.g - BrainStorm Innovation"
      />
      <InputField label="Position" placeholder="Fullstack Developer" />
      <InputField label="Role" placeholder="Fullstack" />
      <InputField label="Level" placeholder="Midweight" />
      <InputField
        label="Contract"
        placeholder="Part Time | Intern | Full Time"
      />
      <InputField label="Location" placeholder="Lusaka - In office" />
      <InputField
        label="Languages"
        placeholder="Javascript - React - Firebase"
      />
      <InputField label="Tools" placeholder="Figma - git - gitlab" />
      <InputField label="Close date" placeholder="28/03/1994" />
      <InputField
        type="textarea"
        :class="whitespace - pre - wrap"
        label="Job description"
        placeholder="- Company overview  -Job description -Role Responsibilities and Requirement"
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
import ContainerLayout from "../components/ContainerLayout.vue";
import InputField from "../components/shared/InputField.vue";

const handleSubmitFormData = () => {
  console.log("form data submited");
};
</script>

<!-- 
    "company": "Manage",
    "logo": "/images/manage.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"] -->
