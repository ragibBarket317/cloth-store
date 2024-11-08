const Poster = ({ images }) => {
  return (
    <div className="w-full flex flex-col gap-5 sm:flex sm:flex-row sm:gap-[1%] mt-16 mb-10">
      <div className="w-full sm:w-[33%]">
        <img
          src={images.image1}
          alt=""
          className="w-full h-[500px] object-cover"
        />
      </div>
      <div className="w-full sm:w-[33%]">
        <img
          src={images.image2}
          alt=""
          className="w-full h-[500px] object-cover"
        />
      </div>
      <div className="w-full sm:w-[33%]">
        <img
          src={images.image3}
          alt=""
          className="w-full h-[500px] object-cover"
        />
      </div>
    </div>
  )
}

export default Poster
