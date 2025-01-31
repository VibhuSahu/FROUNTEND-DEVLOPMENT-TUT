export default function Docs({ params }: { 
    params: { 
        slug: string[] 
    } 
}) {
    return (
        <>
            <h1>Home Page for Docs</h1>
            <p>
                The content in the slug variable: 
                {params.slug.map((ele, index) => (
                    <span key={index}>
                        <br /><br />{ele} 
                    </span>
                ))}
            </p>
        </>
    );
}
