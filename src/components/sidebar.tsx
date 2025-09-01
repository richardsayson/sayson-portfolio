'use client';

import { useState } from 'react';
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  FolderIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

const sections = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'about', label: 'About Me', icon: UserIcon },
  { id: 'experience', label: 'Experience', icon: BriefcaseIcon },
  { id: 'projects', label: 'Projects', icon: FolderIcon },
  { id: 'techstack', label: 'Tech Stack', icon: CpuChipIcon },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-md z-50 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end p-2">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {isOpen ? (
            <ChevronLeftIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          ) : (
            <ChevronRightIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col px-2 mt-6 space-y-2">
        {sections.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md transition group"
          >
            <Icon className="h-5 w-5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            {isOpen && <span>{label}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
}
