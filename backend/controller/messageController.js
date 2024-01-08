import Message from '../model/message.js';

export const sendMessage = async (req, res) => {
  const { sender, receiver, message } = req.body;

  try {
    const newMessage = new Message({ sender, receiver, message });
    await newMessage.save();
    res.json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
