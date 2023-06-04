const Grade = ({ correct, total }: {correct: number, total: number}) => {
  const result = correct / total
  return <div className='p-16'>
    <span className='border mx-auto w-16 h-16 grid place-content-center text-2xl shrink-0 grow'>
      {(() => {
        if (result >= 0.8)
          return <span className='text-violet-500'>
              A
          </span>
        else if (result >= 0.6)
          return <span className='text-red-500'>
              B
          </span>
        else if (result >= 0.4)
          return <span className='text-yellow-500'>
              C
          </span>
        else if (result >= 0.2)
          return <span className='text-green-500'>
              D
          </span>
        return <span className='text-sky-500'>
            E
        </span>
      })()}
    </span>
  </div>
}
export default Grade
