import { useEffect, useState } from 'preact/hooks';

import classy from '@utils/classy';


const Accordion = ({ title, content, startsOpen = false }) => {

  const [ open, setOpen ] = useState(startsOpen)

  const accordionClasses = classy([
    'k-accordion mb-2',
    'rounded',
    'shadow-md',
    open && 'k-open',
  ])

  const buttonClasses = classy([
    'k-accordion-button',
    'w-full',
    'flex',
    'justify-between',
    'items-center',
    'p-4 pl-8',
  ])

  const titleClasses = classy([
    'header-xs font-bold text-neutral-500 antialiased',
  ])

  const contentClasses = classy([
    'pb-4 pr-4 pl-8',
    'whitespace-pre-line',
    'typo-body-m lg:typo-body-xl text-neutral-500 antialiased',
    open ? 'k-open opacity-1' : 'k-closed opacity-0 hidden',
  ])

  const getId = title.toLowerCase().replace(/\s/g, '_')
  return (
    <div {...accordionClasses} id={getId} aria-expanded={open}>
      <button {...buttonClasses}
        onClick={() => setOpen(!open)}
        aria-controls={getId}
      >
        <div {...titleClasses} >
          {title}
        </div>
        {
          open?
          <div>
            <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6941 0.743999V7.56H0.574125V0.743999H21.6941Z" fill="#D9AC4E"/>
            </svg>
          </div>
          :
          <div>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.2417 16.896H16.8897V25.44H9.11369V16.896H0.761688V9.552H9.11369V0.959999H16.8897V9.552H25.2417V16.896Z" fill="#D9AC4E"/>
            </svg>
          </div>
        }
      </button>
      <div {...contentClasses}>
        {content}
      </div>
    </div>
  );

}


export default Accordion
