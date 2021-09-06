import { Link } from 'react-router-dom';

export const Pet = ({ name, animal, breed, images, location, id }) => {
  // Another way of destructuring component props
  // const { name, animal, breed, images, location, id } = props;

  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';

  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="relative block">
      <div>
        <img src={hero} alt={name} />
      </div>
      <div
        className="absolute bottom-0 left-0 
          bg-gradient-to-tr from-white to-transparent 
          pr-2 pt-2 w-full text-center"
      >
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};
export default Pet;
