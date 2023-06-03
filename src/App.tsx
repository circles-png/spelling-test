import { useState } from 'react'

const App = () => {
  const [ word, setWord ] = useState('hi')
  return <>
    <div className='h-full bg-slate-900 text-slate-300 select-none flex flex-col gap-4 text-sm text-center'>
      <header className='flex flex-col mt-8 mx-4 grow-0 shrink gap-2'>
        <h1 className='text-3xl'>
          spelling test
        </h1>
        <p className='text-slate-400'>test your spelling skills!</p>
      </header>
      <main className='mx-4 grow shrink-0'>
        <div className='flex flex-col gap-2'>
          your word is:
          <div className='text-6xl font-bold'>
            {word}
          </div>
        </div>
        <div className='type the word correctly!'>
          <input type='text' />
        </div>
      </main>
      <footer className='text-slate-400 border-t border-slate-400 p-4 grow-0 shrink rounded-t-xl'>
        by Matthew Li, <a href='https://github.com/circles-png' className='underline decoration-2 underline-offset-4 text-slate-300'>@circles-png</a>
      </footer>
    </div>
  </>
}

export default App
