export function mergeOptions(vm, options) {
  const mergedOptions = {};
  options.render((component) => {
    console.log('component', component);
    const { name, setup } = component;
    setup();

    // bring all the options up to the highest level of object
    // data
    // Object.entries(mergedOptions[name].$data).forEach(([key, val]) => {
    //   vm[key] = val;
    // });
  });
}