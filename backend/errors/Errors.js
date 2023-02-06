export const error404 = (req, res) => res.status(404).send('404: The requested URL was not found!');

export const error500 = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500: Internal server error!');
};
