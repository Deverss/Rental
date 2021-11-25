import React from 'react';
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
import Ava1 from '../../images/Ava.jpg';
import Ava2 from '../../images/Ava2.jpg';
import Ava3 from '../../images/Ava3.jpg';
import Ava4 from '../../images/Ava4.jpg';
import Ava from'../../images/Ava.jpg';
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

const BlogsAndPosts = () => {
    return (
        <BlogSection to="blog">
            <BlogText>
                <BlogTitle>Blogs and Posts</BlogTitle>
                <BlogDesc>Let’s get some tips when join in our platform</BlogDesc>
            </BlogText>
            <FeaturePost>
                <FeatureImg src={Img1}/>
                <FeatureDesc>
                    <FeatureH2 to="/blogpost">Houses with unique and luxurious architecture</FeatureH2>
                    <FeatureP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </FeatureP>
                    <Author>
                        <AuthorAva src={Ava1} />
                            <AuthorText>
                            <AuthorName>Stitch</AuthorName>
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
                        <AuthorAva src={Ava2} />
                            <AuthorText>
                            <AuthorName>Baymax</AuthorName>
                            <TimeUpload>30 mins ago</TimeUpload>
                        </AuthorText>
                    </Author>
                </Post>
            {/* </PostCard>
            <PostCard> */}
                <Post>
                    <PostImg src={Img3}/>
                    <PostTitle>The standard Lorem Ipsum passage dolor sit anet ?</PostTitle>
                    <PostDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </PostDesc>
                    <Author>
                        <AuthorAva src={Ava3} />
                            <AuthorText>
                            <AuthorName>Buzz Lightyear</AuthorName>
                            <TimeUpload>30 mins ago</TimeUpload>
                        </AuthorText>
                    </Author>
                </Post>
            {/* </PostCard>
            <PostCard> */}
                <Post>
                    <PostImg src={Img4}/>
                    <PostTitle>The standard Lorem Ipsum passage dolor sit anet ?</PostTitle>
                    <PostDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </PostDesc>
                    <Author>
                        <AuthorAva src={Ava4} />
                            <AuthorText>
                            <AuthorName>Groot</AuthorName>
                            <TimeUpload>30 mins ago</TimeUpload>
                        </AuthorText>
                    </Author>
                </Post>

                <Post>
                    <PostImg src={Img5}/>
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
                    <PostImg src={Img6}/>
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
                    <PostImg src={Img7}/>
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
                        <PostImg src={Img1news}/>
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
                        <PostImg src={Img2news}/>
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
                        <PostImg src={Img3news}/>
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
                        <PostImg src={Img4news}/>
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
                        <PostImg src={Img5news}/>
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
                        <PostImg src={Img6news}/>
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
