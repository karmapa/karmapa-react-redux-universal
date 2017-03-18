export default async function logout(req, res) {
  req.session.destroy(() => {
    req.session = null;
    res.json(null);
  });
}
