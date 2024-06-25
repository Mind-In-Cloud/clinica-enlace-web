// import Swiper JS
import Swiper from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

import DoctorCard from "@elements/DoctorCard.jsx";

import classy from '@utils/classy';
import hash from '@utils/hash';
import useScreenSize from '@utils/useScreenSize';

register();


const ReactSlider = ( props ) => {

  const { tag = "", doctors = []} = props;

  const doctorList = tag
    ? doctors.filter((doctor) => doctor.data.tags.includes(tag))
  : doctors;


  const docSliderClasses = classy([
    'k-section',
    'k-slider',
  ])

  const { width } = useScreenSize();

  return (
    <div {...docSliderClasses}>
      {
        width > 640 ?
        <swiper-container
          navigation="true"
          pagination="true"
          loop={true}
          slides-per-view={2}
          slides-per-group={2}
          space-between={80}
          key={hash(doctorList,'big')}
        >
          {
            doctorList.map((doctor, index) => (
              <swiper-slide key={hash('big',index,doctor)}>
                <DoctorCard {...doctor} />
              </swiper-slide>
            ))
          }
        </swiper-container>
        :
        <swiper-container
          navigation="true"
          pagination="true"
          loop={true}
          slides-per-view={1}
          space-between={40}
          key={hash(doctorList,'small')}
        >
          {
            doctorList.map((doctor, index) => (
              <swiper-slide key={hash('small',index,doctor)}>
                <DoctorCard {...doctor} />
              </swiper-slide>
            ))
          }
        </swiper-container>
      }
    </div>
  )

}

export default ReactSlider
