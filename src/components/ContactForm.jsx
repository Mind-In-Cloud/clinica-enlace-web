import { useState } from 'preact/hooks'
import classy from "@utils/classy"

import image from '@images/foto_formulario.png'


const ContactForm = () => {


  const contactClasses = classy([
    'mb-4',
    'bg-cyan-soft',
    'flex',
    'flex-col',
    'md:flex-row',
  ])

  const contactPhotoClasses = classy([
    'w-full',
    'md:max-w-[40%]',
    '2xl:max-w-[30%]'
  ])

  const contactFormWrapClasses = classy([
    'w-full',
    'content-center',
    'flex',
    'flex-col',
    'items-center',
    'self-center',
    'mb-8'
  ])

  const formTitleClasses = classy([
    'header-xs font-bold text-center text-gray',
    'my-8'
  ])

  const formClasses = classy([
    'grid grid-cols-2 gap-x-2 gap-y-2',
    '2xl:w-[50%]',
    'xl:w-[70%]',
    'w-[80%]'
  ])

  const inputClasses = classy([
    'typo-body-m',
    'antialiased',
    'text-neutral-700',
    'placeholder-blue',
    'placeholder:typo-body-m',
    'p-1',
    'border border-blue',
    'focus-visible:outline-gray',
  ])

  const input2Classes = classy([
    'typo-body-m',
    'antialiased',
    'text-neutral-700',
    'placeholder-blue',
    'placeholder:typo-body-m',
    'p-1',
    'border border-blue',
    'focus-visible:outline-gray',
    'col-span-2'
  ])

  const thanksClasses = classy([
    'typo-body-xl',
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
        fetch('/.netlify/functions/triggerMail', {
          method: 'POST',
          body: JSON.stringify(values)
        }).then(( res ) => {
          if ( res.ok ) {
            setSubmitted('sent')
          } else {
            setSubmitted('not sent')
          }
      })
    }

  }

  return <div {...contactClasses}>
    <div {...contactPhotoClasses}>
      <img
        {...image}
        src={`/.netlify/images?url=${image.src}&fm=webp`}
        class='object-cover'
        alt={``}
      />
    </div>
    <div {...contactFormWrapClasses}>
      <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" defer></script>
      <div {...formTitleClasses}>Formulario de contacto</div>
      {
        submitted === '' ?
        <form onSubmit={handleSubmit} name='contact-form-clinica' {...formClasses}>
          <input {...inputClasses} required name='firstName' type="text" minLength={1} maxLength={40} placeholder="Nombre*"/>
          <input {...inputClasses} required name='lastName'type="text" minLength={1} maxLength={40} placeholder="Apellidos*"/>
          <input {...inputClasses} required name='email' type="email" placeholder="Correo*"/>
          <input {...inputClasses} required name='phone' type="tel" minLength={7} maxLength={14} placeholder="Teléfono*"/>
          <input {...input2Classes} name='state' type="text" placeholder="Estado" />
          <textarea {...input2Classes} required name='message' minLength={5} maxLength={500} placeholder="¿Cómo podemos ayudarte? (Máximo 500 caracteres)"/>
          <div class="cf-turnstile" data-sitekey="0x4AAAAAAAd_zMBJ4BjMqg8z" name='temp'></div>
          <button
            type="submit"
            style={{minWidth: '85px'}}
            class="k-link antialiased btn btn-primary font-semibold shadow rounded-sm bg-blue text-white typo-button-s py-2 px-3 w-max h-fit justify-self-end col-span-2"
          >
            Enviar
          </button>
        </form>
        :
        <div {...thanksClasses}>
          {
              submitted === 'request'?
              `Cargando, un momento por favor...` :
              submitted === 'sent' ?
              `Apreciamos que te pongas en contacto con nosotros, en breve nos pondremos en contacto contigo.` :
              `Lo sentimos, ha ocurrido un error, por favor intenta de nuevo.

              Si esto a sucedido en varias ocasiones, por favor contactanos por WhatsApp.`
          }
        </div>
      }
    </div>
  </div>

}

export default ContactForm
