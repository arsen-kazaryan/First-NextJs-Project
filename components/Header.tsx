import Link from "next/link"

const Header = () => {
  return (
    <header className="header"  
    style={{
      height: '50px', 
      backgroundColor: 'white',
      color:'black',
      display:'flex',
      justifyContent: 'center',
      alignItems:'center',
      gap:'20px',
    }}>
      <Link href='/' className=" bg-blue-500 ">Home</Link>
      <Link href='/blog'>Blog</Link>
      <Link href='/about'>About</Link>
    </header>
  )
}

export default Header