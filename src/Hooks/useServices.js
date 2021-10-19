import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  console.log("serviceshfehg", services);

  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return {
    services,
  };
};
export default useServices;
