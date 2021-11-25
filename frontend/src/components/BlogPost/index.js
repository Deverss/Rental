import React from 'react'
import {
    Outer,OuterInner,SectionArticle, SectionArticleBody, ArticleCenter, ArticleHead,
    ArticleTitleH1, Image, ImagePost, ArticleWrap, Content, ContentTitleH3,
    ContentP, Action, ActionList, ActionItem, IconShare, IconLove, TitleLine
} from './BlogPostElements.js'
    // import Ava from '../../images/Ava.jpg';
    import Image2 from '../../images/BlognPost-1.jpg';
const BlogPost = () => {
    return (
        <Outer>
            <OuterInner>
                <SectionArticle>
                    <SectionArticleBody>
                        <ArticleCenter>
                            <ArticleHead>
                                <ArticleTitleH1>
                                A beginner’s guide to using this platform
                                </ArticleTitleH1>
                            </ArticleHead>
                            <Image>
                                <ImagePost src={Image2} />
                            </Image>
                        </ArticleCenter>
                    </SectionArticleBody>

                    <ArticleWrap>
                        <ArticleCenter>
                            <Content>
                                <ContentTitleH3>Introduction</ContentTitleH3>
                                <TitleLine/>
                                <ContentP>For traders who love technical analysis, robust charting tools are essential. TradingView is one option for both amateur and experienced traders. It offers numerous trading and charting tools and also a free membership option. Let’s face it... not everyone has the money or need for a Bloomberg terminal subscription.    
                                </ContentP>
                                <ContentP>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native.    
                                </ContentP>
                                <ContentTitleH3>What does Rental do?</ContentTitleH3>
                                <TitleLine/>
                                <ContentP>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native.    
                                </ContentP>
                                <ContentTitleH3>Introduction</ContentTitleH3>
                                <TitleLine/>
                                <ContentP>For traders who love technical analysis, robust charting tools are essential. TradingView is one option for both amateur and experienced traders. It offers numerous trading and charting tools and also a free membership option. Let’s face it... not everyone has the money or need for a Bloomberg terminal subscription.    
                                </ContentP>
                                <ContentP>The Stacks series of products: Stacks: Landing Page Kit, Stacks: Portfolio Kit, Stacks: eCommerce Kit. "Stacks is a production-ready library of stackable content blocks built in React Native.    
                                </ContentP>
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
        </Outer>
    )
}

export default BlogPost
