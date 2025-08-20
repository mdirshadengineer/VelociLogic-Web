import { notFound } from 'next/navigation';

// Registry for modules
export const modulesRegistry = [
  {
    slug: 'automation',
    label: 'Automation',
    icon: '🔄',
    load: async () => (await import('src/modules/automation')).AutomationModule,
    loadData: async (id: string) => {
      // Replace with actual data fetching logic
      return [id];
    },
  },
];

type Params = { module: string; entityId: string };
type SearchParams = { [key: string]: string | string[] | undefined };

interface ModuleConfig {
  slug: string;
  label: string;
  icon: string;
  load: () => Promise<React.ComponentType>;
  loadData: (id: string) => Promise<any>;
}

export default async function StudioModuleEntityPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}) {
  const { module, entityId } = await params;
  const queryParameters = await searchParams;

  const moduleConfig = modulesRegistry.find(m => m.slug === module);

  if (!moduleConfig) return notFound();

  let ModuleApplication: React.ComponentType;
  let entityData: any;

  try {
    ModuleApplication = await moduleConfig.load();
    entityData = await moduleConfig.loadData(entityId);
  } catch (error) {
    console.error('Error loading module or data:', error);
    return notFound();
  }

  if (!entityData) return notFound();

  return (
    <div id="module-entity-page">
      <h2>Entity ID: {entityId}</h2>
      <pre>{JSON.stringify(entityData, null, 2)}</pre>
      <pre>{JSON.stringify(queryParameters, null, 2)}</pre>
      <ModuleApplication />
    </div>
  );
}
