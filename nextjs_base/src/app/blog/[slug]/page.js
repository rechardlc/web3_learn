export default async function Page({ params }) {
  const { slug } = await params;
  if (!slug) {
    return <h1>Blog Post Not Found</h1>;
  }
  return <h1>Blog Post {slug} { JSON.stringify(params) }</h1>;
}