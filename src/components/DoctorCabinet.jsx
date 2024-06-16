import { useLayoutEffect, useState } from 'preact/hooks';

import DoctorCard from '@elements/DoctorCard.jsx'
// import TagFilter from '@elements/TagFilter.astro';
import classy from '@utils/classy';

export const DoctorCabinet = ({doctors = []}) => {

  const [ shownDoctors, setShownDoctors ] = useState(doctors);
  const [ activeTag, setActiveTag ] = useState('Especialidad');
  const [ isOpen , setIsOpen ] = useState(false);
  let tags = [...new Set(doctors.map((doctor) => doctor.data.tags).flat())].sort();
  tags.unshift('Especialidad')

  const doctorCabClasses = classy([
    "k-doctor-cabinet",
    "k-section",
    "grid",
    "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
    "gap-x-8 md:gap-x-12 xl:gap-y-6 2xl:gap-x-40",
    "gap-y-10"
  ])

  const filterWrapClasses = classy([
    'k-filter-wrap',
    'justify-self-center',
    'col-span-1 md:col-span-2 xl:col-span-3',
  ])

  const filterClasses = classy([
    'k-filter',
    'w-fit',
    'border-metal border',
    'text-metal',
    'p-4',
    'flex',
    'relative'
  ])

  const filterOptionsClasses = classy([
    'k-filter-options',
    'bg-white',
    'typo-body-m md:typo-body-l',
    'antialiased',
    'text-neutral-500',
    'py-2',
    'px-4'
  ])

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  }

  const handleTagClick = (tag) => {
    console.log('handletagclick', tag)
    setActiveTag(tag);
    if ( tag === 'Especialidad'){
      setShownDoctors(doctors);
    } else {
      setShownDoctors(doctors.filter((doctor) => doctor.data.tags.includes(tag)));
    }
    setIsOpen(false);
  }

  return (
    <div {...doctorCabClasses} >
      <div {...filterWrapClasses } >
        <button {...filterClasses} id='k-filter' onClick={handleFilterClick}>
          <div>{activeTag}</div>
          {/* <Icon icon={chevronDown} class='max-w-4 self-center ml-2'/> */}
          <div class="k-icon max-w-4 self-center ml-2">
            <svg width="100%" height="100%" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.88 0.560058L8 6.66672L14.12 0.560059L16 2.44006L8 10.4401L-8.21774e-08 2.44006L1.88 0.560058Z" fill="#8CA6BC"/>
            </svg>
          </div>
        </button>
        <div class={`flex-col absolute ${isOpen ? ' flex' : ' hidden'}`}>
          {
            tags.map((tag, index) => {
              return tag !== activeTag && tag === 'Especialidad' ?
                <button
                  {...filterOptionsClasses}
                  onClick={() => handleTagClick('Especialidad')}
                  key={`${index}  + tag`}
                >
                  Todas
                </button>
              :
                tag !== activeTag ?
                <button
                  {...filterOptionsClasses}
                  onClick={() => handleTagClick(tag)}
                  key={`${index}  + tag not especialidad`}
                >
                  {tag}
                </button>
              :
                null
            })
          }
        </div>
      </div>
      { shownDoctors.map((doctor, index) => (
        <DoctorCard {...doctor} class="col-span-1" loading={index > 4 ? 'lazy' : 'eager'} key={`${index} + doctor card`}/>
      ))}
    </div>
  )

}

export default DoctorCabinet;
