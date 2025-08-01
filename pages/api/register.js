export default function handler(req, res) {
  if (req.method === 'POST') {
    const {
      name,
      email,
      specialization,
      mobile,
      password,
      qualification,
      experience,
    } = req.body;

    // Check for required fields
    if (
      !name ||
      !email ||
      !specialization ||
      !mobile ||
      !password ||
      !qualification ||
      experience === undefined
    ) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Simulate saving to DB
    console.log('New doctor registered:', {
      name,
      email,
      specialization,
      mobile,
      password,
      qualification,
      experience,
    });

    return res.status(200).json({ message: 'Doctor registered successfully' });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
