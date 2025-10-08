import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className="pt-24 px-6 md:px-20 max-w-6xl mx-auto mb-16">
   
    <div className="grid md:grid-cols-2 gap-8 items-center bg-white shadow-sm rounded-lg p-8">
      <div className="flex justify-center">
        <img src="https://cdn-icons-png.flaticon.com/512/4324/4324939.png" alt="App Icon" className="w-48 h-48 object-contain" />
      </div>

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">SmPlan: ToDo List With Reminder</h1>
        <p className="text-gray-500 mt-1">Developed by <span className="text-indigo-600 font-medium">productive.io</span></p>

        <div className="mt-6 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-green-600 text-xl">⬇</div>
            <p className="text-gray-600 text-sm">Downloads</p>
            <p className="text-2xl font-semibold text-gray-800">8M</p>
          </div>
          <div>
            <div className="text-yellow-500 text-xl">⭐</div>
            <p className="text-gray-600 text-sm">Average Ratings</p>
            <p className="text-2xl font-semibold text-gray-800">4.9</p>
          </div>
          <div>
            <div className="text-purple-600 text-xl">💬</div>
            <p className="text-gray-600 text-sm">Total Reviews</p>
            <p className="text-2xl font-semibold text-gray-800">54K</p>
          </div>
        </div>

        <button className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg">
          Install Now (291 MB)
        </button>
      </div>
    </div>

  
   
      <h2 className="border-2 h-20 text-xl font-bold mb-4">Ratings</h2>
      

  
    <div className="mt-14">
      <h2 className="text-xl font-bold mb-4">Description</h2>
      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
        </p>
        <p>
          A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics not only show how much time you've worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
        </p>
        <p>
          For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
        </p>
      </div>
    </div>
  </div>

        </div>
    );
};

export default ErrorPage;