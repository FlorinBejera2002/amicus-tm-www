// import React from 'react';
// import BlogPost from '../../components/socials';

// const URL: string = "https://your_website_url";

// const fetchBlogs = async (): Promise<{
//   title: string
//   content: string
// }> => {
//   const data = await fetch('http://your_api_url/posts');
//   return data;
// }

// const BlogPage = async () => {
//   const posts = await fetchBlogs();

//   return { posts && posts.map((post, idx) => {
//     const url = `${URL}/posts/${post.slug}`;

//     return <BlogPost
//              key={idx}
//              url={url}
//              title={post.title}
//              content={post.content}
//            />
//     });
//   };
// };

// export default BlogPage;
