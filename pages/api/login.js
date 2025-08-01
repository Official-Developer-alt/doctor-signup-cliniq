export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    // Validate from DB here
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
