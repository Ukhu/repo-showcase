export const graphqlQuery = `
  query { 
    user(login: "ukhu") { 
      login,
      bio,
      name,
      avatarUrl,
      repositories(first: 20, orderBy: {direction: DESC, field: PUSHED_AT}) {
        nodes {
          name,
          description,
          primaryLanguage {
              name,
              color
            },
          forkCount,
          stargazerCount,
          pushedAt
        }
      }
    }
  }
`
