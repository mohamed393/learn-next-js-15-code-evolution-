export default async function ShopDetails({params,}: { params: Promise<{ slug: string[] }> }){
    const { slug } = await params
    return <div>{JSON.stringify(slug)}</div>
}