import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const idx = parseInt(id);

  const filteredService = services.find((service) => {
    return service.id === idx;
  });

  const { name, image, price, description, button_text } = filteredService;

  return (
    <div className="max-w-6xl mx-auto my-14 p-14 bg-white shadow-xl">
      <h2 className="text-2xl font-montserrat font-bold mb-3">{name}</h2>
      <div className="w-full h-96 ">
        <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div>
        <p className="font-condensed my-2 font-bold">{description}</p>
        <p className="font-condensed mb-2 font-bold">{price}</p>
        <Link to="/">
          <button className="rounded-sm font-condensed text-white py-1 px-4 bg-gradient-to-r from-pri to-sec ">
            {button_text}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
