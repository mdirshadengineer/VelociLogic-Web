'use client';

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Database, Loader, User } from 'lucide-react';
import { Button } from 'shared/ui/button';

import { setupTestEnvironment, TEST_USER } from './testdata';

import React, { useState } from 'react';

interface TestSetupProps {
  onComplete?: () => void;
}

export const TestSetup: React.FC<TestSetupProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSetupTest = async () => {
    setLoading(true);
    setStatus('idle');
    setMessage('Setting up test environment...');

    try {
      const result = await setupTestEnvironment();

      if (result.success) {
        setStatus('success');
        setMessage(
          `Test environment ready! Created ${result.projects?.length || 0} sample projects.`
        );
        setTimeout(() => {
          onComplete?.();
        }, 2000);
      } else {
        setStatus('error');
        setMessage(
          `Setup failed: ${
            typeof result.error === 'object' &&
            result.error !== null &&
            'message' in result.error
              ? (result.error as { message?: string }).message
              : result.error || 'Unknown error'
          }`
        );
      }
    } catch (error: any) {
      setStatus('error');
      setMessage(`Setup failed: ${error.message || error}`);
      console.error('Test setup exception:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-lg"
    >
      <div className="mb-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <Database className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          Test Environment Setup
        </h3>
        <p className="text-sm text-gray-600">
          Create a test user account with sample projects to explore VelociLogic
        </p>
      </div>

      <div className="mb-6 space-y-4">
        <div className="rounded-lg bg-gray-50 p-4">
          <h4 className="mb-2 flex items-center font-medium text-gray-900">
            <User className="mr-2 h-4 w-4" />
            Test Account Details
          </h4>
          <div className="space-y-1 text-sm text-gray-600">
            <p>
              <strong>Email:</strong> {TEST_USER.email}
            </p>
            <p>
              <strong>Password:</strong> {TEST_USER.password}
            </p>
            <p>
              <strong>Name:</strong> {TEST_USER.fullName}
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-blue-50 p-4">
          <h4 className="mb-2 font-medium text-blue-900">
            Sample Projects Include:
          </h4>
          <ul className="space-y-1 text-sm text-blue-800">
            <li>• Acme Bakery (Published)</li>
            <li>• TechStart Solutions (Draft)</li>
            <li>• Green Garden Landscaping (Published)</li>
          </ul>
        </div>
      </div>

      {message && (
        <div
          className={`mb-4 flex items-center rounded-lg p-3 ${
            status === 'success'
              ? 'bg-green-50 text-green-800'
              : status === 'error'
                ? 'bg-red-50 text-red-800'
                : 'bg-blue-50 text-blue-800'
          }`}
        >
          {status === 'success' && <CheckCircle className="mr-2 h-4 w-4" />}
          {status === 'error' && <AlertCircle className="mr-2 h-4 w-4" />}
          {loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
          <span className="text-sm">{message}</span>
        </div>
      )}

      <Button
        onClick={handleSetupTest}
        disabled={loading || status === 'success'}
        className="w-full"
        size="lg"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <Loader className="mr-2 h-4 w-4 animate-spin" />
            Setting up...
          </span>
        ) : status === 'success' ? (
          'Setup Complete!'
        ) : (
          'Setup Test Environment'
        )}
      </Button>

      <p className="mt-4 text-center text-xs text-gray-500">
        This will create a test user account and sample projects for
        demonstration purposes. You can delete this data anytime from the
        dashboard.
      </p>
    </motion.div>
  );
};
