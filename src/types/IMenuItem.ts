import { RouteLocationRaw  } from 'vue-router'
export default interface IMenuItem {
    to: RouteLocationRaw,
    name: string,
    label: string;
    icon?: string,
}