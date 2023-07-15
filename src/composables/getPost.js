import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!data.ok) {
        throw Error(" post not found or there is error");
      }
      const res = await data.json();
      post.value = res;
    } catch (err) {
      error.value = err;
      console.log(error.value);
    }
  };
  return {
    post,
    error,
    load,
  };
};




export default getPost;
