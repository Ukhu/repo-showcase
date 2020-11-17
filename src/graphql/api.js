import { graphqlQuery } from './query';
import { GITHUB_TOKEN } from '../env';

const BASE_URL = 'https://api.github.com/graphql';

export const fetchRepoDetails = function() {
  return fetch(BASE_URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GITHUB_TOKEN}`
    },
    body: JSON.stringify({
      query: graphqlQuery
    })
  }).then(res => res.json())
  .then(res => {
    if (res.errors) {
      throw new Error(res.errors[0].message)
    }
    return res.data
  })
}
