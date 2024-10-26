<script setup>
const route = useRoute();
const name = route.params.id;
const id = route.params.id.match(/\d+/)[0];
console.log(id, name);

const { addVisitedComic } = useVisitedComics();
</script>

<template>
  <div>
    <!-- <BreadCumb :item="breadcrum" /> -->
    <p>{{ route.params.id }}</p>
    <p>{{ route.params.chapter }}</p>
    <p>hãy duy chuyển addVisitedComic vào đây!</p>
  </div>
</template>
