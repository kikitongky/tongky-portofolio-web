const Navbar = (props) => {
    const { children } = props;
    
    return
        <div>
            <nav className='w-full flex justify-center fixed top-2'>
              <ul className='flex gap-5 py-2 px-5 font-semibold rounded-full text-slate-300 bg-slate-800 text-sm'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Project</a></li>
              </ul>
            </nav>
        </div>
}

export default Navbar