import { useState } from 'react';
import { Accordion, AccordionItem, Button } from '@nextui-org/react';
// import CreateQuizForm from '@/components/create-quiz-form';
import QuizManagement from '@/components/EducatorDashboard/QuizManagement';
import QuizCreate from '@/components/Quizzes/QuizzCreate';

const EducatorDashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('quizzes'); // Default to 'quizzes'
  const [showCreateQuizForm, setShowCreateQuizForm] = useState(false);
  const [showQuizManagement, setShowQuizManagement] = useState(false);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleCreateQuizClick = () => {
    setShowQuizManagement(false);
    setShowCreateQuizForm(true);
  };

  const handleQuizManagementClick = () => {
    setShowCreateQuizForm(false);
    setShowQuizManagement(true);
  }
  return (
    <div className="flex h-screen">
      {/* Left menu */}
      <div className="w-1/4  flex flex-col justify-start p-4">
        <Accordion>
          <AccordionItem title="Quizzes">
            <Button ghost onClick={() => handleMenuClick('quizzes')} block>
              Personal Quizzes
            </Button>
            <Button ghost onClick={handleCreateQuizClick} block>
              Create New Quiz
            </Button>
            <Button ghost onClick={handleQuizManagementClick} block>
              Quiz Management
            </Button>
            {/* Add more buttons or content related to quizzes */}
          </AccordionItem>
          <AccordionItem title="Groups">
            <Button ghost onClick={() => handleMenuClick('groups')} block>
              Groups
            </Button>
            {/* Add more buttons or content related to groups */}
          </AccordionItem>
          <AccordionItem title="Students">
            <Button ghost onClick={() => handleMenuClick('students')} block>
              Students
            </Button>
            {/* Add more buttons or content related to students */}
          </AccordionItem>
          <AccordionItem title="Leaderboard">
            <Button ghost onClick={() => handleMenuClick('leaderboard')} block>
              Leaderboard
            </Button>
            {/* Add more buttons or content related to leaderboard */}
          </AccordionItem>
        </Accordion>
      </div>

      {/* Right content area */}
      <div className="w-3/4 p-4">
        {/* Render different content based on selected menu */}
        {selectedMenu === 'quizzes' && (
          <div>
            <h2>Personal Quizzes</h2>
            {/* Render personal quizzes */}
          </div>
        )}
        {selectedMenu === 'groups' && (
          <div>
            <h2>Groups</h2>
            {/* Render groups */}
          </div>
        )}
        {selectedMenu === 'students' && (
          <div>
            <h2>Students</h2>
            {/* Render students */}
          </div>
        )}
        {selectedMenu === 'leaderboard' && (
          <div>
            <h2>Leaderboard</h2>
            {/* Render leaderboard */}
          </div>
        )}
        {selectedMenu === 'quizzes' && showCreateQuizForm && <QuizCreate />}
        {selectedMenu === 'quizzes' && showQuizManagement && <QuizManagement />}
        {/* Default content */}
        {/* Render default content */}
      </div>
    </div>
  );
};

export default EducatorDashboard;