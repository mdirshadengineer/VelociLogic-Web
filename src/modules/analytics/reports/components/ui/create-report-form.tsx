'use client';

import { BarChart, Plus, Settings } from 'lucide-react';
import { Button } from 'shared/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'shared/ui/dialog';
import { Input } from 'shared/ui/input';
import { Textarea } from 'shared/ui/textarea';

import { FC, useState } from 'react';

const CreateFormButton: FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'simple' | 'complex'>('simple');
  const [isCreating, setIsCreating] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'outline'}>
          <Plus className="mr-2 h-5 w-5" />
          Create Report
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-md dark:border-gray-800 dark:bg-gray-900"
        aria-describedby="create-report-description"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Create New Report
          </DialogTitle>
          <DialogDescription
            id="create-report-description"
            className="mt-2 text-sm text-gray-600 dark:text-gray-400"
          >
            Choose a report type and configure its settings to get started.
          </DialogDescription>
        </DialogHeader>
        {/* Content */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Report Name
          </label>
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter report name"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 transition-colors focus:border-transparent focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:ring-indigo-400"
          />
        </div>
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Description (Optional)
          </label>
          <Textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Describe what this report will show"
            rows={3}
            className="w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 transition-colors focus:border-transparent focus:ring-2 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:ring-indigo-400"
          />
        </div>
        <div className="mb-6">
          <label className="mb-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Report Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setType('simple')}
              className={`rounded-lg border-2 p-4 transition-all duration-200 ${
                type === 'simple'
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:border-indigo-400 dark:bg-indigo-950 dark:text-indigo-300'
                  : 'border-gray-200 text-gray-700 hover:border-gray-300 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-500'
              }`}
            >
              <BarChart className="mx-auto mb-2 h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <div className="text-sm font-medium">Simple Report</div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Prebuilt layouts
              </div>
            </button>
            <button
              onClick={() => setType('complex')}
              className={`rounded-lg border-2 p-4 transition-all duration-200 ${
                type === 'complex'
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:border-indigo-400 dark:bg-indigo-950 dark:text-indigo-300'
                  : 'border-gray-200 text-gray-700 hover:border-gray-300 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-500'
              }`}
            >
              <Settings className="mx-auto mb-2 h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <div className="text-sm font-medium">Complex Report</div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Full customization
              </div>
            </button>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant={'secondary'}
              className="flex-1 rounded-lg px-4 py-2 transition-colors dark:bg-gray-800 dark:text-gray-100"
            >
              Close
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant={'default'}
            onClick={() => {}}
            disabled={!name.trim() || isCreating}
            className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-indigo-700 dark:hover:bg-indigo-800"
          >
            {isCreating ? 'Creating...' : 'Create Report'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { CreateFormButton };
