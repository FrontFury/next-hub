'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    role: 'Developer',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex-1 bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 backdrop-blur-md">
        
        {/* Left Side: Visual Showcase Banner */}
        <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full backdrop-blur-md mb-4">
              Join 10,000+ Creators
            </span>
            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Share your dev journey with the world.
            </h2>
            <p className="text-blue-100 text-sm mt-3">
              Build your public developer profile, post project updates, and get discovered.
            </p>
          </div>

          {/* Highlights List */}
          <div className="relative z-10 space-y-3 my-8">
            <div className="flex items-center gap-3 text-sm text-white/90">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs font-bold">✓</span>
              Personal Developer Story Feed
            </div>
            <div className="flex items-center gap-3 text-sm text-white/90">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs font-bold">✓</span>
              Showcase Side-Projects & Milestones
            </div>
            <div className="flex items-center gap-3 text-sm text-white/90">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs font-bold">✓</span>
              Network with Global Engineers
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-white/20 text-xs text-blue-200">
            Free forever for individual creators.
          </div>
        </div>

        {/* Right Side: Interactive Registration Form */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white">Create your account</h3>
            <p className="text-slate-400 text-sm mt-1">Get started in less than 2 minutes.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Sarah Connor"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="@sarah_dev"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="sarah@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Primary Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Fullstack Engineer">Fullstack Engineer</option>
                <option value="Indie Hacker / Founder">Indie Hacker / Founder</option>
                <option value="Student / Learner">Student / Learner</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 mt-2 text-sm"
            >
              Join Dev Story
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-6">
            Already registered?{' '}
            <Link href="/login" className="text-blue-400 hover:text-blue-300 font-semibold">
              Sign in here
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}