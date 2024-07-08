'use client';
import { useRouter } from 'next/navigation';

function AboutPage() {
  const router = useRouter();
  return (
    <section>
      <h1>About</h1>
      <p>
        est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
        dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut
        reiciendis qui aperiam non debitis possimus qui neque nisi nulla
      </p>

      <button
        onClick={() => {
          router.push('/');
        }}
      >
        Click
      </button>
    </section>
  );
}

export default AboutPage;
