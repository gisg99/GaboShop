const Layout = ({children}) => {
  return (
    <div className='min-h-[90svh] w-svw mt-24 flex justify-center items-center bg-[#010311] text-white'>
        {children}
    </div>
  )
}

export default Layout