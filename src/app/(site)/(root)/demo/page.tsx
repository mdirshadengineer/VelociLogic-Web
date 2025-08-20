'use client';

import {
  ArrowRight,
  BarChart3,
  Globe,
  Loader2,
  Sparkles,
  Workflow,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { TestSetup as TestSetupComponent } from './_components/testsetup';

import React, { useState } from 'react';

// shadcn toast

const demoFeatures = [
  {
    icon: Sparkles,
    title: 'Visual Builder',
    description:
      'Drag-and-drop to create stunning websites and apps instantly.',
  },
  {
    icon: Workflow,
    title: 'Automation',
    description: 'Automate tasks and workflows with simple visual logic.',
  },
  {
    icon: Globe,
    title: 'Instant Publishing',
    description: 'Go live in seconds with built-in hosting and deployment.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Track visitors and engagement with real-time dashboards.',
  },
];

const TestSetup: React.FC = () => {
  const router = useRouter();
  const [isSettingUp, setIsSettingUp] = useState(false);

  const handleComplete = () => {
    setIsSettingUp(true);
    toast.success('Test environment is being created!', {
      description: 'Hang tight, your demo workspace will be ready in a moment.',
      duration: 2500,
      icon: <Sparkles className="text-blue-600" />,
    });

    setTimeout(() => {
      setIsSettingUp(false);
      toast.success('Demo environment ready!', {
        description: 'Redirecting you to your dashboard.',
        duration: 1800,
        icon: <Globe className="text-indigo-600" />,
      });
      router.push('/app');
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-12 sm:py-16 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
              🚀 Demo Mode
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            VelociLogic Demo
          </h1>
          <p className="mb-8 text-base text-gray-600 sm:text-lg dark:text-gray-300">
            Set up a test environment and explore the website builder’s
            features.
          </p>
        </div>
        {/* Floating Icon */}
        <div className="absolute top-10 left-4 hidden opacity-20 sm:left-10 sm:block">
          <Sparkles className="h-8 w-8 text-blue-500 dark:text-blue-400" />
        </div>
        <div className="absolute top-24 right-4 hidden opacity-20 sm:right-10 sm:block">
          <Globe className="h-10 w-10 text-indigo-500 dark:text-indigo-400" />
        </div>
      </section>

      {/* Features & Demo Setup Side by Side */}
      <section className="bg-white py-8 sm:py-12 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-2">
            {/* Features Section */}
            <div>
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                  What Can You Try in Demo?
                </h2>
                <p className="text-base text-gray-600 sm:text-lg dark:text-gray-300">
                  Experience core features hands-on.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {demoFeatures.map(feature => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-xl sm:p-6 dark:border-gray-800 dark:bg-neutral-900 dark:hover:border-blue-400"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                      <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-gray-900 sm:text-lg dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 sm:text-base dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Demo Setup Section */}
            <div className="mt-8 flex items-center justify-center lg:mt-0">
              <div className="relative w-full max-w-md rounded-xl bg-white p-5 shadow-lg sm:p-8 dark:bg-gray-950">
                <div className="mb-8 text-center">
                  <h2 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                    Set Up Your Demo
                  </h2>
                  <p className="text-base text-gray-600 sm:text-lg dark:text-gray-300">
                    Complete the quick setup to start building.
                  </p>
                </div>
                {/* Overlay animation when setting up */}
                <div className="relative">
                  <div
                    className={
                      isSettingUp ? 'pointer-events-none opacity-40' : ''
                    }
                  >
                    <TestSetupComponent onComplete={handleComplete} />
                  </div>
                  {isSettingUp && (
                    <div className="animate-fade-in absolute inset-0 z-10 flex flex-col items-center justify-center rounded-xl bg-white/80 dark:bg-gray-950/80">
                      <Loader2 className="mb-2 h-8 w-8 animate-spin text-blue-600" />
                      <span className="font-semibold text-blue-700 dark:text-blue-300">
                        Creating your demo environment...
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Back to Home Button */}
          <div className="mt-8 flex justify-center sm:mt-10">
            <Link href="/">
              <button className="rounded px-4 py-2 text-sm font-medium text-blue-600 transition hover:text-blue-500">
                ← Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-8 text-center sm:py-10 dark:from-blue-900 dark:to-indigo-950">
        <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">
          Ready to Build? Try the Full Platform Free!
        </h2>
        <Link href="/auth?mode=signup">
          <button className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-base font-semibold text-blue-600 shadow-lg transition-all hover:bg-gray-50 sm:px-6 sm:text-lg">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </Link>
      </section>
    </div>
  );
};

export default TestSetup;

// Add this to your global CSS if you want a fade-in animation:
// .animate-fade-in { animation: fadeIn 0.5s; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
