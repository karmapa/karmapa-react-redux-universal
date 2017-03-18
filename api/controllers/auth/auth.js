export default function auth(req, res) {
  res.json(req.session.user || null);
}
