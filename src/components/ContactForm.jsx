import classy from "@utils/classy"

import image from '@images/foto_formulario.png'


const ContactForm = () => {


  const contactClasses = classy([
    'md:pr-36 2xl:pr-48 mb-4',
    'bg-cyan-soft',
    'grid grid-cols-8',
    'gap-y-4'
  ])

  const contactPhotoClasses = classy([
    'col-span-8 md:col-span-3',
  ])

  const contactFormWrapClasses = classy([
    'col-span-8 md:col-span-4',
    'md:col-start-5'
  ])

  return <div {...contactClasses}>
    <div {...contactPhotoClasses}>
      <img
        {...image}
        class='object-cover'
        alt={``}
      />
    </div>
    <div {...contactFormWrapClasses}>
      <form>
a
      </form>
    </div>
    {/* Nombre
Apellidos
Correo
Teléfono
Estado
¿Cómo podemos ayudarte?
Teléfono
Enviar */}
  </div>

}

export default ContactForm
