<template>
  <div class="post">
    <router-link :to="{name:'Details' ,params:{id:post.id}}">
        <h3>{{ post.title }}</h3>
    </router-link>
 
    <p >{{ sinppet }}</p>
    <p  class="tag">
        <span v-for=" tag in post.tags" :key="tag"> #{{ tag }}</span>
    </p>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import getPost from "../composables/getPost"
export default {
  name: "singlePost",
  props: ["post"],
  setup(props) {
    const sinppet = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });

    

    return {
      sinppet,
    
    };
  },
};
</script>
<style> 
 .tag {
display: flex;
flex-direction: row;
justify-content: center;
 gap: 15px;
 color:#555;
 font-weight: bold;
 }
</style>
