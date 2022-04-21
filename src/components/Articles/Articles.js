import React, { useEffect, useState } from 'react'
import { Container } from '../../globalStyles';
import { ArticleSection, ArticleTextWrapper, ArticleTitle,ArticleBrief, ArticleText, ArticleImage, ArticlesTitle, ArticleWrapper, ArticleContainer } from './ArticleStyles'
import { GET_USER_ARTICLES } from '../../data/BlogData';
import axios from 'axios'

const Article = ({title, coverImage, slug, brief}) => {
    return (<ArticleWrapper>
        <ArticleImage src={coverImage} alt ={title} />
        <ArticleText>
            <ArticleTitle>{title.slice(0,50)}...</ArticleTitle>
            <ArticleBrief>{brief.slice(0,200)}... </ArticleBrief>
        </ArticleText>
    </ArticleWrapper>)
}

const Articles = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetchPosts()
      }, [posts]);
    
      function fetchPosts() {
        axios
          .post('https://api.hashnode.com/', {          
              query:  GET_USER_ARTICLES,
               variables: {page: 0}              
          })
          .then((response) => {
            setPosts(response.data.data.user.publication.posts);
          });
      }


  return (
    <ArticleSection id='articles'>
        <Container>
            <ArticleTextWrapper>
                <ArticlesTitle>Articles</ArticlesTitle>
            </ArticleTextWrapper>
            <ArticleContainer>
                {
                    posts ?
                    posts.slice(0, 3).map((post) => {
                        return <Article key={post.slug} title={post.title} coverImage={post.coverImage} slug={post.slug} brief={post.brief} />
                    }) :
                    <p>loading</p>
                }
            </ArticleContainer>
        </Container>
    </ArticleSection>
  )
}

export default Articles