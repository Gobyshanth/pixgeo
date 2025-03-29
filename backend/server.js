import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
import process from 'process';

dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Add root route handler
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    const messages = history.map(msg => ({
      role: msg.isBot ? 'assistant' : 'user',
      content: msg.text
    }));

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful AI assistant for a software development company." },
        ...messages,
        { role: "user", content: message }
      ],
    });

    res.json({ message: completion.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});