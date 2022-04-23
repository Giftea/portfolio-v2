import styled from "styled-components";

export const ArticleSection = styled.div`
  padding: 140px 0 0 0;
  position: relative;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 70px 0 0 0;
  }
`;

export const ArticleTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;

  &:before {
    width: 40px;
    height: 2px;
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    background-color: #875ebc;
    transform: translateX(-50%);
  }
`;

export const ArticlesTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
`;

export const ArticleWrapper = styled.div`
  width: 32%;
  margin: 1rem 0;
  @media screen and (max-width: 1150px) {
    width: 45%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ArticleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (max-width: 960px) {
  }
`;

export const ArticleText = styled.div`
  padding: 30px;
  border-radius: 0 0 10px 10px;
  background-image: linear-gradient(180deg, #f3f4f9, #f3f4f9, #fff 75%);
  box-shadow: 0 60px 120px rgb(150 155 187 / 20%);
`;

export const ArticleBrief = styled.h2`
  font-weight: 400;
  font-size: 14px;
  color: #717796;
  padding-top: 1rem;
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const ArticleImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
`;

export const ArticleTitle = styled.a`
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: #2e3338;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;
