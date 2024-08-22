import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


async function fetchBlog( id: number) {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`, // Use backticks here
      },
    };
  
    try {
      const res = await fetch(`http://127.0.0.1:1337/api/blogs/${id}?populate=*`, options);
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

const page = async ({params}: any) => {
    const blog = await fetchBlog(params.id)
    console.log(blog);

    const imageurl = "http://127.0.0.1:1337" + blog.data.attributes.img.data.attributes.url;

  return (
    <div className='max-w-3xl mx-auto p-4 '>
        <Link href="/"> {"< Back"}
        </Link>
        <div className='relative w-full h-96 overflow-hidden rounded-lg mt-5'>
            <Image priority fill src={imageurl} alt={''} />
        </div>
        <div className='mt-4'>
            <h1 className='text-3xl font-semibold '>{blog.data.attributes.Title}</h1>
            <p className='text-gray-600 mt-2'>
                {blog.data.attributes.Description}
            </p>
            <div className='mt-4 flex items-center text-gray-400'>
            <span className='text-sm'>
                Published on {" "}
                {new Date(blog.data.attributes.publishedAt).toLocaleString()}
            </span>
            </div>
        </div>
    </div>
  )
}

export default page