import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";
import useServices from "../../Hooks/useServices";
const AllService = () => {
  const { services } = useServices("");
  return (
    <div className="container d-flex">
      <div className="row gap-2 services-row">
        <div className="surviceHet mt-3 mb-3">
          <h1 className="">Our Services</h1>
        </div>
        {services.map((service) => (
          <div class="card col-sm-12 col-md-3">
            <img src={service.url} class="card-img-top mt-2" alt="..." />
            <div class="card-body">
              <h5 class="card-title"> {service.title}</h5>
              <p class="card-text">{service.ditels}.</p>
              <Link to={`/depertmentDitiel/${service.key}`}>
                <a class="btn serviceBtn  btn-outline-danger Submit-buttonsP">
                  Services Details <BiChevronsRight />{" "}
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllService;
