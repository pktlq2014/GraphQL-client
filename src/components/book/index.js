import { useQuery } from "@apollo/client"
import { getSingleBook, getBooks } from "../../graphql-client/queries"

const Book = () => {
    const { loading, error, data } = useQuery(getBooks)
    // get data theo id
    const { loadingSingleBook, errorSingleBook, dataSingleBook } = useQuery(getSingleBook, {
        // truyền vào id
        variables: {
            id: "613df1731a95372ada55dc46"
        }
    })
    if (loadingSingleBook) return <div>loading ne</div>
    if (errorSingleBook) return <div>error ne</div>
    console.log("data ne 123: ", dataSingleBook)
    if (loading) return <div>loading ne</div>
    if (error) return <div>error ne</div>
    console.log("data ne: ", data)
    return (
        123
    )
}
export default Book;