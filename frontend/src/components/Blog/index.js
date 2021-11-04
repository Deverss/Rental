import React from 'react';
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
    //Posts
    PostCard,
    Post,
    PostImg,
    PostTitle,
    PostDesc,
} from './BlogElements'

const BlogsAndPosts = () => {
    return (
        <BlogSection>
            <BlogText>
                <BlogTitle>Blog and Posts</BlogTitle>
                <BlogDesc>Let’s get some tip when join in our platform</BlogDesc>
            </BlogText>
            <FeaturePost>
                <FeatureImg />
                <FeatureDesc>
                    <FeatureH2>The standard Lorem Ipsum passage</FeatureH2>
                    <FeatureP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </FeatureP>
                    <Author>
                        <AuthorAva />
                        <AuthorName>Mike TyleXon</AuthorName>
                        <TimeUpload>30 mins ago</TimeUpload>
                    </Author>
                </FeatureDesc>
            </FeaturePost>
            <PostCard>
                <Post>
                    <PostImg />
                    <PostTitle>The standard Lorem Ipsum passage dolor sit anet ?</PostTitle>
                    <PostDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </PostDesc>
                    <Author>
                        <AuthorAva />
                        <AuthorName>Mike TyleXon</AuthorName>
                        <TimeUpload>30 mins ago</TimeUpload>
                    </Author>
                </Post>
            </PostCard>
        </BlogSection>
    )
}

export default BlogsAndPosts
