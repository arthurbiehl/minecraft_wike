<template>



  <input type="text" name="Pesqusie" id="pesquisar" @input="onSearch" placeholder="   Pesquise um item">

  <div class="items_tudo">
    <div class="cardItems" v-for="item in blocks" :key="item.id"
      :style="{ display: isVisible(item) ? 'flex' : 'none' }">
      <div class="conteiner_items">
        <div class="items_img">
          <img :src="item.image" alt="">
        </div>
        <div id="items_sobre">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const store = useMine();
const { blocks } = storeToRefs(store);

onMounted(() => {
  store.getBlocks();
});

const searchQuery = ref('');

const onSearch = () => {
  searchQuery.value = document.querySelector("#pesquisar").value;
};

const isVisible = (item) => {
  const filter = searchQuery.value.toUpperCase();
  return item.name.toUpperCase().includes(filter);
};
</script>

<style>
input {
  width: 50%;
  height: 50px;
  margin: 10px;
  border: 5px;
  border-color: black;
  border-style: ridge;
  border-radius: 10px
}

.items_tudo {
  width: 1320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.cardItems {
  width: 300px;
  height: 90px;
  display: flex;
  margin: 10px;
  justify-content: left;
  align-items: center;
}

.conteiner_items {
  display: flex;
  justify-content: left;
  align-items: center;
}

#items_sobre {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: auto;
  height: 80px;
  padding-right: 10px;
  box-shadow: 0px 0px 3px black;
}

#items_sobre h2 {
  font-size: 16px;
  color: rgb(75, 75, 75);
  margin-left: 10px;
}

#items_sobre p {
  font-size: 9px;
  margin-left: 10px;
}

.items_img {
  width: auto;
  height: 100px;
  display: flex;
  background-color: rgba(87, 87, 87, 0.897);
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.items_img img {
  width: 80px;
  height: 80px;
}
</style>