import React from 'react';
import Img1 from '../../images/BlognPost-1.jpg';
import Img2 from '../../images/BlognPost-2.jpg';
import Img3 from '../../images/BlognPost-3.jpg';
import Img4 from '../../images/BlognPost-4.jpg';
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
} from './BlogElements'

const BlogsAndPosts = () => {
    return (
        <BlogSection>
            <BlogText>
                <BlogTitle>Blog and Posts</BlogTitle>
                <BlogDesc>Let’s get some tip when join in our platform</BlogDesc>
            </BlogText>
            <FeaturePost>
                <FeatureImg src={Img1}/>
                <FeatureDesc>
                    <FeatureH2>The standard Lorem Ipsum passage</FeatureH2>
                    <FeatureP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </FeatureP>
                    <Author>
                        <AuthorAva src={Ava} />
                            <AuthorText>
                            <AuthorName>Mike TyleXon</AuthorName>
                            <TimeUpload>30 mins ago</TimeUpload>
                        </AuthorText>
                    </Author>
                </FeatureDesc>
            </FeaturePost>
            <PostCard>
                <Post>
                    <PostImg src={Img2}/>
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
            </PostCard>
            <PostCard>
                <Post>
                    <PostImg src={Img3}/>
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
            </PostCard>
            <PostCard>
                <Post>
                    <PostImg src={Img4}/>
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
            </PostCard>
        </BlogSection>
    )
}

export default BlogsAndPosts
