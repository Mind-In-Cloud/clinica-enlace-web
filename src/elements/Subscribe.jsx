

import classy from '@utils/classy';

const Subscribe = () => {

  const subtitleClasses = classy([
    "font-bold",
    "typo-body-m",
    "antialiased",
    "text-neutral-600",
    "py-4"
  ])

  return (
  <div class="">
    <div {...subtitleClasses}>
      Suscribirse al blog
    </div>
    <div
      class="typo-body-m antialiased text-neutral-400"
    >
      Mantente al día con los últimos avances y técnicas en intervencionismo médico.
    </div>
  </div>
  );
}

export default Subscribe;
