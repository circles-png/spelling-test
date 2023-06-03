import { useState } from 'react'

const App = () => {
  const [ word, setWord ] = useState('hi'),
        [ started, setStarted ] = useState(false),
        randomizeWord = () => {

        }
  return <>
    <div className='h-full bg-black text-slate-300 select-none flex flex-col gap-4 text-sm text-center'>
      <header className='flex flex-col mt-8 mx-4 grow-0 shrink gap-2'>
        <h1 className='text-3xl'>
          spelling test
        </h1>
        <p className='text-slate-400'>test your spelling skills!</p>
      </header>
      <main className='mx-4 grow shrink-0 grid place-content-center'>
        <div className='flex flex-col gap-4'>
          {
            started
              ? <>
                  <div className='flex flex-col gap-4'>
                    your word is:
                    <div className='text-6xl font-bold text-slate-100'>
                      {word}
                    </div>
                  </div>
                  <div className='type the word correctly!'>
                    <input type='text' />
                  </div>
                </>
              : <>
                  <p>five words, unlimited time</p>
                  <p>ready? set...</p>
                  <button
                    className='border-slate-300 border mx-auto py-2 px-4 hover:bg-slate-300 hover:text-black'
                    onClick={() => {
                      setStarted(true)
                    }}
                  >
                    go!
                  </button>
                </>
          }

        </div>
      </main>
      <footer className='text-slate-400 border-t border-slate-500 p-4 grow-0 shrink'>
        by Matthew Li, <a href='https://github.com/circles-png' className='underline decoration-2 underline-offset-4 text-slate-300'>@circles-png</a>
      </footer>
    </div>
  </>
}

export default App
