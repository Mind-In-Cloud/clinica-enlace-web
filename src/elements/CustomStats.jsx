import { useStats } from 'react-instantsearch';

function CustomStats() {

  const { nbHits,} = useStats();

  return (
    <div class='my-8 k-subtitle text-neutral-300'>
      {nbHits.toLocaleString()} Resultados
    </div>
  );
}

export default CustomStats;
