import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <h2 className="text-2xl font-medium">CONTACT US</h2>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px] h-[450px]"
          src="/contact.jpg"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            5499 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (+880) 1777 666 555 <br /> Email: admin@clothstore.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Cloth-Store
          </p>
          {/* <p className="text-gray-500 w-42">
            we’re more than a clothing store—we’re a team driven by creativity,
            passion, and a shared commitment to excellence
          </p> */}
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact
