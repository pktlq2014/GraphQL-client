import { gql } from '@apollo/client'
const getBooks = gql`
    query getBookQuery {
        books {
            name
            id
        }
    }
`
const getSingleBook = gql`
    query getSingleBookQuery($id: ID) {
        book(id: $id){
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
        }
    }
`
export { getBooks, getSingleBook };