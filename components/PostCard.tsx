'use client';
//RCC REACT CLIENT COMPONENT
import Link from 'next/link';

function PostCard({ post }) {
  return (
    <div>
      <Link href={`/post/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>

      <p>{post.body}</p>
      <button
        onClick={() => {
          alert('hola');
        }}
      >
        Click
      </button>
    </div>
  );
}

export default PostCard;
