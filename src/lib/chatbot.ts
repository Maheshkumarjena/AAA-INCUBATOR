// Chatbot utility functions and AI integration

interface ChatResponse {
  response: string;
  confidence?: number;
  suggestions?: string[];
}

// Mock responses for common startup-related queries
const mockResponses: Record<string, string> = {
  // Application & Programs
  'application': 'Our application process is simple! Visit our Apply page to submit your startup details, team information, and pitch deck. The review process typically takes 2-3 weeks.',
  'apply': 'To apply, you\'ll need: a completed application form, pitch deck, financial projections, and team bios. Applications are reviewed quarterly with rolling admissions.',
  'programs': 'We offer three main programs: Pre-Seed (12 weeks), Seed (16 weeks), and Scale-Up (20 weeks). Each program includes mentorship, funding, and network access.',
  'duration': 'Our programs range from 12-20 weeks depending on your startup stage. Pre-Seed is 12 weeks, Seed is 16 weeks, and Scale-Up is 20 weeks.',
  
  // Funding & Investment
  'funding': 'We provide initial funding ranging from $25K to $250K depending on your program track, plus access to our investor network for follow-on rounds.',
  'investment': 'Our investment terms are founder-friendly with standard accelerator equity ranges. We focus on long-term partnerships rather than quick exits.',
  'equity': 'Equity requirements vary by program stage. We typically take 6-8% equity in exchange for funding, mentorship, and network access.',
  'money': 'Initial funding ranges from $25K-$250K based on program track, with additional funding opportunities through our investor network.',
  
  // Mentorship & Support
  'mentor': 'Our mentor network includes 200+ successful entrepreneurs, VCs, and industry experts. You\'ll be matched with 2-3 mentors based on your industry and needs.',
  'support': 'We provide comprehensive support including weekly mentorship sessions, workshops, legal/accounting services, and access to our alumni network.',
  'help': 'I can help you with information about our programs, application process, funding, mentorship, and more. What specific area interests you?',
  
  // Requirements & Eligibility  
  'requirements': 'We look for innovative ideas, strong teams, market potential, and scalability. Previous experience helps but isn\'t required - we value passion and determination.',
  'eligibility': 'We accept startups at various stages from idea to early revenue. Key criteria include team strength, market opportunity, and growth potential.',
  'team': 'While single founders are welcome, we prefer teams of 2-4 co-founders with complementary skills. Technical and business expertise combination is ideal.',
  
  // Timeline & Process
  'timeline': 'Application deadlines are quarterly (March, June, September, December). The review process takes 2-3 weeks, with programs starting the following month.',
  'process': 'After application submission, qualified candidates receive interviews, then final selections are made. Successful applicants join the next cohort.',
  'deadline': 'Application deadlines are March 15, June 15, September 15, and December 15. Rolling applications are accepted between cycles.',
  
  // General
  'location': 'We operate globally with physical hubs in major cities. Many activities can be completed remotely, though some in-person engagement is encouraged.',
  'success': 'Our portfolio companies have raised over $500M in follow-on funding with an 85% success rate (still operating or successfully exited).',
  'demo day': 'Each cohort culminates in Demo Day where startups present to 200+ investors, partners, and industry leaders. Previous Demo Days have led to significant funding rounds.',
};

// Simple keyword matching for mock responses
function findBestMatch(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Check for exact keyword matches
  for (const [keyword, response] of Object.entries(mockResponses)) {
    if (lowerMessage.includes(keyword)) {
      return response;
    }
  }
  
  // Fallback responses for common patterns
  if (lowerMessage.includes('how') && (lowerMessage.includes('apply') || lowerMessage.includes('join'))) {
    return mockResponses['application'];
  }
  
  if (lowerMessage.includes('what') && lowerMessage.includes('program')) {
    return mockResponses['programs'];
  }
  
  if (lowerMessage.includes('when') || lowerMessage.includes('deadline')) {
    return mockResponses['timeline'];
  }
  
  if (lowerMessage.includes('cost') || lowerMessage.includes('fee') || lowerMessage.includes('price')) {
    return 'Our programs are equity-based - we take a small equity stake in exchange for funding and support. No upfront fees required!';
  }
  
  return 'That\'s a great question! For detailed information about our programs, funding, and application process, I recommend visiting our Programs page or scheduling a call with our team. Is there a specific aspect of our incubator you\'d like to know more about?';
}

// Simulate API call with Hugging Face (mock implementation)
export async function getChatResponse(message: string): Promise<ChatResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
  
  try {
    // In production, this would call Hugging Face API
    // For now, using intelligent mock responses
    const response = findBestMatch(message);
    
    return {
      response,
      confidence: 0.85,
      suggestions: [
        'Tell me about your programs',
        'How do I apply?',
        'What funding do you provide?',
        'Who are your mentors?'
      ]
    };
  } catch (error) {
    console.error('Chat API error:', error);
    return {
      response: 'I apologize, but I\'m having trouble processing your request right now. Please try again or contact our support team directly at hello@innovatehub.com.',
      confidence: 0
    };
  }
}

// Real Hugging Face API integration (commented out - requires API key)
/*
export async function getHuggingFaceResponse(message: string): Promise<ChatResponse> {
  const API_KEY = process.env.HUGGING_FACE_API_KEY;
  
  if (!API_KEY) {
    throw new Error('Hugging Face API key not configured');
  }

  const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-large', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: message,
      parameters: {
        max_length: 150,
        temperature: 0.7,
        do_sample: true,
      }
    }),
  });

  if (!response.ok) {
    throw new Error(`Hugging Face API error: ${response.status}`);
  }

  const data = await response.json();
  return {
    response: data.generated_text || 'I apologize, but I couldn\'t generate a proper response.',
    confidence: 0.8
  };
}
*/

// Initialize chatbot (can be used for setup/analytics)
export function initializeChatbot() {
  console.log('🤖 Chatbot initialized with mock AI responses');
  
  // Track chatbot initialization
  if (typeof window !== 'undefined') {
    try {
      const analytics = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      analytics.push({
        action: 'chatbot_initialized',
        category: 'engagement',
        timestamp: Date.now(),
      });
      localStorage.setItem('analytics_events', JSON.stringify(analytics.slice(-100)));
    } catch (error) {
      console.error('Analytics error:', error);
    }
  }
}