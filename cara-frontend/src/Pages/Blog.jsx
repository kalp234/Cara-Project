import React from 'react'
import Pageheader from '../Components/Pageheader'
import Blogs from '../Components/Blogs'
import Pagination2 from '../Components/Pagination2'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import '../App.css'

const Blog = () => {
  return (
    <div>
<Pageheader title="#readmore" description="Read all case studies about our products!" className="blog-header"/>
<Blogs/>
<Pagination2/>
<Newsletter/>
<Footer/>
    </div>
  )
}

export default Blog