export default function ProductReview({ params } : {
    params : {
        id : String,
        rid : String
    }
}) {
    return (
        <>
        <h1>The Page for Product Review</h1>

        <h3>This page is getting used in Product Page review</h3>

        <p>

            the page is for Product id : {params.id}, and the review id : {params.rid}
        </p>

        </>
    )
}