// src/pages/api/auth/signup.js
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { username, email, password } = req.body;

  console.log('Received request:', { username, email, password });

  if (!username || !email || !password) {
    res.status(400).json({ message: 'Missing required fields' });
    return;
  }

  try {
    const client = await clientPromise;
    const db = client.db('dirghayu');

    // Check if the user already exists
    const existingUser = await db.collection('users').findOne({ username });
    console.log('Existing user:', existingUser);

    if (existingUser) {
      res.status(409).json({ message: 'Username already exists' });
      return;
    }

    // Insert new user
    const result = await db.collection('users').insertOne({ username, email, password });
    console.log('Insert result:', result);

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
