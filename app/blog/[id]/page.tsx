type Props = {
  params: Promise<{
    id:string;
  }>
}

const Post = async ({ params }: Props) => {
const {id} = await params
  return (
    <>
        <h1>Post Page:{id}</h1>
    </>
  )
}

export default Post