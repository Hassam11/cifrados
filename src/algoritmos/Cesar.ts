import { alfabeto } from '../consts';

//Cifrado el mensaje
export function AlgoritmoCesar(palabra: string) {
  const K = 10;
  const M = palabra.split('');
  let letrasCifradas = [];

  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < alfabeto.length; j++) {
      if (alfabeto[j] === M[i].toLocaleLowerCase()) {
        let C = j + (K % alfabeto.length);
        if (C > alfabeto.length) {
          C = C % alfabeto.length;
        }
        letrasCifradas.push(alfabeto[C]);
      }
    }
  }
  return letrasCifradas.join('');
}

//Descifar el mensaje
