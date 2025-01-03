<script setup lang="ts">
import AddNewBioData from '@/components/Vivaah/AddNewBioData.vue';

const { pageData } = storeToRefs(usePageStore())
const { profile_slug } = useRoute('/[profile_slug]').params

const profileSheet = ref(false)
</script>

<template>
  <div>
    <AddNewBioData v-model="profileSheet" />

    <div class="flex flex-col transition-[margin]">
      <TopNavbar v-if="!profile_slug" @addProfile="profileSheet = true" />

      <main class="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6">
        <div v-if="pageData.title" class="flex items-center">
          <h1 class="text-lg font-semibold md:text-2xl">
            {{ pageData.title }}
          </h1>
        </div>
        <slot />
      </main>
    </div>
  </div>
</template>
