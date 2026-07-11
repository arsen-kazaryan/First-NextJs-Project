import Link from "next/link";

type Props = {
  params: Promise<{
    id:string;
  }>
}


async function getData(id:string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next:{
      revalidate: 60, 
    }, // Интеравал запросов раз в какое то время 
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}
// Пишем здесь такую же функцию которая делает запрос к серверу но только к ондному посту. получает данныеи выводит их на старницу 


const Post = async ({ params }: Props) => {
const {id} = await params
const post = await getData(id)

  return (
    <div style={{display: 'flex', flexDirection:'column', gap: '30px'}}>
        <h1>Post Page:{id}</h1>
        <h3>Title: {post.title}</h3>
        <p>Body: {post.body}</p>

        <Link href='/blog'>Back</Link>
    </div>
  )
}

export default Post