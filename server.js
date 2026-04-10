const path = require('path');
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

// ── Gemini Setup ──────────────────────────────────────────────────────────────
function getGeminiApiKey() {
    const apiKey = process.env.GEMINI_API_KEY?.trim();

    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
        return null;
    }

    return apiKey;
}

const SYSTEM_INSTRUCTION = `You are an AI academic assistant named "APR" — a friendly, knowledgeable tutor built into the AFTER-CLASS engineering education platform.

Your expertise covers all core engineering disciplines including:
- Computer Science (DSA, DBMS, OS, CN, ML, AI, Web Technologies, Cloud Computing, Compiler Design)
- Mathematics (Calculus, Matrices, Statistics, Probability, Computational Mathematics)
- Physics & Chemistry (Engineering Physics, Engineering Chemistry)
- Electrical & Electronics Engineering
- General Engineering (Materials & Mechanics, Environmental Studies, Engineering Economics)

Guidelines for your responses:
1. Provide clear, structured explanations with headings, bullet points, and numbered steps.
2. Include code examples when relevant (use proper formatting with language tags).
3. Break complex topics into digestible parts.
4. Give real-world analogies to make concepts intuitive.
5. When solving problems, show step-by-step working.
6. For exam preparation, provide key points, formulas, and common question patterns.
7. Be encouraging and supportive — students are here to learn.
8. If you're unsure about something, say so honestly.
9. Keep responses concise but thorough — avoid unnecessary padding.
10. Use markdown formatting (**bold**, \`code\`, lists, etc.) for readability.`;

// ── Chat Endpoint ─────────────────────────────────────────────────────────────
app.post('/api/chat', async (req, res) => {
    try {
        const { message, history } = req.body;
        const apiKey = getGeminiApiKey();

        if (!message || typeof message !== 'string') {
            return res.status(400).json({ error: 'Message is required.' });
        }

        if (!apiKey) {
            return res.status(503).json({
                error: 'Gemini API key is not configured yet. Add it in server/.env and restart the backend.',
            });
        }

        const genAI = new GoogleGenerativeAI(apiKey);

        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
            systemInstruction: SYSTEM_INSTRUCTION,
        });

        // Convert frontend history (OpenAI format) to Gemini format
        const geminiHistory = (history || []).map(msg => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }],
        }));

        const chat = model.startChat({ history: geminiHistory });
        const result = await chat.sendMessage(message);
        const reply = result.response.text();

        res.json({ reply });
    } catch (error) {
        console.error('Gemini API Error:', error.message || error);

        if (error.message?.includes('API_KEY')) {
            return res.status(401).json({
                error: 'Invalid or missing Gemini API key. Please check your .env file.',
            });
        }

        res.status(500).json({
            error: 'Failed to process the request. Please try again later.',
        });
    }
});

// ── Health Check ──────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        engine: 'Gemini 2.0 Flash',
        apiKeyConfigured: Boolean(getGeminiApiKey()),
    });
});

// ── Start Server ──────────────────────────────────────────────────────────────
app.listen(port, () => {
    console.log(`\n🚀 APR Backend running on http://localhost:${port}`);
    console.log(`   Engine: Google Gemini 2.0 Flash`);
    console.log(`   Endpoint: POST /api/chat\n`);
});

