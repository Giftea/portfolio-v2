import React from "react";
import Blog from "../components/Blog/Blog";
import data from "../data.json";

const BlogPage = () => {
  const { blogData } = data;

  return (
    <div>
      <Blog data={blogData} isHome={false} />
    </div>
  );
};

export default BlogPage;
