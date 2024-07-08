import PostCard from '@/components/PostCard';
async function loadPost() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return data;
}
//RSC REACT SERVER COMPONENT
async function PostPages() {
  const posts = await loadPost();
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostPages;
