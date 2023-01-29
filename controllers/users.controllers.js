const { response, request } = require('express');

const usersGet = (req = request, res = response) => {
  const { q, name, apikey, page = 1 } = req.query;
  res.json({
    msg: 'Hello World',
    q,
    name,
    apikey,
    page,
  });
};

const usersPost = (req = request, res = response) => {
  const { name, age } = req.body;
  res.json({
    msg: 'post World',
    name,
    age,
  });
};

const usersPut = (req = request, res = response) => {
  const { id } = req.params;

  res.json({
    msg: 'put World',
    id,
  });
};

const usersDelete = (req = request, res = response) => {
  res.json({
    msg: 'delete World',
  });
};

const usersPatch = (req = request, res = response) => {
  res.json({
    msg: 'patch World',
  });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
  usersPatch,
};
