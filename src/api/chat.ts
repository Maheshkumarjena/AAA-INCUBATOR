// API route for chat functionality
// This would be /app/api/chat/route.ts in Next.js, but adapted for Vite

import { getChatResponse } from '../lib/chatbot';

export interface ChatRequest {
  message: string;
}

export interface ChatApiResponse {
  response: string;
  suggestions?: string[];
  error?: string;
}

// Mock API endpoint - in production this would be a proper API route
export async function handleChatRequest(request: ChatRequest): Promise<ChatApiResponse> {
  try {
    const { message } = request;
    
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return {
        response: 'I didn\'t receive a message. Could you please try again?',
        error: 'Invalid message format'
      };
    }

    if (message.length > 500) {
      return {
        response: 'That\'s quite a long message! Could you break it down into smaller questions? I\'ll be happy to help with each one.',
        error: 'Message too long'
      };
    }

    const result = await getChatResponse(message);
    
    return {
      response: result.response,
      suggestions: result.suggestions
    };
    
  } catch (error) {
    console.error('Chat API error:', error);
    return {
      response: 'I\'m experiencing some technical difficulties. Please try again in a moment, or contact our support team directly.',
      error: 'Internal server error'
    };
  }
}

// Simulate fetch API for the chatbot component
// In a real Vite app, you might use a different backend setup
if (typeof window !== 'undefined') {
  // Override fetch for /api/chat endpoints
  const originalFetch = window.fetch;
  
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input.toString();
    
    if (url === '/api/chat' && init?.method === 'POST') {
      try {
        const body = init.body ? JSON.parse(init.body as string) : {};
        const result = await handleChatRequest(body);
        
        return new Response(JSON.stringify(result), {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({
          response: 'Sorry, I encountered an error processing your request.',
          error: 'API processing error'
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
    }
    
    // For all other requests, use the original fetch
    return originalFetch(input, init);
  };
}