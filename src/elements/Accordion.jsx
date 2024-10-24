import { useState } from 'preact/hooks';

import classy from '@utils/classy';


const Accordion = ( props ) => {

  const {
    title,
    content,
    htmlContent = '',
    startsOpen = false,
    color = '',
    final = false,
  } = props

  const [ open, setOpen ] = useState(startsOpen)

  const accordionClasses = classy([
    'k-accordion mb-2',
    color === 'green' ? 'border-t border-[#00000054]' : 'rounded shadow-md',
    open && 'k-open',
    color == 'green' && final && 'border-b border-[#00000054]',
  ])

  const buttonClasses = classy([
    'k-accordion-button',
    'w-full',
    'flex',
    'justify-between',
    'items-center',
    color === 'green' ? 'py-4' : 'p-4 pl-8',
  ])

  const titleClasses = classy([
    'header-xs font-bold text-neutral-500 antialiased text-left',
  ])

  const contentClasses = classy([
    color === 'green' ? 'pb-4' : 'pb-4 pr-4 pl-8',
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
            {
              color === 'green' ?
              <svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.8" d="M25.552 0.867999V8.82H0.912V0.867999H25.552Z" fill="#42B982"/>
              </svg>
              :
              <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6941 0.743999V7.56H0.574125V0.743999H21.6941Z" fill="#D9AC4E"/>
              </svg>
            }
          </div>
          :
          <div>
            {
              color === 'green' ?
              <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.8" d="M28.864 19.212H19.12V29.18H10.048V19.212H0.304V10.644H10.048V0.619999H19.12V10.644H28.864V19.212Z" fill="#42B982"/>
              </svg>
              :
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.2417 16.896H16.8897V25.44H9.11369V16.896H0.761688V9.552H9.11369V0.959999H16.8897V9.552H25.2417V16.896Z" fill="#D9AC4E"/>
              </svg>
            }
          </div>
        }
      </button>
      <div {...contentClasses}
        dangerouslySetInnerHTML={{ __html: htmlContent || content}}>
      </div>
    </div>
  );

}


export default Accordion
