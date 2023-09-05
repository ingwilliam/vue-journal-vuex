<template>
    <div
      class="entry-container mb-3 pointer p-2"   
      @click="$router.push({ name: 'entry', params: { id: 10 }})"   
    >
        <!-- Titilo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">LUNES</span>
            <span class="mx-1 fs-5">ENERO</span>
            <span class="mx-2 fw-light">2023</span>
        </div>
  
        <div class="entry-description">
            Tempor sit nostrud in ea minim esse mollit et ex id tempor veniam laboris. Proident exercitation consequat irure sunt. Adipisicing id aliquip et magna veniam anim dolore reprehenderit aliqua in. Reprehenderit ut dolor reprehenderit esse aute laboris mollit anim commodo sunt pariatur elit officia.
        </div>
    </div>
  </template>

<script>
export default {
    name:'EntryComponent'
}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}

</style>