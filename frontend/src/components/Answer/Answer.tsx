import { KeyboardEvent } from 'react'

const Answer = ({ word, onSubmit }: { word: string, onSubmit: (event: KeyboardEvent<HTMLInputElement>) => void }) => <>
  your word is
  <div className='text-6xl font-bold text-slate-100'>
    {word}
  </div>
  type the word correctly and press return
  <input
    type='text'
    className='rounded-xl p-4 bg-black border-2 border-slate-500 text-center'
    autoFocus
    onKeyDown={event => {
      if (event.key === 'Enter')
        onSubmit(event)
    }}
  />
</>

export default Answer
