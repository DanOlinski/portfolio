export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }

  try {
    const response = await fetch(url, { method: 'GET' });
    const data = await response.text();

    res.setHeader('Content-Type', response.headers.get('Content-Type') || 'text/html');
    res.status(response.status).send(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch' });
  }
}