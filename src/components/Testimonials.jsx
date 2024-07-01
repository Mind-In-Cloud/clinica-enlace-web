// import Swiper JS
// import Swiper from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

// import classy from '@utils/classy';
import hash from '@utils/hash';

import avatarLong from "@icons/avatarlonghair.svg?raw";
import avatarShort from "@icons/avatarshorthair.svg?raw";

register();

const Testimonials = () => {

  const testimonials = [
    {
      review:
        "“Excelente Clínica, cuenta con todo lo necesario: Muy buenas instalaciones, Excelentes médicos. (Tratamos con diferentes especialistas y cada uno de ellos muy profesionales y acertados), el personal administrativo muy amable y atento. En general una Clínica Calificada que recomiendo ampliamente. Felicidades a todo el equipo por la labor que realizan.”",
      date: "23 de marzo de 2024",
      pacient: "J. Escalera",
      avatar: avatarLong,
    },
    {
      review:
        "“Excelente atención, especialistas muy capacitados te explican a detalle los procedimientos a realizar, y cuentan con tecnología de primer nivel para los diferentes procedimientos que practican, instalaciones de primer nivel y muy buena ubicación.”",
      date: "14 de octubre de 2023",
      pacient: "G. Chávez",
      avatar: avatarShort,
    },
    {
      review:
        "“Excelente servicio, personal muy amable y capacitado, excelentes instalaciones todo muy limpio, cuentan con la tecnología necesaria para atender cualquier complicación inmediatamente, los doctores te explican Muy bien cualquier duda que tengas, lo recomiendo ampliamente!”",
      date: "5 de agosto de 2023",
      pacient: "D. Bravo",
      avatar: avatarLong,
    },
    {
      review:
        "“Muy agradecida con todo el equipo por su profesionalismo y calidad humana, gracias al Dr. Dino Renzo Viacava excelente ginecólogo, al Dr. Germán excelente cirujano, a todas las enfermeras, recepcionistas y personas de intendencia, muy agradecidos por todas sus atenciones y ampliamente recomendados”",
      date: "28 de junio de 2023",
      pacient: "G. Nat",
      avatar: avatarShort,
    },
    {
      review:
        "“Personal amable y altamente capacitado, instalaciones limpias y funcionales, recomendado ampliamente”",
      date: "1 de julio de 2023",
      pacient: "P. Rodríguez ",
      avatar: avatarLong,
    },
    {
      review:
        "“Muy buena clínica, excelente equipo de médicos, con mucha amabilidad y certeza, te atienden de forma integral evaluando de manera global tu caso, con diagnóstico certero y muy buenas instalaciones preparados para cualquier situación que se pueda presentar, siempre tranquilizando al paciente como a la familia, 💯 % recomendable”",
      date: "23 de mayo de 2023",
      pacient: "A. Hernández ",
      avatar: avatarShort,
    },
  ];

  return <div class="k-section">
    <h2 class="header-m text-center text-neutral-500 my-4 xl:my-6">
      Nuestros <strong>Pacientes</strong>
    </h2>
    <swiper-container
      navigation="true"
      pagination="true"
      loop={true}
      space-between={40}
      key={hash(testimonials, 'big')}
    >
      {
        testimonials.map((testimonial, index) => {
          return (
            <swiper-slide key={hash(index, testimonial)} class='!grid !grid-cols-8 !gap-4 self-center'>
              <div class="col-span-8 content-center md:col-start-2 md:col-span-1 md:items-center lg:flex lg:justify-center" dangerouslySetInnerHTML={{__html:testimonial.avatar}}/>
              <div class="col-span-6 col-start-2 grid grid-cols-8 md:col-span-6 md:col-start-3 md:col-end-8">
                <p class="typo-body-l md:typo-body-xxl col-span-8 text-justify italic text-neutral-500 antialiased">
                  {testimonial.review}
                </p>
                <hr class="col-span-8 my-4 h-0.5 border-none bg-neutral-500 text-neutral-500" />
                <div class="typo-body-m md:typo-header-xs col-span-5 font-bold text-neutral-500 antialiased">
                  {testimonial?.pacient ||
                    "Paciente del centro de especialidades"}
                </div>
                <div class="typo-body-s md:typo-body-l content-antialiased col-span-3 text-right text-neutral-500">
                  {testimonial.date}
                </div>
              </div>
            </swiper-slide>
          )
        })
      }
    </swiper-container>
  </div>
}

export default Testimonials;
