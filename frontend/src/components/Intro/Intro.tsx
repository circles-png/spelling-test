const Intro = ({ onClick }: { onClick: () => void}) => <>
  <p className='text-lg'>spell five words correctly</p>
  <p className='text-lg'>ready? set...</p>
  <button
    className='border-slate-300 border mx-auto py-2 px-4 hover:bg-slate-300 hover:text-black text-lg'
    onClick={onClick}
  >
    go!
  </button>
</>
export default Intro
