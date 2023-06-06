import { useEffect, useState } from 'react'
import Answer from './components/Answer'
import Finish from './components/Finish'
import Header from './components/Header'
import Intro from './components/Intro'
import Loading from './components/Loading'
import { Promise } from 'es6-promise'

const App = () => {
  const [ word, setWord ] = useState(''),
        [ started, setStarted ] = useState(false),
        [ finished, setFinished ] = useState(false),
        [ loading, setLoading ] = useState(false),
        fetchWord = () => new Promise((resolve, reject) => {
          fetch('/api/word')
            .then(response => {
              response.text().then(text => {
                setWord(text.trim())
                resolve()
              })
            })
            // eslint-disable-next-line dot-notation
            .catch(error => reject(error))
        }),
        [ words, setWords ] = useState([]),
        [ answers, setAnswers ] = useState([])
  useEffect(() => {
    setLoading(true)
    fetchWord()
      .then(() => {
        setLoading(false)
      }, () => {
        setLoading(false)
      })
  }, [])
  return <>
    <div className='h-full bg-black text-slate-300 select-none flex flex-col gap-4 text-sm text-center'>
      <Header />
      <main className='mx-4 grow shrink-0 grid place-content-center'>
        <div className='flex flex-col gap-4'>
          {
            finished
              ? <Finish words={words} answers={answers} />
              : started
                ? loading
                  ? <Loading />
                  : <Answer
                      word={word}
                      onSubmit={event => {
                        const input = event.target as HTMLInputElement
                        setWords(words.concat([word]))
                        setAnswers(answers.concat([input.value]))
                        if (words.length >= 5 - 1)
                          setFinished(true)

                        input.value = ''
                        setLoading(true)
                        fetchWord()
                          .then(() => {
                            setLoading(false)
                          }, () => {
                            setLoading(false)
                          })
                      }}
                    />
                : <Intro
                    onClick={() => {
                      setStarted(true)
                    }}
                  />
          }
        </div>
      </main>
      <footer className='text-slate-400 border-t border-slate-500 p-4 grow-0 shrink'>
        by Matthew Li, <a
          href='https://github.com/circles-png'
          className='underline decoration-2 underline-offset-4 text-slate-300'
          target='#blank'
        >
          @circles-png
        </a>
      </footer>
    </div>
  </>
}

export default App
