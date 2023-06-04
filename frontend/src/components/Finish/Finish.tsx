import Grade from '../Grade'
import classNames from '../../utils/classNames'

const Finish = ({ words, answers }: { words: string[], answers: string[]}) => <>
  <p className='text-xl'>finished! here come the results...</p>
  <div className='flex items-center divide-x divide-slate-500'>
    <Grade correct={answers.filter((answer, index) => answer === words[index]).length} total={words.length} />
    <div className='text-start text-slate-500 p-4'>
      <span className='text-lg flex gap-4 mb-4'>
        you answered
        <span className='text-lg text-slate-300'>
          {answers.filter((answer, index) => answer === words[index]).length}
        </span>
        out of
        <span className='text-lg text-slate-300'>
          {words.length}
        </span>
        correctly
      </span>
      {words.map((word, index) => [ word, answers[index] ]).map(([ word, answer ], index) => <p key={index + word} className='flex items-center gap-4'>
        <span className='text-xs'>word {index + 1}:</span>
        <span className={classNames(
          'text-slate-300',
          word === answer
            ? ''
            : 'line-through text-slate-500'
        )}
        >
          {answer.length > 0
            ? answer
            : '(no answer)'}
        </span>
        <span className='text-slate-300'>
          {word === answer
            ? ''
            : word}
        </span>
      </p>)}
    </div>
  </div>
</>
export default Finish
