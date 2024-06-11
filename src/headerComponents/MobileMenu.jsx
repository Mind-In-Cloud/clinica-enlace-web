const CloseButton = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 25.7056L25.7051 2.0005" stroke="#D97364" stroke-width="3" stroke-linecap="round"/>
  <path d="M2 2L25.7051 25.7051" stroke="#D97364" stroke-width="3" stroke-linecap="round"/>
  </svg>
)

// Current idea
// TODO: Style to cover all the screen
// TODO: Style button to proper location
// TODO: Add links

const navMenu = ( props ) =>{

  const {
    onClick
  } = props
  return <div>
    <CloseButton onClick={onClick}/>
  </div>
}

export default navMenu;
