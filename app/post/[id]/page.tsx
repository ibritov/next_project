import PostPages from '../page';
import { Suspense } from 'react';
async function loadPost(id: int) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}
async function Page({ params }) {
  const post = await loadPost(params.id);
  return (
    <div>
      <h1>Hola {post.title}</h1>
      <p>{post.body}</p>
      <hr />
      <h3>Otros Post</h3>
      <Suspense fallback={<div>Cargando los posts</div>}>
        <PostPages />
      </Suspense>
    </div>
  );
}

export default Page;
