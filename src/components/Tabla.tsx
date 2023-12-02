interface Props {
  letra: string;
  indice: number;
  letraCoincide: string[];
}

export default function Tabla({ letra, indice, letraCoincide }: Props) {
  const coincidencia = letraCoincide.includes(letra);

  return (
    <table
      className={`border-collapse border border-black text-center hover:bg-slate-600 hover:cursor-pointer`}
    >
      <thead>
        <tr>
          <th className={`border w-16 h-16 ${coincidencia ? 'bg-red-500' : ''}`}>{letra}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={`border w-16 h-16 ${coincidencia ? 'bg-red-500' : ''}`}>{indice}</td>
        </tr>
      </tbody>
    </table>
  );
}
