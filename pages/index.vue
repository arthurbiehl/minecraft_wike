<template>
  <main>
    
    <HeaderComponent></HeaderComponent>

    <CoverComponent></CoverComponent>
    
    
  </main>
  
</template>

<script setup>

  useHead({
    title: 'Minecraft Wike - Items'
  });

const store = useMine();
const { items } = storeToRefs(store);
const { blocks } = storeToRefs(store);

onMounted(() => {
    store.getItems();
    store.getBlocks();
})

</script>

<style scoped>

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>