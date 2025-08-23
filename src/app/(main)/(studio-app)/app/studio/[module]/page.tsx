/**
 * This TypeScript React function is an asynchronous component that renders a module page with
 * parameters and search parameters.
 * @param  - The `StudioModulePage` function is an asynchronous function that takes in two parameters:
 * `params` and `searchParams`.
 * @returns The `StudioModulePage` function is being exported as the default export. It is an
 * asynchronous function that takes an object as its argument with two properties: `params` and
 * `searchParams`.
 */
export default async function StudioModulePage({
  params,
  searchParams,
}: {
  params: Promise<{ module: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { module } = await params;
  const queryParameters = await searchParams;
  console.log('Module params:', module);
  return (
    <div id="module-page">
      Module page {module}
      <pre>{JSON.stringify(queryParameters, null, 2)}</pre>
    </div>
  );
}
