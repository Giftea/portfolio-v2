export const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "giftea") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                }
            }
        }
    }
`;
