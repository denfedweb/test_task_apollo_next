import { gql } from '@apollo/client';

export const ARTICLES_QUERY = gql`
  query ArticlesList($project_id: String!, $lang: String!, $skip: Int!, $take: Int!) {
    contents(project_id: $project_id, lang: $lang, skip: $skip, take: $take) {
       id
        title {
            short
        }
        description {
            intro
        }
        dates {
            posted
        }
    }
  }
`;