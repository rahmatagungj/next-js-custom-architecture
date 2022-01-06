import {useState, useEffect} from 'react';
import kebabCase from '@/lib/kebabCase'
import Head from 'next/head';


let count = 0

export default function HomeUserInterface({name, email}) {
 const [names, setNames] = useState(name);

 useEffect(() => {
   setInterval(() => {
     setNames(name + ' ' + count);
     count++;
   }, 1000);
 }, [name])

  return (
    <div>
      <Head />
      <h1>{kebabCase(names)}</h1>
      <p>
        {email}
      </p>

      <button onClick={() => setNames('Rahmat')}> Ganti nama </button>
    </div>
  );
}