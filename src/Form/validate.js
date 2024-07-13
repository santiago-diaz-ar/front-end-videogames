const validate = ({ name, description, plataform, lanzamiento, rating }) => {
  const errors = {};

  if (name?.length > 5) {
    errors.name = "debe ser menor a 5 letras";
  }

  if (description?.length > 20) {
    errors.description = "debe contener menos de 10 letras";
  }

  if (lanzamiento?.length > 5) {
    errors.plataform = "debe contener menos de 5 caracteres";
  }

  if (plataform?.length > 5) {
    errors.plataform = "debe contener al menos 5 caracteres";
  }

  return errors;
};
export default validate;
