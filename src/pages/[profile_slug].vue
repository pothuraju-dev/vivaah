<script setup lang="ts">
import Profile from '@/components/Vivaah/Profile.vue';
const { profile_slug } = useRoute('/[profile_slug]').params

</script>


<template>
  <Profile :profileSlug="profile_slug" />
</template>
