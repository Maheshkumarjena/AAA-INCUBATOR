// Analytics utility functions for tracking user interactions

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  variant?: string;
  page?: string;
}

// Initialize Google Analytics (if gtag is available)
export const initAnalytics = (measurementId?: string) => {
  if (typeof window === 'undefined') return;
  
  if (measurementId && !window.gtag) {
    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = function() {
      // eslint-disable-next-line prefer-rest-params
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', measurementId);
  }
};

// Track generic events
export const trackEvent = ({ action, category, label, value, variant }: AnalyticsEvent) => {
  // Console logging for development/demo purposes
  console.log('📊 Analytics Event:', {
    action,
    category,
    label,
    value,
    variant,
    timestamp: new Date().toISOString()
  });

  // Send to Google Analytics if available
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      custom_variant: variant
    });
  }

  // Store in localStorage for A/B testing analysis
  try {
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    events.push({
      action,
      category,
      label,
      value,
      variant,
      timestamp: Date.now(),
      sessionId: getSessionId(),
      userId: getUserId()
    });
    
    // Keep only last 100 events
    if (events.length > 100) {
      events.splice(0, events.length - 100);
    }
    
    localStorage.setItem('analytics_events', JSON.stringify(events));
  } catch (error) {
    console.error('Failed to store analytics event:', error);
  }
};

// Specific CTA tracking functions
export const trackCTAClick = (ctaName: string, variant?: string, page?: string) => {
  trackEvent({
    action: 'cta_click',
    category: 'engagement',
    label: ctaName,
    variant,
    page: page || window.location.pathname
  });
};

export const trackHeroCTA = (variant: 'apply_now' | 'learn_more' | 'join_mentor' | 'explore_startups') => {
  trackEvent({
    action: 'hero_cta_click',
    category: 'conversion',
    label: 'hero_section',
    variant
  });
};

export const trackNavigation = (page: string, source?: string) => {
  trackEvent({
    action: 'page_view',
    category: 'navigation',
    label: page,
    variant: source
  });
};

export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent({
    action: success ? 'form_submit_success' : 'form_submit_error',
    category: 'conversion',
    label: formName
  });
};

export const trackSearch = (query: string, resultCount: number, category?: string) => {
  trackEvent({
    action: 'search',
    category: 'engagement',
    label: query,
    value: resultCount,
    variant: category
  });
};

export const trackFileDownload = (fileName: string, fileType: string) => {
  trackEvent({
    action: 'file_download',
    category: 'engagement',
    label: fileName,
    variant: fileType
  });
};

// A/B Testing utilities
export const getABVariant = (testName: string, variants: string[]): string => {
  const userId = getUserId();
  const hash = simpleHash(userId + testName);
  const variantIndex = hash % variants.length;
  
  // Store variant for consistency
  const key = `ab_${testName}`;
  const existingVariant = localStorage.getItem(key);
  
  if (existingVariant && variants.includes(existingVariant)) {
    return existingVariant;
  }
  
  const selectedVariant = variants[variantIndex];
  localStorage.setItem(key, selectedVariant);
  
  // Track variant assignment
  trackEvent({
    action: 'ab_variant_assigned',
    category: 'ab_testing',
    label: testName,
    variant: selectedVariant
  });
  
  return selectedVariant;
};

// Helper functions
const getUserId = (): string => {
  let userId = localStorage.getItem('user_id');
  if (!userId) {
    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('user_id', userId);
  }
  return userId;
};

const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('session_id');
  if (!sessionId) {
    sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('session_id', sessionId);
  }
  return sessionId;
};

const simpleHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

// Analytics reporting functions
export const getAnalyticsReport = (days: number = 7) => {
  try {
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    const cutoff = Date.now() - (days * 24 * 60 * 60 * 1000);
    const recentEvents = events.filter((event: any) => event.timestamp > cutoff);

    const report = {
      totalEvents: recentEvents.length,
      ctaClicks: recentEvents.filter((e: any) => e.action === 'cta_click').length,
      heroCTAClicks: recentEvents.filter((e: any) => e.action === 'hero_cta_click').length,
      formSubmissions: recentEvents.filter((e: any) => e.action.includes('form_submit')).length,
      pageViews: recentEvents.filter((e: any) => e.action === 'page_view').length,
      searches: recentEvents.filter((e: any) => e.action === 'search').length,
      
      // CTA performance breakdown
      ctaPerformance: recentEvents
        .filter((e: any) => e.action === 'hero_cta_click')
        .reduce((acc: any, event: any) => {
          acc[event.variant] = (acc[event.variant] || 0) + 1;
          return acc;
        }, {}),
        
      // Daily breakdown
      dailyBreakdown: recentEvents.reduce((acc: any, event: any) => {
        const date = new Date(event.timestamp).toDateString();
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {})
    };

    console.log('📈 Analytics Report (Last ' + days + ' days):', report);
    return report;
  } catch (error) {
    console.error('Failed to generate analytics report:', error);
    return null;
  }
};
