import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { 
  CheckSquare, 
  Users, 
  Settings, 
  Calendar, 
  BarChart2, 
  Inbox, 
  Star, 
  Clock, 
  Menu as MenuIcon, 
  X, 
  Send, 
  PlusCircle
} from 'lucide-react';

// Initial task data
const initialTasks = [
  { id: 'task-1', content: 'Design Homepage', status: 'To Do', priority: 'High', assignee: 'Sarah Chen' },
  { id: 'task-2', content: 'Review Code', status: 'In Progress', priority: 'Medium', assignee: 'Michael Rodriguez' },
  { id: 'task-3', content: 'Launch App', status: 'In Review', priority: 'High', assignee: 'Alex Johnson' },
];

// Team members data
const teamMembers = [
  { id: 1, name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80', status: 'online' },
  { id: 2, name: 'Michael Rodriguez', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80', status: 'online' },
  { id: 3, name: 'Alex Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80', status: 'away' },
];

// Chat messages data
const initialMessages = [
  { id: 1, sender: 'Sarah Chen', content: "Hey team, how is the homepage design coming along?", time: '10:30 AM', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80' },
  { id: 2, sender: 'Michael Rodriguez', content: 'Almost done with the code review. Should be ready by EOD.', time: '10:45 AM', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80' },
];

// Suppress the defaultProps warning for react-beautiful-dnd
// This is a workaround for the warning in the console
const originalConsoleError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('Warning: %s: Support for defaultProps will be removed from memo components')
  ) {
    return;
  }
  originalConsoleError(...args);
};

const TaskFlowPage: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle drag and drop
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setTasks(items);
  };

  // Handle sending a new message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    const newMsg = {
      id: messages.length + 1,
      sender: 'You',
      content: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80'
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="flex h-screen bg-gray-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden fixed top-20 left-4 z-50 bg-[#003366] text-white p-2 rounded-md"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
      </button>

      {/* Sidebar */}
      <div 
        className={`bg-[#003366] text-white w-64 flex-shrink-0 transition-all duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        } ${mobileMenuOpen ? 'fixed inset-y-0 left-0 z-40 md:relative' : 'hidden md:block'}`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <CheckSquare className="h-6 w-6 mr-2" />
              <h1 className="text-xl font-bold">TaskFlow</h1>
            </div>
            <button 
              className="text-white/70 hover:text-white md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center p-2 rounded-md bg-white/10 text-white">
                  <CheckSquare className="h-5 w-5 mr-3" />
                  <span>Tasks</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 rounded-md text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                  <Users className="h-5 w-5 mr-3" />
                  <span>Teams</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 rounded-md text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                  <Calendar className="h-5 w-5 mr-3" />
                  <span>Calendar</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 rounded-md text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                  <BarChart2 className="h-5 w-5 mr-3" />
                  <span>Reports</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 rounded-md text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                  <Inbox className="h-5 w-5 mr-3" />
                  <span>Inbox</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="mt-8">
            <h2 className="text-white/50 uppercase text-xs font-semibold mb-2 px-2">Projects</h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="flex items-center p-2 rounded-md text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-3"></span>
                  <span>Website Redesign</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 rounded-md text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mr-3"></span>
                  <span>Mobile App</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 rounded-md text-white/70 hover:bg-white/10 hover:text-white transition-colors">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-3"></span>
                  <span>Marketing Campaign</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <a href="#" className="flex items-center p-2 rounded-md text-white/70 hover:bg-white/10 hover:text-white transition-colors">
              <Settings className="h-5 w-5 mr-3" />
              <span>Settings</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              className="mr-4 text-gray-500 hover:text-gray-700 hidden md:block"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <MenuIcon size={20} />
            </button>
            <h2 className="text-xl font-semibold text-[#003366]">Website Redesign</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Star size={20} />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <Clock size={20} />
            </button>
            <div className="flex -space-x-2">
              {teamMembers.map(member => (
                <img 
                  key={member.id}
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-8 h-8 rounded-full border-2 border-white"
                  title={member.name}
                />
              ))}
              <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs border-2 border-white">
                +2
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Task List */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-700">Tasks</h3>
              <button className="bg-[#003366] text-white px-4 py-2 rounded-md flex items-center text-sm">
                <PlusCircle size={16} className="mr-2" />
                Add Task
              </button>
            </div>

            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="tasks">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-3"
                  >
                    {tasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow"
                          >
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="font-medium text-gray-800">{task.content}</h4>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                task.priority === 'High' 
                                  ? 'bg-red-100 text-red-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {task.priority}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                task.status === 'To Do' 
                                  ? 'bg-gray-100 text-gray-800' 
                                  : task.status === 'In Progress'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-green-100 text-green-800'
                              }`}>
                                {task.status}
                              </span>
                              <div className="flex items-center">
                                <span className="text-xs text-gray-500 mr-2">Assigned to:</span>
                                <span className="text-xs font-medium text-gray-700">{task.assignee}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>

          {/* Team Collaboration Panel */}
          <div className="w-80 bg-white border-l border-gray-200 flex flex-col overflow-hidden hidden md:flex">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Team</h3>
              <div className="space-y-3">
                {teamMembers.map(member => (
                  <div key={member.id} className="flex items-center">
                    <div className="relative">
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="w-10 h-10 rounded-full"
                      />
                      <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        member.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-700">{member.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{member.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Section */}
            <div className="flex-1 flex flex-col overflow-hidden p-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Team Chat</h3>
              
              {/* Messages */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map(message => (
                  <div key={message.id} className="flex items-start">
                    <img 
                      src={message.avatar} 
                      alt={message.sender} 
                      className="w-8 h-8 rounded-full mr-3 mt-1"
                    />
                    <div>
                      <div className="flex items-baseline">
                        <p className="text-sm font-medium text-gray-700">{message.sender}</p>
                        <span className="ml-2 text-xs text-gray-500">{message.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="flex items-center">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="bg-[#003366] text-white px-3 py-2 rounded-r-md"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskFlowPage;