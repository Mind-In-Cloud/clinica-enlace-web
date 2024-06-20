import { useEffect, useState } from 'preact/hooks'

import { loadImage } from '@utils/ImageDynamic'
import classy from '@utils/classy'

const DoctorCard = (props) => {

  const {
    slug = '',
    data : {
      title = '',
      photo = '',
      especialidad = ''
    },
    class : className = '',
    loading = 'lazy',
  } = props

  const cardClasses = classy([
    "k-doctor-card",
    "flex flex-col ",
    className
  ])

  const [image, setImage] = useState(null)

  useEffect(() => {
    loadImage(photo)
    .then( photo => {
      setImage({
        src: `/.netlify/images?url=${photo.src}`,
        alt: '',
        width: photo.width,
        height: photo.height,
      })
    })
  },[])

  return (
    <div {...cardClasses}>
      { image &&
        <div class="k-doctor-card-image">
          <img
            {...image}
            class='object-cover'
            loading = {loading}
          />
        </div>
      }
      <div class="flex flex-col h-full justify-between">
        <div class="flex place-content-between flex-row mt-2">
          <div>
            <div class="typo-header-xs antialiased font-semibold text-neutral-600">
              {title}
            </div>
            <div class="typo-body-m text-neutral-600 antialiased mt-2">
              Especialidad: { especialidad }
            </div>
          </div>
          <a
            style={{minWidth: '85px'}}
            href={`/medicos/${slug}`}
            class="k-link antialiased btn btn-primary font-semibold shadow rounded-sm bg-metal text-white typo-button-s py-2 px-3 w-max h-fit self-cente"
          >
            VER MÁS
          </a>
        </div>
        <hr class='border-0 h-0.5 mt-4 bg-blue' />
      </div>
    </div>
  )
}

export default DoctorCard;
