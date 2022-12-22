import { createApp } from '@/main';
import App from '@/examples/App';

const options = {
  render: (h) => h(App),
};

const selector = '#app';
const app = createApp(options);
app.mount(selector);
console.log('app', app);