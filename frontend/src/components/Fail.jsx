const Fail = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 mt-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 prata-regular">
          Payment Failed!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Unfortunately, your payment could not be processed. Please try again.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded bg-red-600 px-6 py-2 text-white shadow hover:bg-red-700"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  )
}

export default Fail
