const validationEmail = (req, res, next) => {
  const { email } = req.body;

  const re = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  if (re.test(email)) {
    next();
  } else {
    res.send({ message: 'Invalid Email!' });
  }
};

export default validationEmail;
