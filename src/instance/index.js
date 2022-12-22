import { mergeOptions } from '@/core/option';
import { cloneDeep } from '@/utils';

const app = {
  // mount app
  mount(selector) {
    this.root = doc.querySelector(selector);
  },
  // use plugin
  use(plugin) {
    plugin.install();
  },
};

let uid = -1;
const doc = window.document;

export function createApp(options) {
  // uid
  uid += 1;
  app._uid = uid;

  // merge options
  mergeOptions(app, options);

  // render
  console.log('render me', app);

  return {
    ...app,
  };
};

export function useReactive(data) {
  const target = cloneDeep(data);

  const handler = {
    get(target, prop, receiver) {
      if (typeof target[prop] === 'object' && target[prop] !== null) {
        console.log('receiver', receiver);
        // create a proxy object for inner object property
        // it is only created whenever is used somewhere
        return new Proxy(target[prop], handler);
      } else {
        return target[prop];
      }
    },

    set(obj, prop, value, receiver) {
      console.log('change prop', prop);
      // The default behavior to store the value
      obj[prop] = value;

      // Indicate success
      return true;
    },
  };

  const proxy = new Proxy(target, handler);
  return proxy;
}

