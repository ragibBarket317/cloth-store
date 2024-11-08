import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-700">
      <div className="border-b border-gray-200 px-[3%] sm:px-[5%] py-5">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div className="mt-10">
            <div className="flex justify-center text-white lg:justify-start">
              <Link to="/" className="">
                <h1 className="font-bold prata-regular leading-relaxed">
                  CLOTH-STORE
                </h1>
              </Link>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400 lg:text-left">
              CLOTH STORE prints a huge variety of custom clothing like
              T-shirts, hoodies and more. Your order is handled daily with a lot
              of love from BANGLADESH and delivered worldwide!
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-gray-300 transition hover:text-gray-300/75"
                href="#"
              >
                {' '}
                About{' '}
              </a>
            </li>

            <li>
              <a
                className="text-gray-300 transition hover:text-gray-300/75"
                href="#"
              >
                {' '}
                Services{' '}
              </a>
            </li>

            <li>
              <a
                className="text-gray-300 transition hover:text-gray-300/75"
                href="#"
              >
                {' '}
                Projects{' '}
              </a>
            </li>

            <li>
              <a
                className="text-gray-300 transition hover:text-gray-300/75"
                href="#"
              >
                {' '}
                Blog{' '}
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
