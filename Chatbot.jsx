export const generateAIResponse = async (message, history) => {
  try {
    const response = await fetch('http://localhost:5173/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'  // Added CORS header
      },
      body: JSON.stringify({ message, history }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw error;
  }
}; 