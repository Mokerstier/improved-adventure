import { GlobalSettings } from "~src/core/models/global-settings";

declare type Subset<T, U extends T> = U;

declare global {
    interface Window extends GlobalSettings
}
