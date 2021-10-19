import { useEffect, useState } from "react";

const useDeperment = () => {
  const [deperments, setDeperments] = useState([]);
  useEffect(() => {
    fetch("./hospital.json")
      .then((res) => res.json())
      .then((data) => setDeperments(data));
  }, []);
  return {
    deperments,
  };
};
export default useDeperment;
