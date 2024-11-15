import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <h2 className="text-2xl font-medium">ABOUT US</h2>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[550px] h-[450px] border"
          src="/cloth-store001.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Cloth Store, where fashion meets quality, and every piece
            tells a story. Founded with a passion for style and a commitment to
            excellence, our store aims to bring you an exclusive range of
            clothing that combines contemporary trends with timeless classics.
            We believe that what you wear is more than just fabric; it’s an
            expression of who you are, your personality, and your unique style.
            That’s why we’ve curated a collection that suits every taste, every
            season, and every occasion.
          </p>
          <p>
            Our journey began with a simple vision: to create a shopping
            experience that’s not only enjoyable but also inspiring. With every
            visit, we want you to feel at home, whether you’re exploring our
            store for the latest arrivals or seeking the perfect outfit for a
            special event.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Cloth Store, our mission is to provide high-quality, stylish, and
            sustainable clothing that empowers individuals to look and feel
            their best. We strive to make fashion accessible, affordable, and
            enjoyable for everyone. We are dedicated to sourcing responsibly,
            ensuring that each item in our store meets our standards for
            quality, durability, and ethical production. By blending modern
            style with conscious choices, we hope to inspire confidence,
            celebrate individuality, and contribute positively to the world of
            fashion.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <h2 className="text-2xl font-medium">Why Choose us?</h2>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Quality assurance is at the heart of everything we do. We are
            dedicated to providing clothing that not only looks good but is made
            to last. Our commitment to quality starts with selecting premium
            materials and working with skilled artisans who understand the
            importance of craftsmanship. Each piece in our collection goes
            through a thorough inspection process, ensuring it meets our high
            standards before reaching our customers.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            We believe that shopping for clothing should be a seamless and
            enjoyable experience. We’ve designed every aspect of our store, both
            online and in-store, with convenience in mind. From a user-friendly
            website to easy navigation in our physical store, our goal is to
            make finding the perfect outfit as effortless as possible
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">
            Exceptional customer service is more than a goal—it’s our commitment
            to you. We understand that a great shopping experience goes beyond
            quality products; it’s about feeling valued, supported, and
            respected. From the moment you connect with us, our dedicated team
            is here to ensure your needs are met with care, professionalism, and
            a personal touch.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
