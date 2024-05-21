import { PublicKey } from '@metaplex-foundation/umi';
import { BaseExternalPluginAdapterKey } from '../generated';
import { PluginAuthority, pluginAuthorityToBase } from './pluginAuthority';

export type ExternalPluginAdapterKey =
  | {
    type: 'Oracle';
    baseAddress: PublicKey;
  }
  | {
    type: 'SecureDataStore';
    dataAuthority: PluginAuthority;
  }
  | {
    type: 'LifecycleHook';
    hookedProgram: PublicKey;
  };

export function externalPluginAdapterKeyToBase(
  e: ExternalPluginAdapterKey
): BaseExternalPluginAdapterKey {
  if (e.type === 'Oracle') {
    return {
      __kind: 'Oracle',
      fields: [e.baseAddress],
    };
  }
  if (e.type === 'SecureDataStore') {
    return {
      __kind: 'SecureDataStore',
      fields: [pluginAuthorityToBase(e.dataAuthority)],
    };
  }
  return {
    __kind: 'LifecycleHook',
    fields: [e.hookedProgram],
  };
}
