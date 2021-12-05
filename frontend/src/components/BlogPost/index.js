import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';
import { getBlogById } from '../../Api/Blog'
import {
    Outer,OuterInner,SectionArticle, SectionArticleBody, ArticleCenter, ArticleHead,
    ArticleTitleH1, Image, ImagePost, ArticleWrap, Content, ContentTitleH3,
    ContentP, Action, ActionList, ActionItem, IconShare, IconLove, TitleLine
} from './BlogPostElements.js'
    // import Ava from '../../images/Ava.jpg';
    import Image2 from '../../images/BlognPost-1.jpg';
const BlogPost = () => {
    const param = useParams();
    const [blog, setBlog] = useState(null)
    useEffect(() => {
        getBlogById(param.id, setBlog)
    }, [])
    return (
        blog?<><Outer>
            <OuterInner>
                <SectionArticle>
                    <SectionArticleBody>
                        <ArticleCenter>
                            <ArticleHead>
                                <h1>
                                {blog.title}
                                </h1>
                            </ArticleHead>
                            <Image>
                                <ImagePost src={blog.Image} />
                            </Image>
                        </ArticleCenter>
                    </SectionArticleBody>

                    <ArticleWrap>
                        <ArticleCenter>
                            <Content dangerouslySetInnerHTML={{ __html: blog.content }}>
                                {/* <h3>Introduction</h3>
                                <p>For traders who love technical analysis, robust charting tools are essential. TradingView is one option for both amateur and experienced traders. It offers numerous trading and charting tools and also a free membership option. Let’s face it... not everyone has the money or need for a Bloomberg terminal subscription.    
                                </p>
                                <p>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native.    
                                </p>
                                <h3>What does Rental do?</h3>
                                <p>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native.    
                                </p>
                                <h3>Introduction</h3>
                                <p>For traders who love technical analysis, robust charting tools are essential. TradingView is one option for both amateur and experienced traders. It offers numerous trading and charting tools and also a free membership option. Let’s face it... not everyone has the money or need for a Bloomberg terminal subscription.    
                                </p>
                                <p>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native.    
                                </p> */}
                            </Content>
                            <Action>
                                <ActionList>
                                    <ActionItem>
                                        <IconShare />
                                    </ActionItem>
                                    <ActionItem>
                                        <IconLove />
                                    </ActionItem>
                                </ActionList>
                            </Action>
                        </ArticleCenter>
                    </ArticleWrap>
                </SectionArticle>
            </OuterInner>
        </Outer></>:<></>
    )
}

export default BlogPost
