 import OurDepartment from '../Ourservice/OurDepartment';
import { BiArrowFromLeft } from "react-icons/bi";
import useDeperment from '../../Hooks/useDeperment';
import { Link } from 'react-router-dom';

const Deperment = () => {
    const {deperments} = useDeperment();
    const ScDepermentse = deperments.slice(0, 4);

    return (
        <div id="Ourservice d-flex">
      <h2 className="text-success mt-5 mb-4">Our Department</h2>
      <div className="service-container row gap-4">
      {
      ScDepermentse.map((deperment) => (
          <OurDepartment
          key={deperment.key}
          deperment={deperment}
          ></OurDepartment>
        ))
        }
      </div>
       <Link className="survicecartbtns" to="/doctor&depertment"> See All... <BiArrowFromLeft/></Link>
    </div>
    );
};

export default Deperment;