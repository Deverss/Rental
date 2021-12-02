import styled from 'styled-components';
import {FiShare} from 'react-icons/fi';
import {BsHeart} from 'react-icons/bs';


    export const Outer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    `
    export const OuterInner = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    `
    export const SectionArticle = styled.div`
    padding-top: 80px;
    @media only screen and (max-width: 1179px){
        margin-bottom: 112px;
    }
    `
    export const SectionArticleBody = styled.div`
    margin-bottom: 80px;
    `
    export const ArticleHead = styled.div`
    max-width: 730px;
    margin: 80px auto 80px;
    text-align: center;
    &>h1{
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
        font-size: 64px;
        line-height: 1;
        letter-spacing: -.02em;
    }
    `
    export const Image = styled.div`
    `
    export const ImagePost = styled.img`

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    -o-object-fit: cover;
    object-fit: cover;
    vertical-align: middle;
    `
    export const ArticleWrap = styled.div`
   
    `
    export const ArticleCenter = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 80px;
    `
    export const Content = styled.div`
    & h1,& h2,& h3{
        font-size: 40px;
        line-height: 1.2;
        letter-spacing: -.01em;
        position: relative;
        margin-bottom: 32px;
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
        border-bottom : 2px solid #E6E8EC;
    }
    & p{
        font-size: 16px;
        line-height: 1.5;
        color: #777E90;
        margin-bottom: 32px;
    }
    `
    export const Action = styled.div`
    position: relative;
    @media only screen and (max-width: 1179px){
        margin-top: 64px;
    }
    `
    export const ActionList = styled.div`
    display: flex;
    justify-content: center;
    `
    export const ActionItem = styled.div`
    position: relative;
    margin-right: 16px;
    flex: 0 0 48px;
    width: 48px;
    height: 48px;
    padding: 0;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #e6e8ec inset;
    background: transparent;
    transition: all .2s;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    `
    export const TitleLine = styled.div`
    content: "";
    margin-bottom: 32px;
    left: 0;
    bottom: 0;
    width: 166px;
    height: 2px;
    background: #E6E8EC;
    `
    export const IconShare = styled(FiShare)`
    font-size: 20px;
    vertical-align: middle;
    color: #000;

   

    `

    export const IconLove = styled(BsHeart)`
    font-size: 20px;
    vertical-align: middle;
    color: #000;
    `
