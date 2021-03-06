import Knex from 'knex';
import { Logger } from 'winston';
import { Config } from '@backstage/config';
import { PluginEndpointDiscovery } from '@backstage/backend-common';

export type PluginEnvironment = {
  logger: Logger;
  database: Knex;
  config: Config;
  discovery: PluginEndpointDiscovery;
};
