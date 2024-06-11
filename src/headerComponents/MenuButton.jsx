import { useState } from 'preact/hooks';
import LilMenu from '@header/MobileMenu'

const MenuIcon = () => (
  <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.333252 1.99992C0.333252 1.07944 1.07944 0.333252 1.99992 0.333252H31.9999C32.9204 0.333252 33.6666 1.07944 33.6666 1.99992C33.6666 2.92039 32.9204 3.66659 31.9999 3.66659H1.99992C1.07944 3.66659 0.333252 2.92039 0.333252 1.99992Z" fill="#6A8FA6"/>
  <path d="M0.333252 11.9999C0.333252 11.0794 1.07944 10.3333 1.99992 10.3333H31.9999C32.9204 10.3333 33.6666 11.0794 33.6666 11.9999C33.6666 12.9204 32.9204 13.6666 31.9999 13.6666H1.99992C1.07944 13.6666 0.333252 12.9204 0.333252 11.9999Z" fill="#6A8FA6"/>
  <path d="M1.99992 20.3333C1.07944 20.3333 0.333252 21.0794 0.333252 21.9999C0.333252 22.9204 1.07944 23.6666 1.99992 23.6666H31.9999C32.9204 23.6666 33.6666 22.9204 33.6666 21.9999C33.6666 21.0794 32.9204 20.3333 31.9999 20.3333H1.99992Z" fill="#6A8FA6"/>
  </svg>
)

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button class="self-center" onClick={() => setOpen(!open)}>
        {open ?
          <LilMenu onClick={ setOpen }/>:
          <MenuIcon/>
        }
      </button>
      {open && <div>Menu</div>}
    </>
  );
}

export default Hamburger;