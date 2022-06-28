const validateRequest = (model) => {
  const error = model.validateSync();
  if (error) {
    return false;
  }
};
export { validateRequest };
