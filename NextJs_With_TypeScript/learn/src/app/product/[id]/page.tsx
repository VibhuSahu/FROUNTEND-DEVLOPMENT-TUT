export default function ProductDetail({ params } : {
    params : {
        id : String 
    }
}) {
    return (
        <>

        <h1>Product Page</h1>

        <p>The page contain the ProductDetail of {params.id}</p>
        
        
        </>
    )
}