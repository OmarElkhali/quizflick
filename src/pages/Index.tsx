import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { QuizForm } from '@/components/QuizForm';
import { QuizCard } from '@/components/QuizCard';
import { Separator } from '@/components/ui/separator';
import { useQuiz } from '@/hooks/useQuiz';

const Index = () => {
  const { quizzes } = useQuiz();
  const recentQuizzes = quizzes.slice(0, 3); // Take just the most recent quizzes
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <section className="py-16 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Generate Your Quiz</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Upload your course materials, set the number of questions, and let our AI create a personalized quiz
              </p>
            </div>
            
            <QuizForm />
          </div>
        </section>
        
        {recentQuizzes.length > 0 && (
          <section className="py-16 px-6">
            <div className="container mx-auto max-w-6xl">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Recent Quizzes</h2>
                <a 
                  href="/history" 
                  className="text-primary font-medium underline-animation"
                >
                  View all
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentQuizzes.map((quiz, index) => (
                  <QuizCard 
                    key={quiz.id}
                    id={quiz.id}
                    title={quiz.title}
                    description={quiz.description}
                    questions={quiz.questions.length}
                    completionRate={quiz.completionRate}
                    date={quiz.createdAt}
                    duration={quiz.duration}
                    participants={quiz.participants}
                    isHistory={true}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <footer className="bg-muted/30 py-8 px-6 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">QuizFlick</h3>
              <p className="text-sm text-muted-foreground mt-1">
                AI-Powered Learning Made Simple
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground underline-animation">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground underline-animation">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground underline-animation">
                Contact
              </a>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <p className="text-xs text-muted-foreground text-center">
            © 2023 QuizFlick. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
