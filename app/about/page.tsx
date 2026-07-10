import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About Page'
}


const About = () => {
  return (
    <div style={{marginTop: '10px'}}>
      <p>Select Subitem</p>
    </div>
  )
}

export default About