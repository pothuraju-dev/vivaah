<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const props = defineProps({
    profileSlug: {
        required: true,
        type: String
    }
})

const bioProfilesLoader = useBioProfilesStore()
const { bioProfile } = storeToRefs(bioProfilesLoader)
const { getBioProfile } = bioProfilesLoader

await getBioProfile(props.profileSlug)

const tableColumns = [{ key: "full_name", label: "Name" },
{ key: "date_of_birth", label: "Date of Birth" },
{ key: "time_of_birth", label: "Time of Birth" },
{ key: "place_of_birth", label: "Place of Birth" },
{ key: "rashi", label: "Rashi" },
{ key: "devak_gotra", label: "Gotram" },
{ key: "caste_subcaste", label: "Caste/Subcaste" },
{ key: "education_details", label: "Education" },
{ key: "height", label: "Height" },
{ key: "color", label: "Color" },
{ key: "occupation", label: "Occupation" },
{ key: "salary", label: "Salary" },
{ key: "native_place", label: "Native Place" },
{ key: "father_name", label: "Father" },
{ key: "contact_details", label: "Contact" },
]
</script>

<template>
    <div class="flex justify-between px-8 lg:flex-row flex-col-reverse items-center">
        <ul
            class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-8 border-x border-dashed border-zinc-300 dark:border-zinc-700">
            <li v-for="column in tableColumns" :key="column.key">
                <p class="text-base  text-zinc-500 dark:text-zinc-400 text-pretty"> {{ column.label }}</p>
                <h3 class="text-base  text-black dark:text-white block font-semibold"> {{ bioProfile[column.key] }}
                </h3>
            </li>
        </ul>
        <div>
            <Carousel class="relative w-full max-w-xs">
                <CarouselContent>
                    <CarouselItem v-for="(img, index) in bioProfile.documents" :key="index">
                        <Card class="h-full flex justify-center items-center">
                            <CardContent class="flex aspect-square items-center justify-center p-6">
                                <a :href="img" target="_blank">
                                    <img :src="img" class="cursor-pointer" />
                                </a>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious class="-left-4" />
                <CarouselNext class="-right-4" />
            </Carousel>

        </div>
    </div>
</template>

<style scoped>
th {
    @apply w-[100px];
}

h2 {
    @apply mb-4 text-lg font-semibold w-fit;
}

.table-container {
    @apply overflow-hidden overflow-y-auto rounded-md bg-slate-900 h-80;
}
</style>
