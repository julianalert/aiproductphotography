import { AfterThisCourse } from '@/components/AfterThisCourse'
import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import avatarImage1 from '@/images/sarah.webp'
import avatarImage2 from '@/images/ian.webp'
import avatarImage3 from '@/images/amir.webp'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Amir J. Blake',
          role: 'Author',
          image: avatarImage3,
        }}
      >
        <p>
          I gave life to my digital book covers with this course. I have been able to run ads with contextual pictures. I'm so grateful for it.
        </p>
      </Testimonial>
      <AfterThisCourse />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Sarah Marshall',
          role: 'Founder at Noomi',
          image: avatarImage1,
        }}
      >
        <p>
          I finally got product photos I could use on my PDP without feeling embarrassed. All with brand consistency. Amazing.
        </p>
      </Testimonial>
      
      <Pricing />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Ian MacEachern',
          role: 'Founder at Hymacs',
          image: avatarImage2,
        }}
      >
        <p>
        All the pictures I made got great results! We launched a paid ads campaign on TikTok and got one of our best performance. Can't recommend enough!
        </p>
      </Testimonial>
      <Author />
      <Footer />
    </>
  )
}
