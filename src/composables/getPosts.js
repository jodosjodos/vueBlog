import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!data.ok) {
        throw Error(" no data available");
      }
      const res = await data.json();

      posts.value = res;
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return {posts,error,load}
};



export default getPosts
