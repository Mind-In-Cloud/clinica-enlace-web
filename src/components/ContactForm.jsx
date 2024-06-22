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
    'text-center'
  ])

  const [ submitted , setSubmitted ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if ( !submitted ) {
      setSubmitted(true)
    }
  }

  return <div {...contactClasses}>
    <div {...contactPhotoClasses}>
      <img
        {...image}
        class='object-cover'
        alt={``}
      />
    </div>
    <div {...contactFormWrapClasses}>
      <div {...formTitleClasses}>Formulario de contacto</div>
      {
        !submitted ?
        <form onSubmit={handleSubmit} name='contact-form-clinica' {...formClasses}>
          <input {...inputClasses} type="text" minLength={3} maxLength={40} placeholder="Nombre" />
          <input {...inputClasses} type="text" minLength={3} maxLength={40} placeholder="Apellidos" />
          <input {...inputClasses} type="email" placeholder="Correo" />
          <input {...inputClasses} type="tel" minLength={8} maxLength={14} placeholder="Teléfono"/>
          <input {...input2Classes} type="text" placeholder="Estado" />
          <textarea {...input2Classes} minLength={10} maxLength={300} placeholder="¿Cómo podemos ayudarte? (Maximo 300 caracteres)"/>
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
          Apreciamos que te pongas en contacto con nosotros, en breve nos pondremos en contacto contigo.
        </div>
      }
    </div>
  </div>

}

export default ContactForm
