import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

interface self extends Window {
  ['__WB_MANIFEST']: any;
  skipWaiting: any;
}

declare let self: self;

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ url }) => {
    return (
      url.origin === 'https://developertests.z33.web.core.windows.net' &&
      url.pathname.includes('ReactTestData')
    );
  },
  new StaleWhileRevalidate({
    cacheName: 'data-cache',
  })
);

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
