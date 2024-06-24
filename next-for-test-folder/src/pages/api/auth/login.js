// pages/api/auth/login.js
import clientPromise from '../../../src/lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end(); // Method Not Allowed
    return;
  }

  const { username, password } = req.body;
  const client = await clientPromise;
  const db = client.db('dirghayu');

  // Your login logic here
  // Example:
  const user = await db.collection('users').findOne({ username, password });
  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
