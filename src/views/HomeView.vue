<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" v-if="showPosts" />
    </div>
    <div v-else>loading....</div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

import PostList from "@/components/PostList.vue";
import getPosts from "../composables/getPosts";
export default {
  name: "Home",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();
    const showPosts = ref(true);
    load();
    const handleClick = () => {
      return (showPosts.value = !showPosts.value);
    };
    return {
      posts,
      showPosts,
      handleClick,
      error,
    };
  },
};
</script>
