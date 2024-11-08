import { MdHeadsetMic } from 'react-icons/md'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { FaRegCircleCheck } from 'react-icons/fa6'

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <div>
          <RiMoneyDollarCircleLine className="w-12 h-12 m-auto mb-5" />
        </div>
        <p className="font-semibold">Easy Exchange</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <div>
          <FaRegCircleCheck className="w-12 h-12 m-auto mb-5" />
        </div>
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <div>
          <MdHeadsetMic className="w-12 h-12 m-auto mb-5" />
        </div>
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy
