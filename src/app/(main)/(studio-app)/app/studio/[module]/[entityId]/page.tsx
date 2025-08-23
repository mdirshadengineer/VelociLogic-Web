import { notFound } from 'next/navigation';

// Registry for available modules in the studio app
export const modulesRegistry = [
  {
    slug: 'automation',
    label: 'Automation',
    icon: '🔄',
    // Dynamically import the Automation module
    load: async () => (await import('src/modules/automation')).AutomationModule,
    // Fetch data for the Automation module (replace with real logic)
    loadData: async (id: string) => {
      return [id];
    },
  },
  {
    slug: 'analytics',
    label: 'Analytics',
    icon: '📊',
    // Dynamically import the Analytics ReportsList module
    load: async () =>
      (await import('src/modules/analytics/reports')).ReportsList,
    // Fetch data for the Analytics module (replace with real logic)
    loadData: async (id: string) => {
      return [id];
    },
  },
];

// Types for route parameters and search parameters
type Params = { module: string; entityId: string };
type SearchParams = { [key: string]: string | string[] | undefined };

// Interface for module configuration
interface ModuleConfig {
  slug: string;
  label: string;
  icon: string;
  load: () => Promise<React.ComponentType>;
  loadData: (id: string) => Promise<any>;
}

/**
 * StudioModuleEntityPage
 * Dynamically loads and renders a module based on the route parameters.
 * If the module or its data cannot be loaded, renders a 404 page.
 */
export default async function StudioModuleEntityPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}) {
  // Await route parameters and search parameters
  const { module, entityId } = await params;
  const queryParameters = await searchParams;

  // Find the module configuration by slug
  const moduleConfig = modulesRegistry.find(m => m.slug === module);

  // If module not found, render 404
  if (!moduleConfig) return notFound();

  let ModuleApplication: React.ComponentType;
  let entityData: any;

  try {
    // Dynamically load the module component
    ModuleApplication = await moduleConfig.load();
    // Fetch the entity data for the module
    entityData = await moduleConfig.loadData(entityId);
  } catch (error) {
    // Log error and render 404 if loading fails
    console.error('Error loading module or data:', error);
    return notFound();
  }

  // If no entity data, render 404
  if (!entityData) return notFound();

  // Render the loaded module component
  return (
    <div id="module-entity-page">
      <ModuleApplication />
    </div>
  );
}
