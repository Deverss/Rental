import React, { useState, useEffect } from 'react';
import { getBlogs } from '../../Api/Blog';
import Img1 from '../../images/BlognPost-1.jpg';
import Img2 from '../../images/BlognPost-2.jpg';
import Img3 from '../../images/BlognPost-3.jpg';
import Img4 from '../../images/BlognPost-4.jpg';
import Img5 from '../../images/BlognPost-5.jpg';
import Img6 from '../../images/BlognPost-6.jpg';
import Img7 from '../../images/BlognPost-7.jpg';
import Img1news from '../../images/News-1.jpg';
import Img2news from '../../images/News-2.jpg';
import Img3news from '../../images/News-3.jpg';
import Img4news from '../../images/News-4.jpg';
import Img5news from '../../images/News-5.jpg';
import Img6news from '../../images/News-6.jpg';
import Ava from '../../images/Ava.jpg';
import {
    BlogSection,
    BlogText,
    BlogTitle,
    BlogDesc,
    // Feature Post
    FeaturePost,
    FeatureImg,
    FeatureDesc,
    FeatureH2,
    FeatureP,
    // Author
    Author,
    AuthorAva,
    AuthorName,
    TimeUpload,
    AuthorText,
    //Posts
    PostCard,
    Post,
    PostImg,
    PostTitle,
    PostDesc,
    // News update
    NewsNUpdateSections,
    NewsNUpdate,
    NewsNUpdateText,
    NewsTextH2,
    NewsTextP,
    NewsNUpdateBtn,
    NewsNUpdatePost,
    NewsNUpdateBtnLink,
} from './BlogElements'

const HighlightBlog = (item) => (
    <FeaturePost>
        <FeatureImg src={item.Image} />
        <FeatureDesc>
            <FeatureH2>{item.title}</FeatureH2>
            <FeatureP>{item.description}
            </FeatureP>
            <Author>
                <AuthorAva src={item.image} />
                <AuthorText>
                    <AuthorName>{item.name}</AuthorName>
                    <TimeUpload>30 mins ago</TimeUpload>
                </AuthorText>
            </Author>
        </FeatureDesc>
    </FeaturePost>
);
const BlogCard = (item) => (
    <Post>
        <PostImg src={item.Image} />
        <PostTitle>{item.title}</PostTitle>
        <PostDesc>{item.description}
        </PostDesc>
        <Author>
            <AuthorAva src={item.image} />
            <AuthorText>
                <AuthorName>{item.name}</AuthorName>
                <TimeUpload>30 mins ago</TimeUpload>
            </AuthorText>
        </Author>
    </Post>
);
const BlogsAndPosts = () => {
    const [blogs, setBlogs] = useState(null);
    useEffect(() => {
        getBlogs(setBlogs)
    }, [])
    return (
        <BlogSection to="blog">
            <BlogText>
                <BlogTitle>Blogs and Posts</BlogTitle>
                <BlogDesc>Let’s get some tips when join in our platform</BlogDesc>
            </BlogText>
            
            {blogs && HighlightBlog(blogs[0])}

            <PostCard>
                {blogs && blogs.map(item => BlogCard(item))}
            </PostCard>
            {/* News and update */}
            <NewsNUpdateSections>
                <NewsNUpdate>
                    <NewsNUpdateText>
                        <NewsTextH2>News and update</NewsTextH2>
                        <NewsTextP>Latest release, features, and news about Rental</NewsTextP>
                    </NewsNUpdateText>
                    <NewsNUpdateBtn>
                        <NewsNUpdateBtnLink to="/">Browse all</NewsNUpdateBtnLink>
                    </NewsNUpdateBtn>
                </NewsNUpdate>
                <NewsNUpdatePost>

                    <Post>
                        <PostImg src={Img1news} />
                        <PostTitle>The standard Lorem Ipsum passage dolor sit anet ?</PostTitle>
                        <PostDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </PostDesc>
                        <Author>
                            <AuthorAva src={Ava} />
                            <AuthorText>
                                <AuthorName>Mike TyleXon</AuthorName>
                                <TimeUpload>30 mins ago</TimeUpload>
                            </AuthorText>
                        </Author>
                    </Post>

                    <Post>
                        <PostImg src={Img2news} />
                        <PostTitle>The standard Lorem Ipsum passage dolor sit anet ?</PostTitle>
                        <PostDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </PostDesc>
                        <Author>
                            <AuthorAva src={Ava} />
                            <AuthorText>
                                <AuthorName>Mike TyleXon</AuthorName>
                                <TimeUpload>30 mins ago</TimeUpload>
                            </AuthorText>
                        </Author>
                    </Post>

                    <Post>
                        <PostImg src={Img3news} />
                        <PostTitle>The standard Lorem Ipsum passage dolor sit anet ?</PostTitle>
                        <PostDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </PostDesc>
                        <Author>
                            <AuthorAva src={Ava} />
                            <AuthorText>
                                <AuthorName>Mike TyleXon</AuthorName>
                                <TimeUpload>30 mins ago</TimeUpload>
                            </AuthorText>
                        </Author>
                    </Post>

                    <Post>
                        <PostImg src={Img4news} />
                        <PostTitle>The standard Lorem Ipsum passage dolor sit anet ?</PostTitle>
                        <PostDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </PostDesc>
                        <Author>
                            <AuthorAva src={Ava} />
                            <AuthorText>
                                <AuthorName>Mike TyleXon</AuthorName>
                                <TimeUpload>30 mins ago</TimeUpload>
                            </AuthorText>
                        </Author>
                    </Post>

                    <Post>
                        <PostImg src={Img5news} />
                        <PostTitle>The standard Lorem Ipsum passage dolor sit anet ?</PostTitle>
                        <PostDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </PostDesc>
                        <Author>
                            <AuthorAva src={Ava} />
                            <AuthorText>
                                <AuthorName>Mike TyleXon</AuthorName>
                                <TimeUpload>30 mins ago</TimeUpload>
                            </AuthorText>
                        </Author>
                    </Post>

                    <Post>
                        <PostImg src={Img6news} />
                        <PostTitle>The standard Lorem Ipsum passage dolor sit anet ?</PostTitle>
                        <PostDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </PostDesc>
                        <Author>
                            <AuthorAva src={Ava} />
                            <AuthorText>
                                <AuthorName>Mike TyleXon</AuthorName>
                                <TimeUpload>30 mins ago</TimeUpload>
                            </AuthorText>
                        </Author>
                    </Post>



                </NewsNUpdatePost>
            </NewsNUpdateSections>
        </BlogSection>
    )
}

export default BlogsAndPosts
