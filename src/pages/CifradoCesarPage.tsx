import { useState, FormEvent } from 'react';
import { AlgoritmoCesar } from '../algoritmos/Cesar';
import { alfabeto } from '../consts';
import Tabla from '../components/Tabla';

export default function CifradoCesarPage() {
  const [palabra, setPalabra] = useState('');
  const [palabraCifrada, setPalabraCifrada] = useState('');
  const [letraCoincide, setLetraCoincide] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const palabraCifrada = AlgoritmoCesar(palabra);
    setPalabraCifrada(palabraCifrada);
    setLetraCoincide(palabraCifrada.split(''));
  };
  return (
    <>
      <div className='flex flex-wrap justify-center text-4xl'>
        {alfabeto.map((item, index) => (
          <div className='p-3' key={index}>
            <Tabla letra={item} indice={index} letraCoincide={letraCoincide} />
          </div>
        ))}
      </div>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col text-2xl w-1/3 m-auto py-14'>
          <input
            type='text'
            placeholder='Ingrese palabra'
            className='border border-gray-300 px-4 py-2 rounded-md bg-slate-900 text-white focus:outline-none focus:border-blue-500'
            onChange={(e) => setPalabra(e.target.value)}
          />
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-7001  my-4 m-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Enviar
          </button>
        </form>
      </div>
      <div>{palabraCifrada && <p>Palabra cifrada: {palabraCifrada}</p>}</div>
    </>
  );
}
