import Vue from 'vue';
/**
 * An union of any function and functions that have access to `this`
 * (Vue instance).
 */
export declare type Method = ((...args: any[]) => any) | ((this: Vue, ...args: any[]) => any);
/**
 * A Higher-order type to trasnform a method into loadable method that have
 * access to `this` (Vue instance) and returns a Promise.
 */
export declare type LoadableMethod<T extends Method> = (this: Vue, ...args: Parameters<T>) => ReturnType<T> extends Promise<any> ? ReturnType<T> : Promise<ReturnType<T>>;
/**
 * Decorate a method to causes loading states changes during its execution. It
 * sets state as loading when function is init and unsets on throws an error or
 * resolve/return.
 * @example
 * Vue.component('SignInForm', {
 *   methods: {
 *     signIn: loadable(async function ({ email, password }) {
 *       // ...
 *     }, 'signIn')
 *   }
 * });
 * @param method - A method, commonly async, which causes loading state changes.
 * @param [state] - Loading state name. It's "unknown" if not defined.
 */
declare const loadable: <T extends Method>(method: T, state?: string) => LoadableMethod<T>;
export default loadable;
