import { AfterThisCourse } from '@/components/AfterThisCourse'
import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import avatarImage1 from '@/images/sarah.webp'
import avatarImage2 from '@/images/ian.webp'
import avatarImage3 from '@/images/amir.webp'
import bookCover from '@/images/products/bookCover.jpg'
import bookAfter from '@/images/products/bookAfter.png'
import noomiBefore from '@/images/products/noomiBefore.png'
import noomiAfter from '@/images/products/noomiAfter.png'
import hymacsBefore from '@/images/products/hymacsBefore.png'
import hymacsAfter from '@/images/products/hymacsAfter.png'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <NavBar /> 
      <Resources />
      <Testimonial
        id="testimonial-from-amir-blake"
        author={{
          name: 'Amir J. Blake',
          role: 'Author',
          image: avatarImage3,
        }}
        beforeAfter={{ before: bookCover, after: bookAfter }}
      >
        <p>
          I gave life to my digital book covers with this course. I have been able to run ads with contextual pictures. I'm so grateful for it.
        </p>
      </Testimonial>
      <AfterThisCourse />
      <Testimonial
        id="testimonial-from-sarah-marshall"
        author={{
          name: 'Sarah Marshall',
          role: 'Founder at Noomi',
          image: avatarImage1,
        }}
        beforeAfter={{ before: noomiBefore, after: noomiAfter }}
      >
        <p>
          I finally got product photos I could use on my PDP without feeling embarrassed. All with brand consistency. Amazing.
        </p>
      </Testimonial>
      
      <Pricing />
      <Testimonial
        id="testimonial-from-ian-maceachern"
        author={{
          name: 'Ian MacEachern',
          role: 'Founder at Hymacs',
          image: avatarImage2,
        }}
        beforeAfter={{ before: hymacsBefore, after: hymacsAfter }}
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
