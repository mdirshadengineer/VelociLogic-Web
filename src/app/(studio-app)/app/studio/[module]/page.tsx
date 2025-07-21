/**
 * This TypeScript React function is an asynchronous component that logs and displays the module
 * parameter passed to it.
 * @param  - The `StduioModuleDashboardPage` function is an asynchronous function that takes an object
 * as a parameter. The object should have a `params` property which is a Promise that resolves to an
 * object with a `module` property of type string.
 * @returns The component being returned is a functional component called `StduioModuleDashboardPage`.
 * It takes in an object as a parameter with a `params` property that is a Promise containing an object
 * with a `module` property of type string. Inside the component, it awaits the resolution of the
 * `params` Promise to extract the `module` value and then logs it to the console. Finally, it
 */
export default async function StduioModuleDashboardPage({
  params,
}: {
  params: Promise<{ module: string }>;
}) {
  const { module } = await params;
  console.log('Module params:', module);
  return <div>Module page {module}</div>;
}
