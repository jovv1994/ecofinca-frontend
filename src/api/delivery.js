import api from "./index";

const Delivery = {
  create: (data) => {
    return api.post("/deliveries", data);
  },
};

export default Delivery;
