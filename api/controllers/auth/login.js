export default async function login(req, res) {

  const {session} = req;
  session.user = {name: req.body.name};

  return res.json(session.user);
}
