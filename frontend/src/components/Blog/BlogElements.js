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

`
export const AuthorAva = styled.div`

`
export const AuthorName = styled.div`
    font-size: 13px;
    font-weight: bold;
    line-height: 16px;
`
export const TimeUpload = styled.p`
    font-size: 12px;
    text-align: left;
    color: #868686;
    
`
export const PostCard = styled.div`

`
export const Post = styled.div`

`
export const PostImg = styled.img`
    margin-top: 30px;
    cursor: pointer;
    border-radius: 10px;
    width: 320px;
    height: 280px;
    margin-bottom: 20px;   
`
export const PostTitle = styled.div`
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    color: #000;
`
export const PostDesc = styled.div`

`
