const Navbar = ({ setToken }) => {
  return (
    <div className="flex justify-between items-center px-8 py-3 border-b">
      <div>
        <h1 className="prata-regular font-extrabold text-2xl">CLOTH-STORE</h1>
        <p className="mt-[-10px] tracking-[5px]">ADMIN</p>
      </div>
      <div>
        <button
          onClick={() => setToken('')}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
