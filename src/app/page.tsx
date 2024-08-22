import Blogs from '@/components/Blogs'
import Categories from '@/components/Categories'


async function fetchCategories() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`, // Use backticks here
    },
  };

  try {
    const res = await fetch("http://127.0.0.1:1337/api/categories", options);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const response = await res.json();
    console.log(response); // Log response for debugging
    return response;
  } catch (err) {
    console.error("Fetch categories error:", err);
  }
}

async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`, // Use backticks here
    },
  };

  try {
    const res = await fetch("http://127.0.0.1:1337/api/blogs?populate=*", options);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const response = await res.json();
    console.log(response); // Log response for debugging
    return response;
  } catch (err) {
    console.error("Fetch Blogs error:", err);
  }
}

export default async function Home() {
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();
  return (
    <div>
      <Categories categories={categories} />
      <Blogs blogs={blogs}/>
    </div>
  )
}
