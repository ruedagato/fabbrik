export interface ActionModel<T = any> {
  type: string;
  data?: T;
}
