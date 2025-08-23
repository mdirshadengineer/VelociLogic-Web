import { inngest } from '../client';

export default inngest.createFunction(
  {
    id: 'velocilogic-workflowlist',
  },
  { event: 'velocilogic-workflowlist/event.sent' },
  async ({ event, step }) => {
    return {
      status: 200,
      body: `Workflow list event received with ID: ${event.data.id}`,
    };
  }
);
