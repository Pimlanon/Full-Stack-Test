import User from '../models/user.model.js';

// Fetch all users from the database
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    console.log('Users:', users);

    // Check if there are no users
    if (!users || users.length === 0) {
      return res.status(404).send({ message: 'No users found' });
    }

    return res.json({ data: users });
  } catch (err) {
    return res.status(500).send({ message: 'Failed to get users' });
  }
};

export const createUser = async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await User.create(userData);
    res.json({ data: newUser, message: 'User created successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to create user', error: error.message });
  }
};
