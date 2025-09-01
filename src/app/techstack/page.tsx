'use client';

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiGraphql,
  SiKotlin,
  SiSwift,
  SiLaravel,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa'; // Font Awesome version
import { FaCode } from 'react-icons/fa';

const techStack = [
  { name: 'Java', icon: FaJava, url: 'https://www.java.com/' },
  { name: 'React', icon: SiReact, url: 'https://react.dev/' },
  { name: 'Next.js', icon: SiNextdotjs, url: 'https://nextjs.org/' },
  { name: 'TypeScript', icon: SiTypescript, url: 'https://www.typescriptlang.org/' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, url: 'https://tailwindcss.com/' },
  { name: 'Node.js', icon: SiNodedotjs, url: 'https://nodejs.org/' },
  { name: 'PostgreSQL', icon: SiPostgresql, url: 'https://www.postgresql.org/' },
  { name: 'MySQL', icon: SiMysql, url: 'https://www.mysql.com/' },
  { name: 'Supabase', icon: SiSupabase, url: 'https://supabase.com/' },
  // { name: 'GraphQL', icon: SiGraphql, url: 'https://graphql.org/' },
  { name: 'Kotlin', icon: SiKotlin, url: 'https://kotlinlang.org/' },
  { name: 'Swift', icon: SiSwift, url: 'https://developer.apple.com/swift/' },
  { name: 'Laravel', icon: SiLaravel, url: 'https://laravel.com/' },
  {
    name: 'Livewire',
    icon: FaCode,
    url: 'https://laravel-livewire.com/',
  },
  {
    name: 'Storyboard',
    icon: FaCode,
    url: 'https://developer.apple.com/documentation/xcode/storyboards/',
  },
];

export default function Techstack() {
  return (
    <section id="techstack" className="space-y-6">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Tech Stack</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {techStack.map(({ name, icon: Icon, url }) => (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:scale-105 transition-transform hover:shadow-md"
            >
              <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
              <span className="text-center text-sm font-medium text-gray-800 dark:text-gray-200">
                {name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
