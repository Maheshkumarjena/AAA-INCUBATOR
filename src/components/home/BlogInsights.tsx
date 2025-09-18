import { ContentSection } from '@/components/layout/content-section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

const posts = [
  { title: "From Idea to Impact: A Founder's Journey", excerpt: "How one startup transformed their vision into a thriving business with global impact", category: "Founder Spotlight", date: "Aug 15, 2024", readTime: "5 min read" },
  { title: "The Future of Fundraising in Emerging Markets", excerpt: "New trends and strategies for securing capital in developing economies", category: "Fundraising Tips", date: "Aug 8, 2024", readTime: "8 min read" },
  { title: "AI Revolution: Opportunities for African Startups", excerpt: "How artificial intelligence is creating new possibilities across industries", category: "Tech Trends", date: "Jul 28, 2024", readTime: "6 min read" },
];

export const BlogInsights = () => {
  return (
    <ContentSection
      title="Blog & Insights"
      description="Learn from our experts and stay updated with the latest trends"
      className="max-w-full mx-auto mt-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-primary" />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">{post.category}</span>
              <h3 className="font-bold text-xl mt-2 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-muted-foreground mt-3">{post.excerpt}</p>
              <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button variant="outline" onClick={() => trackCTAClick('view_all_posts', 'blog', '/')}>View All Posts</Button>
      </div>
    </ContentSection>
  );
};

export default BlogInsights;
