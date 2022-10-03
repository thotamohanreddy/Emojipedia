import './App.css';
import Entry from './entry';
import emojipedia from './emojipedia';

const newemojipedia = emojipedia.map(function (emojipedias)
{
  return emojipedias.meaning.substring(0, 20);
})



function App() {
  return (
    <div >
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className='dictionary'>{emojipedia.map(emojiterm =>(
            <Entry
              id={emojiterm.key}
              name={emojiterm.name}
              emoji={emojiterm.emoji}
              meaning={emojiterm.meaning}
            />
        ))}
      </dl>
    </div>
  );
}
console.log(newemojipedia);

export default App;
