import { Metadata } from "next"
import Link from "next/link";

export const metadata: Metadata = { 
  title: 'Blog Page'
}
// SEO

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next:{
      revalidate: 60, 
    }, // Интеравал запросов раз в какое то время 
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json()
}
const  Blog = async () => {
  const posts = await getData()
  return (
    <div style={{display:'flex', flexDirection: 'column', gap:'10px'}}>
      <h1>Blog Page</h1>
      <ul>
        {
          posts.map((e: any)=> (
            <li style={{listStyleType: 'demical'}} key={e.id} >
              <Link href={`/blog/${e.id}`}>{e.title}</Link> 
              {/* Перенаправляет на страницу about где уже настроены динамические страницы */}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Blog   