/**
 * The function `StduioModuleEntityPage` is an asynchronous React component that takes in parameters
 * for a module and an entity ID, logs the module parameter, and renders a page displaying the module
 * and entity ID.
 * @param  - The `StduioModuleEntityPage` function is an asynchronous function that takes an object as
 * a parameter. The object should have a `params` property which is a Promise that resolves to an
 * object with `module` and `entityId` properties.
 * @returns The function `StduioModuleEntityPage` is returning a JSX element that displays the values
 * of `module` and `entityId` within a `<div>` element. The text displayed will be "Module page
 * {module} Entity page {entityId}", where `{module}` and `{entityId}` are the values extracted from
 * the `params` object.
 */
export default async function StduioModuleEntityPage({
  params,
}: {
  params: Promise<{ module: string; entityId: string }>;
}) {
  const { module, entityId } = await params;
  console.log('Module params:', module);
  return (
    <div>
      Module page {module} Entity page {entityId}
    </div>
  );
}
