import classy from "@utils/classy"


const ContactForm = () => {


  const contactClasses = classy([
    'pr-8 lg:pr-36 2xl:pr-48',
    'bg-cyan-soft',
    'grid grid-cols-8'
  ])

  const contactPhotoClasses = classy([
    'col-span-3',
  ])

  const contactFormWrapClasses = classy([
    'col-span-4',
    'col-start-5'
  ])

  return <div {...contactClasses}>
    <div {...contactPhotoClasses}>
      photo here
    </div>
    <div {...contactFormWrapClasses}>
      <form>

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
