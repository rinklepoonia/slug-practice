"use client";
import { BLOG_POST_DETAILS } from "@/utils/helper";
import Image from "next/image";
import { usePathname } from "next/navigation";
const GuidanceBlog= () => {
   
    return (
        <div>
            {BLOG_POST_DETAILS.map((post, index) => (
                <div key={index} className="blog-post">
                    <h1>{post.title}</h1>
                    <p>{post.date}</p>
                    <img src={post.titleimg} alt={`${post.title} image`} />
                    <div className="content">
                        {post.content.map((item, contentIndex) => (
                            <div key={contentIndex} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default GuidanceBlog;





