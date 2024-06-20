
import Accordion from "@elements/Accordion";

import classy from "@utils/classy";
import hash from "@utils/hash";


const Accordions = ( props ) => {

  const { list } = props;

  return (
    <div className="k-accordions k-section">
      { list.map((item, index) => (
        <Accordion
          key={hash(item,index)}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default Accordions
