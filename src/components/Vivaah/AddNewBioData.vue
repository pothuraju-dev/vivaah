<template>
  <Sheet v-model:open="sheetOpen">
    <SheetContent class="overflow-auto">
      <SheetHeader>
        <SheetTitle>Create new task</SheetTitle>
      </SheetHeader>
      <FormKit type="form" @submit="createBioData" submit-label="Create Profile" :config="{
        validationVisibility: 'submit'
      }">
        <FormKit type="text" name="full_name" id="full-name" label="Full Name" placeholder="Sri Ram Kumar"
          validation="required|length:1,255" />

        <FormKit type="date" name="date_of_birth" value="1999-01-01" label="Birth Date" help="Enter your birth day"
          validation="required|date_before:2010-01-01" validation-visibility="live" />

        <FormKit type="time" name="time_of_birth" label="Birth Time" value="23:15" help="What time will go home today?"
          validation="required" />

        <FormKit type="text" name="place_of_birth" label="Place of Birth" id="place_of_birth" />

        <FormKit type="text" name="height" label="Height" id="height" validation="required" />

        <FormKit type="text" name="devak_gotra" label="Gotram" id="gotram" validation="required" />

        <FormKit type="text" name="caste_subcaste" label="Caste/Subcaste" id="caste-subcaste" validation="required" />

        <FormKit type="text" name="occupation" label="Occupation" id="occupation" validation="required" />

        <FormKit type="select" label="Gender" name="gender" validation="required" id="gender" :options="[
          'Male',
          'Female',
        ]" />

        <FormKit type="text" name="rashi" label="Rashi" id="rashi" />

        <FormKit type="text" name="nakshatram" label="Nakshatram" id="nakshatram" />

        <FormKit type="text" name="color" label="Color" id="Color" />

        <FormKit type="text" name="salary" label="Salary in lakhs" id="salary" />

        <FormKit type="text" name="native_place" label="Native Place" id="native_place" />

        <FormKit type="text" name="father_name" label="Father Name" id="father_name" />

        <FormKit type="text" name="mother_name" label="Mother Name" id="mother_name" />

        <FormKit type="text" name="sibling_details" label="Sibling Details" id="sibling_details" />

        <FormKit type="text" name="education_details" label="Education Details" id="education_details" />

        <FormKit type="text" name="documents" label="Documents" id="documents" />

      </FormKit>
    </SheetContent>
  </Sheet>
</template>
<script setup lang="ts">
import type { CreateBioData } from "@/types/CreateBioData"
import { creatBioDataQuery } from "@/utils/supaQueries";
const { profile } = storeToRefs(useAuthStore())

const sheetOpen = defineModel<boolean>()

const createBioData = async (formData: CreateBioData) => {
  const bioData = {
    ...formData,
    slug: formData.full_name.toLowerCase().split(" ").join("-"),
    documents: Array.isArray(formData.documents) ? formData.documents : formData.documents.split(","),
    user_id: profile.value!.id
  }

  const { error } = await creatBioDataQuery(bioData)

  if (error) {
    console.log(error)
  }

  sheetOpen.value = false
}
</script>
