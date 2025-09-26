// import './index.css';
// import notifications from './notifications.json' assert { type: 'json' };
import { loadJson } from '~/helpers/load-json';
import Item from './item';

const notificationsPromise = loadJson<{
  id: number;
  title: string;
  description: string;
  notifiedTime: string;
}[]>("/data/notifications.json");

export default async function Notifications() {
  const notifications = await notificationsPromise;
  return `
  <ul class="notifications-container">
    ${notifications.map((item) => Item({ ...item, notifiedTime: new Date(item.notifiedTime) })).join("")}
  </ul>
`;
}
