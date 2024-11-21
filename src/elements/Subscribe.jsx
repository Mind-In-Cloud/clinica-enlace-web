import { useState } from 'preact/hooks'

import classy from '@utils/classy';

const Subscribe = () => {

  const subtitleClasses = classy([
    "font-bold",
    "typo-body-m",
    "antialiased",
    "text-neutral-600",
    "py-4"
  ])

  const formClasses = classy([
  ])

  const helperClasses = classy([
    'typo-body-s',
    'antialiased',
    'text-neutral-400',
    'col-span-2',
    'py-1 pt-2'
  ])

  const wrapperClasses = classy([
    'border border-neutral-400',
    'grid grid-cols-10',
  ])

  const inputClasses = classy([
    'k-input-email',
    'col-span-8',
    'typo-body-m',
    'antialiased',
    'text-neutral-700',
    'p-1',
    'focus-visible:outline-none',
    'bg-[#F8FAFC]',
    'placeholder-metal',
    'placeholder:typo-body-m',
    'placeholder:antialiased',
  ])

  const thanksClasses = classy([
    'col-span-10',
    'typo-body-s',
    'antialiased',
    'text-blue',
    'col-span-2',
    'text-center',
    'whitespace-pre-line',
    'p-4'
  ])

  const [ submitted , setSubmitted ] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    let form = e.target
    let values = {}
    for ( let i = 0; i < form.elements.length; i++ ) {
      let e = form.elements[i];
      if ( e.name ) {
        values[e.name] = e.value
      }
    }

    if ( submitted === '' ) {
      setSubmitted('request')
      values = { ...values }
        fetch('/.netlify/functions/triggerSubscription', {
          method: 'POST',
          body: JSON.stringify(values)
        }).then(( res ) => {
          console.log(`🚀 ~ handleSubmit ~ res:`, res)
          if ( res.ok ) {
            setSubmitted('sent')
          } else {
            setSubmitted('not sent')
          }
      })
    }
  }

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
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" defer></script>
    {
        submitted === '' ?
        <form onSubmit={handleSubmit} name='suscribir-clinica' {...formClasses}>
          <p
            { ...helperClasses }
          >
            CORREO
          </p>
          <div { ...wrapperClasses }>
            <input {...inputClasses} required name='email' type="email" placeholder={'Suscribirse al blog'}/>
            <div class="cf-turnstile" data-sitekey="0x4AAAAAAAd_zMBJ4BjMqg8z" name='temp'></div>
            <button
              type="submit"
              style={{minWidth: '85px'}}
              class="k-link btn btn-primary bg-neutral-400 text-white py-2 px-3 w-max h-fit justify-self-end col-span-1"
            >
              a
            </button>
          </div>
        </form>
        :
        <div {...thanksClasses}>
          {
              submitted === 'request'?
              `Cargando, un momento por favor...` :
              submitted === 'sent' ?
              `nice` :
              `failure`
          }
        </div>
      }
  </div>
  );
}

export default Subscribe;