import styled from 'styled-components';
  
export const BlogSection = styled.div`
    margin-top: 150px;
    max-width: 1000px;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
export const BlogText = styled.div`
    
`
export const BlogTitle = styled.h2`
    align-items: center;
    margin-top: 80px;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
`
export const BlogDesc = styled.p`
    align-items: center;
    margin-top: 10px;
    text-align: center;
    font-style: normal;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;
    color: #868686;
    margin-bottom: 80px;

`
export const FeaturePost = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`
export const FeatureImg = styled.img`
    width: 558px;
    margin: 0 0 0px 0;
    padding-right: 0;
    border-radius: 15px;
    max-width: 600px;
    height: 405px;
    cursor: pointer;
`
export const FeatureDesc = styled.div`
    padding: 60px;
`
export const FeatureH2 = styled.h2`
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 47px;
    width: 403px;
        
    &:hover {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        color: #506FEA;
    }
`
export const FeatureP = styled.p`
    font-weight: 300px;
    font-size: 18px;
    color: #868686;
    margin-bottom: 20px;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 100%;
`
export const Author = styled.div`
    display: flex;
    align-items: center;
`
export const AuthorAva = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    object-fit: cover;
    flex-shrink: 0;
    margin-right: 10px;
    max-width: 100%;

    &:hover {
        cursor: pointer;
        border: 1px solid #000000;
    }
`
export const AuthorText = styled.div`
    display: flex;
    flex-direction: column;
`
export const AuthorName = styled.h4`
    font-size: 15px;
    font-weight: bold;
    line-height: 16px;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
}
`
export const TimeUpload = styled.p`
    font-size: 12px;
    text-align: left;
    color: #868686;
    
`
export const PostCard = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    box-sizing: border-box;
    grid-gap: 10px;
    margin-top: 90px;
    

    @media screen and (max-width: 1000px) {
         grid-template-columns: 2fr 2fr 2fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 2fr;
        padding: 0 20px;  
    }
`
export const Post = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 300px;
    margin-bottom: 20px;
    max-height: 740px;
`
export const PostImg = styled.img`
    width: 100%;
    max-height: 350px;
    height: auto;
    border-radius: 15px;
    object-fit: cover;
    cursor: pointer;
`
export const PostTitle = styled.h4`
    margin-top: 15px;    
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    color: #000;

    &:hover {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        color: #506FEA;
    }
`
export const PostDesc = styled.p`
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    color: #868686;
    margin-bottom: 10px;
    margin-top:15px;
`

export const NewsNUpdateSections = styled.div`
    margin-top: 70px;
`

export const NewsNUpdate = styled.div`
    display: flex;
`

export const NewsNUpdateText = styled.div`
    
`

export const NewsTextH2 = styled.h2`
    font-size: 48px;
`

export const NewsTextP = styled.p`
    font-size: 18px;
`

export const NewsNUpdateBtn = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-left: auto; 
    margin-right: 0;
    
    @media screen and (max-width: 768px) {
        display: none;
        transition: all 0.2s ease-in-out;
    }
`
export const NewsNUpdateBtnLink = styled.div`
    display: absolute;
    border-radius: 30px;
    background: white;
    white-space: nowrap;
    padding: 13px 36px;
    color: #000;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    // transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-sizing: border-box;
    border: 2px solid #000000;
    
    &:hover {
        // transition: all 0.2s ease-in-out;
        background-color: #506FEA;  
        color: #fff;
        border: none;
`
export const NewsNUpdatePost = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 5fr 5fr 5fr;
    box-sizing: border-box;
    grid-gap: 10px;
    margin-top: 90px;


    @media screen and (max-width: 1000px) {
        grid-template-columns: 2fr 2fr 2fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 2fr;
        padding: 0 20px;  
    }
`


