import { DeepPartial } from 'funts';
import { mergeDeepRight } from 'ramda';

export interface AppConfig {
  title: string;
  codeName: string;
}

export interface Config {
  app: AppConfig;
}

const defaultConfig: Readonly<Config> = {
  app: {
    title: 'title not set',
    codeName: 'codeName not set',
  },
};

let option: Config = defaultConfig;

export interface SettableConfig {
  app: Partial<AppConfig>;
}

export function setConfig(cfg: Readonly<DeepPartial<Config>>) {
  option = mergeDeepRight(option, cfg) as any;
}

export function getConfig(): Config {
  return option;
}
