<script setup lang="ts">
import Profile from '@/components/Vivaah/Profile.vue';
const { slug } = useRoute('/profile/[slug]').params


</script>


<template>
  <Profile :profileSlug="slug" />
</template>
