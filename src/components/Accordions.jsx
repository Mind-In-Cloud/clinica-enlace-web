
import Accordion from "@elements/Accordion";

import hash from "@utils/hash";
import classy from "@utils/classy";


const Accordions = ( props ) => {

  const {
    list,
    title = '' ,
    color = ''
  } = props;

  const titleClasses = classy([
    `header-s`,
    `mb-8`,
    `text-${color}`,
  ])

  return (
    <div className="k-accordions k-section">
      { title && <h3 {...titleClasses}>{title}</h3> }
      { list.map((item, index) => (
        <Accordion
          key={hash(item,index)}
          color={color}
          title={item.title}
          content={item.content}
          htmlContent={item.htmlContent}
          final = { index === list.length - 1}
        />
      ))}
    </div>
  );
}

export default Accordions
