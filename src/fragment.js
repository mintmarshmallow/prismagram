 const COMMENT_FRAGMENT = `
        id
        text
        user {
            ${USER_FRAGMENT}
        }
`
 const USER_FRAGMENT = `
        id
        username

`

 const FILE_FRAGMENT = `
        id
        url
`

export const FULL_POST_FRAGMENT = `
    fragment PostParts on Post{
        id
        caption
        location
        files {
            ${FILE_FRAGMENT}
        }
        comments {
            ${COMMENT_FRAGMENT}
        }
        user {
            ${USER_FRAGMENT}
        }
    }
`