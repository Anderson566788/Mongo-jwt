import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export async function register(req, reply) {
  const { email, password, adminCode } = req.body
  const role = adminCode === process.env.ADMIN_SECRET ? 'admin' : 'user'
  await User.create({ email, password, role })

  reply.code(201).send({ message: 'User create', role })
}

export async function login(req, reply) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return reply.code(401).send({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
  reply.send({ token });
}
