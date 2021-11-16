import React from 'react'
import {
    PostSection,
    PostHeader,
    PostTitle,
    AuthorSection,
    Author,
    AuthorAva,
    AuthorText,
    AuthorName,
    TimeUpload,
    PostIcon,
    SharePost,
    LovePost,
    PostBody,
    PostImage,
    PostContent
}
    from './BlogPostElements'
    import Ava from '../../images/Ava.jpg';
    import Image2 from '../../images/BlognPost-1.jpg';
const BlogPost = () => {
    return (
        <PostSection>
            <PostHeader>
                <PostTitle>
                    10 reason that you should join in our platform in 2021
                </PostTitle>
                <AuthorSection>
                    <Author>
                        <AuthorAva src={Ava} />
                        <AuthorText>
                            <AuthorName>Mike TyleXon</AuthorName>
                            <TimeUpload>30 mins ago</TimeUpload>
                        </AuthorText>
                    </Author>
                    <PostIcon>
                        <SharePost />
                        <LovePost />
                    </PostIcon>
                </AuthorSection>
            </PostHeader>
            <PostBody>
                <PostImage src={Image2}/>
                <PostContent>
                    Almost twenty months after it was leaked by Ming-Chi Kuo, Apple finally launched the 14-inch MacBook Pro last week, along with its larger sibling the 16-inch MacBook Pro. I had planned to upgrade my 2016 13-inch MacBook Pro to what I thought would be a new standard for portable software development, but what we got was something altogether different, a pair of killer video-editing laptops. If you haven’t read AnandTech’s deep dive on the new MacBook Pros, here’s the most pertinent insight:
                </PostContent>
            </PostBody>
        </PostSection>
    )
}

export default BlogPost
