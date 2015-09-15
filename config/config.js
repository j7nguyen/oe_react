/*jshint esnext: true*/

import {baseUrl} from './local';

baseUrl = baseUrl || 'http://localhost:3000/api';
export const webApi = {
  baseUrl: baseUrl,
  users: `${baseUrl}/users/`,
  groups: `${baseUrl}/groups/`,
  addresses: `${baseUrl}/addresses/`,
  notes: `${baseUrl}/notes/`,
  stores: `${baseUrl}/stores/`,
  products: `${baseUrl}/products/`,
  store_categories: `${baseUrl}/store_categories/`,
  store_listings: `${baseUrl}/store_listings/`,
  marketplaces: `${baseUrl}/marketplaces/`,
  marketplace_categories: `${baseUrl}/marketplace_categories/`,
  marketplace_listings: `${baseUrl}/marketplace_listings/`
};

const config = {webApi};
export {config as default};
