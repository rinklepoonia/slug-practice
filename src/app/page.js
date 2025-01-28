import Blog from "@/components/Blog";
import BlogCards from "@/components/BlogCards";
import AllBlogPost from "@/components/BlogCards";
import Cards from "@/components/Cards";
import GuidanceBlog from "@/components/GuidanceBlog";


export default function Home() {
  return (
    <>
      <GuidanceBlog/>
      <BlogCards />
      <Cards />
      
    </>
  );
}
