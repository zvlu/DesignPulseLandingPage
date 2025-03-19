import React, { useState } from 'react';
import { 
  Activity, 
  Dumbbell, 
  Apple, 
  BarChart2, 
  User, 
  Settings, 
  Calendar, 
  Heart, 
  Clock, 
  Plus, 
  ChevronRight, 
  MoreVertical,
  Utensils,
  Droplet,
  Flame
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FitCorePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Workout plan data
  const workoutPlan = [
    { day: 'Monday', activity: 'Cardio', duration: '45 min', completed: true },
    { day: 'Tuesday', activity: 'Upper Body', duration: '60 min', completed: true },
    { day: 'Wednesday', activity: 'Rest Day', duration: '0 min', completed: true },
    { day: 'Thursday', activity: 'Lower Body', duration: '60 min', completed: false },
    { day: 'Friday', activity: 'HIIT', duration: '30 min', completed: false },
    { day: 'Saturday', activity: 'Yoga', duration: '45 min', completed: false },
    { day: 'Sunday', activity: 'Rest Day', duration: '0 min', completed: false },
  ];

  // Nutrition log data
  const nutritionLog = [
    { 
      id: 1, 
      meal: 'Breakfast', 
      food: 'Oatmeal with berries and honey', 
      calories: 320, 
      protein: 12, 
      carbs: 54, 
      fat: 6,
      time: '7:30 AM'
    },
    { 
      id: 2, 
      meal: 'Snack', 
      food: 'Greek yogurt with almonds', 
      calories: 220, 
      protein: 18, 
      carbs: 12, 
      fat: 10,
      time: '10:30 AM'
    },
    { 
      id: 3, 
      meal: 'Lunch', 
      food: 'Grilled chicken salad with olive oil dressing', 
      calories: 450, 
      protein: 35, 
      carbs: 15, 
      fat: 25,
      time: '1:00 PM'
    },
    { 
      id: 4, 
      meal: 'Snack', 
      food: 'Protein shake', 
      calories: 180, 
      protein: 25, 
      carbs: 10, 
      fat: 3,
      time: '4:00 PM'
    },
  ];

  // Chart data for progress
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Calories Burned',
        data: [320, 480, 150, 0, 0, 0, 0],
        backgroundColor: '#003366',
        borderRadius: 6,
      },
      {
        label: 'Steps',
        data: [8500, 10200, 7800, 0, 0, 0, 0],
        backgroundColor: '#4d94ff',
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Health metrics
  const healthMetrics = [
    { name: 'Weight', value: '165 lbs', change: '-2 lbs', trend: 'down' },
    { name: 'Body Fat', value: '18%', change: '-0.5%', trend: 'down' },
    { name: 'Resting HR', value: '62 bpm', change: '-3 bpm', trend: 'down' },
    { name: 'Sleep', value: '7.5 hrs', change: '+0.5 hrs', trend: 'up' },
  ];

  // Daily goals
  const dailyGoals = [
    { name: 'Calories', target: 2200, current: 1170, icon: <Flame className="h-5 w-5 text-orange-500" /> },
    { name: 'Water', target: 8, current: 5, icon: <Droplet className="h-5 w-5 text-blue-500" /> },
    { name: 'Protein', target: 140, current: 90, icon: <Utensils className="h-5 w-5 text-purple-500" /> },
    { name: 'Steps', target: 10000, current: 7800, icon: <Activity className="h-5 w-5 text-green-500" /> },
  ];

  // Toggle sidebar on mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 font-poppins" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Mobile sidebar toggle */}
      <button 
        className="md:hidden fixed bottom-4 right-4 z-50 bg-[#003366] text-white p-3 rounded-full shadow-lg"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <ChevronRight size={24} /> : <Activity size={24} />}
      </button>

      {/* Sidebar */}
      <div 
        className={`bg-[#003366] text-white w-64 flex-shrink-0 transition-all duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        } fixed md:relative h-full z-40`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center space-x-3 mb-8">
            <Activity className="h-8 w-8" />
            <h1 className="text-2xl font-bold">FitCore</h1>
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <button 
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                    activeTab === 'dashboard' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                  onClick={() => setActiveTab('dashboard')}
                >
                  <Activity className="h-5 w-5 mr-3" />
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                    activeTab === 'workouts' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                  onClick={() => setActiveTab('workouts')}
                >
                  <Dumbbell className="h-5 w-5 mr-3" />
                  <span>Workouts</span>
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                    activeTab === 'nutrition' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                  onClick={() => setActiveTab('nutrition')}
                >
                  <Apple className="h-5 w-5 mr-3" />
                  <span>Nutrition</span>
                </button>
              </li>
              <li>
                <button 
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                    activeTab === 'progress' ? 'bg-white/20' : 'hover:bg-white/10'
                  }`}
                  onClick={() => setActiveTab('progress')}
                >
                  <BarChart2 className="h-5 w-5 mr-3" />
                  <span>Progress</span>
                </button>
              </li>
            </ul>
          </nav>

          <div className="mt-auto">
            <div className="border-t border-white/20 pt-4 mt-4">
              <button className="flex items-center w-full p-3 rounded-lg hover:bg-white/10 transition-colors">
                <User className="h-5 w-5 mr-3" />
                <span>Profile</span>
              </button>
              <button className="flex items-center w-full p-3 rounded-lg hover:bg-white/10 transition-colors">
                <Settings className="h-5 w-5 mr-3" />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-[#003366]">
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'workouts' && 'Workout Plan'}
                {activeTab === 'nutrition' && 'Nutrition Log'}
                {activeTab === 'progress' && 'Progress Tracking'}
              </h2>
              <p className="text-gray-500 text-sm">Wednesday, June 12, 2025</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Calendar className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Bell className="h-5 w-5" />
              </button>
              <div className="h-8 w-8 rounded-full bg-[#003366] text-white flex items-center justify-center">
                JS
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="p-4 md:p-6">
            {/* Daily Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {dailyGoals.map((goal, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      {goal.icon}
                      <h3 className="font-medium text-gray-700 ml-2">{goal.name}</h3>
                    </div>
                    <span className="text-xs text-gray-500">Daily Goal</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-2xl font-bold text-[#003366]">{goal.current}</span>
                      <span className="text-gray-500 text-sm ml-1">/ {goal.target} {goal.name === 'Water' ? 'glasses' : goal.name === 'Calories' || goal.name === 'Protein' ? 'g' : ''}</span>
                    </div>
                    <div className="w-full max-w-[100px] bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-[#003366] h-2.5 rounded-full" 
                        style={{ width: `${Math.min(100, (goal.current / goal.target) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Workout Plan */}
              <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-[#003366]">Today's Workout</h3>
                  <button className="text-[#003366] hover:text-blue-700 text-sm font-medium">View All</button>
                </div>
                <div className="bg-[#003366]/5 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[#003366]">Rest Day</h4>
                    <span className="text-xs bg-blue-100 text-[#003366] px-2 py-1 rounded-full">Wednesday</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Take time to recover and prepare for tomorrow's workout.</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>0 min</span>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-medium text-gray-700 mb-3">Coming Up</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#003366] mr-2"></div>
                        <span className="text-gray-700">Lower Body</span>
                      </div>
                      <span className="text-sm text-gray-500">Tomorrow</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#003366] mr-2"></div>
                        <span className="text-gray-700">HIIT</span>
                      </div>
                      <span className="text-sm text-gray-500">Friday</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nutrition Log */}
              <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-[#003366]">Today's Meals</h3>
                  <button className="text-[#003366] hover:text-blue-700 text-sm font-medium">Add Meal</button>
                </div>
                <div className="space-y-4">
                  {nutritionLog.slice(0, 3).map((meal) => (
                    <div key={meal.id} className="flex justify-between items-start pb-3 border-b border-gray-100">
                      <div>
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-700">{meal.meal}</span>
                          <span className="text-xs text-gray-500 ml-2">{meal.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{meal.food}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-[#003366]">{meal.calories} cal</span>
                        <div className="flex items-center text-xs text-gray-500 mt-1 justify-end">
                          <span className="mr-2">P: {meal.protein}g</span>
                          <span className="mr-2">C: {meal.carbs}g</span>
                          <span>F: {meal.fat}g</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-center text-sm text-[#003366] hover:text-blue-700 font-medium">
                  View All Meals
                </button>
              </div>

              {/* Progress Chart */}
              <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-[#003366]">Weekly Progress</h3>
                  <div className="flex space-x-2">
                    <button className="text-xs bg-[#003366] text-white px-2 py-1 rounded-md">Week</button>
                    <button className="text-xs text-gray-500 hover:bg-gray-100 px-2 py-1 rounded-md">Month</button>
                  </div>
                </div>
                <div className="h-64">
                  <Bar data={chartData} options={chartOptions} />
                </div>
              </div>
            </div>

            {/* Health Metrics */}
            <div className="mt-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-[#003366]">Health Metrics</h3>
                  <button className="text-[#003366] hover:text-blue-700 text-sm font-medium">Update</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {healthMetrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm text-gray-500 mb-1">{metric.name}</h4>
                      <div className="flex items-end">
                        <span className="text-xl font-bold text-gray-800">{metric.value}</span>
                        <span className={`ml-2 text-xs ${metric.trend === 'down' ? 'text-green-500' : 'text-red-500'}`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workouts Tab */}
        {activeTab === 'workouts' && (
          <div className="p-4 md:p-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-[#003366]">Weekly Workout Plan</h3>
                <button className="bg-[#003366] text-white px-4 py-2 rounded-lg text-sm flex items-center">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Workout
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Day</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Workout</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Duration</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workoutPlan.map((workout, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4">
                          <span className="font-medium text-gray-800">{workout.day}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-gray-700">{workout.activity}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-gray-700">{workout.duration}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            workout.completed 
                              ? 'bg-green-100 text-green-800' 
                              : workout.day === 'Wednesday' || workout.day === 'Sunday'
                                ? 'bg-gray-100 text-gray-800'
                                : 'bg-blue-100 text-blue-800'
                          }`}>
                            {workout.completed 
                              ? 'Completed' 
                              : workout.day === 'Wednesday' || workout.day === 'Sunday'
                                ? 'Rest Day'
                                : 'Upcoming'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button className="text-gray-500 hover:text-gray-700">
                            <MoreVertical className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Nutrition Tab */}
        {activeTab === 'nutrition' && (
          <div className="p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="text-sm text-gray-500 mb-1">Daily Calories</h3>
                <div className="flex items-end">
                  <span className="text-2xl font-bold text-[#003366]">1,170</span>
                  <span className="text-sm text-gray-500 ml-2">/ 2,200 cal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-[#003366] h-2.5 rounded-full" style={{ width: '53%' }}></div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="text-sm text-gray-500 mb-1">Protein</h3>
                <div className="flex items-end">
                  <span className="text-2xl font-bold text-[#003366]">90g</span>
                  <span className="text-sm text-gray-500 ml-2">/ 140g</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-[#003366] h-2.5 rounded-full" style={{ width: '64%' }}></div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="text-sm text-gray-500 mb-1">Carbs</h3>
                <div className="flex items-end">
                  <span className="text-2xl font-bold text-[#003366]">91g</span>
                  <span className="text-sm text-gray-500 ml-2">/ 220g</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-[#003366] h-2.5 rounded-full" style={{ width: '41%' }}></div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="text-sm text-gray-500 mb-1">Fat</h3>
                <div className="flex items-end">
                  <span className="text-2xl font-bold text-[#003366]">44g</span>
                  <span className="text-sm text-gray-500 ml-2">/ 73g</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-[#003366] h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-[#003366]">Today's Nutrition Log</h3>
                <button className="bg-[#003366] text-white px-4 py-2 rounded-lg text-sm flex items-center">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Food
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Meal</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Food</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Time</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Calories</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Protein</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Carbs</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Fat</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nutritionLog.map((meal) => (
                      <tr key={meal.id} className="border-b border-gray-100">
                        <td className="py-3 px-4">
                          <span className="font-medium text-gray-800">{meal.meal}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-gray-700">{meal.food}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-gray-500 text-sm">{meal.time}</span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className="font-medium text-gray-800">{meal.calories}</span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className="text-gray-700">{meal.protein}g</span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className="text-gray-700">{meal.carbs}g</span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className="text-gray-700">{meal.fat}g</span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button className="text-gray-500 hover:text-gray-700">
                            <MoreVertical className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <div className="p-4 md:p-6">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-[#003366]">Progress Chart</h3>
                <div className="flex space-x-2">
                  <button className="text-xs bg-[#003366] text-white px-2 py-1 rounded-md">Week</button>
                  <button className="text-xs text-gray-500 hover:bg-gray-100 px-2 py-1 rounded-md">Month</button>
                  <button className="text-xs text-gray-500 hover:bg-gray-100 px-2 py-1 rounded-md">Year</button>
                </div>
              </div>
              <div className="h-80">
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-[#003366] mb-4">Body Measurements</h3>
                <div className="space-y-4">
                  {healthMetrics.map((metric, index) => (
                     <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${metric.trend === 'down' ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
                        <span className="text-gray-700">{metric.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-800 mr-2">{metric.value}</span>
                        <span className={`text-xs ${metric.trend === 'down' ? 'text-green-500' : 'text-red-500'}`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 text-sm text-[#003366] hover:text-blue-700 font-medium">
                  Update Measurements
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-[#003366] mb-4">Achievements</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#003366]/5 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                    <div className="bg-[#003366]/10 p-3 rounded-full mb-3">
                      <Flame className="h-6 w-6 text-[#003366]" />
                    </div>
                    <h4 className="font-medium text-gray-800 mb-1">3-Day Streak</h4>
                    <p className="text-xs text-gray-500">Keep it up!</p>
                  </div>
                  <div className="bg-[#003366]/5 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                    <div className="bg-[#003366]/10 p-3 rounded-full mb-3">
                      <Dumbbell className="h-6 w-6 text-[#003366]" />
                    </div>
                    <h4 className="font-medium text-gray-800 mb-1">10 Workouts</h4>
                    <p className="text-xs text-gray-500">Completed</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                    <div className="bg-gray-200 p-3 rounded-full mb-3">
                      <Heart className="h-6 w-6 text-gray-400" />
                    </div>
                    <h4 className="font-medium text-gray-400 mb-1">5% Body Fat</h4>
                    <p className="text-xs text-gray-500">In progress</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                    <div className="bg-gray-200 p-3 rounded-full mb-3">
                      <Activity className="h-6 w-6 text-gray-400" />
                    </div>
                    <h4 className="font-medium text-gray-400 mb-1">Marathon</h4>
                    <p className="text-xs text-gray-500">In progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Bell icon component
const Bell = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

export default FitCorePage;