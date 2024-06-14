/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
  dataEnum,
  struct,
  tuple,
} from '@metaplex-foundation/umi/serializers';
import {
  BaseAppDataUpdateInfo,
  BaseAppDataUpdateInfoArgs,
  BaseLifecycleHookUpdateInfo,
  BaseLifecycleHookUpdateInfoArgs,
  BaseLinkedAppDataUpdateInfo,
  BaseLinkedAppDataUpdateInfoArgs,
  BaseLinkedLifecycleHookUpdateInfo,
  BaseLinkedLifecycleHookUpdateInfoArgs,
  BaseOracleUpdateInfo,
  BaseOracleUpdateInfoArgs,
  getBaseAppDataUpdateInfoSerializer,
  getBaseLifecycleHookUpdateInfoSerializer,
  getBaseLinkedAppDataUpdateInfoSerializer,
  getBaseLinkedLifecycleHookUpdateInfoSerializer,
  getBaseOracleUpdateInfoSerializer,
} from '.';

export type BaseExternalPluginAdapterUpdateInfo =
  | { __kind: 'LifecycleHook'; fields: [BaseLifecycleHookUpdateInfo] }
  | { __kind: 'Oracle'; fields: [BaseOracleUpdateInfo] }
  | { __kind: 'AppData'; fields: [BaseAppDataUpdateInfo] }
  | {
      __kind: 'LinkedLifecycleHook';
      fields: [BaseLinkedLifecycleHookUpdateInfo];
    }
  | { __kind: 'LinkedAppData'; fields: [BaseLinkedAppDataUpdateInfo] };

export type BaseExternalPluginAdapterUpdateInfoArgs =
  | { __kind: 'LifecycleHook'; fields: [BaseLifecycleHookUpdateInfoArgs] }
  | { __kind: 'Oracle'; fields: [BaseOracleUpdateInfoArgs] }
  | { __kind: 'AppData'; fields: [BaseAppDataUpdateInfoArgs] }
  | {
      __kind: 'LinkedLifecycleHook';
      fields: [BaseLinkedLifecycleHookUpdateInfoArgs];
    }
  | { __kind: 'LinkedAppData'; fields: [BaseLinkedAppDataUpdateInfoArgs] };

export function getBaseExternalPluginAdapterUpdateInfoSerializer(): Serializer<
  BaseExternalPluginAdapterUpdateInfoArgs,
  BaseExternalPluginAdapterUpdateInfo
> {
  return dataEnum<BaseExternalPluginAdapterUpdateInfo>(
    [
      [
        'LifecycleHook',
        struct<
          GetDataEnumKindContent<
            BaseExternalPluginAdapterUpdateInfo,
            'LifecycleHook'
          >
        >([['fields', tuple([getBaseLifecycleHookUpdateInfoSerializer()])]]),
      ],
      [
        'Oracle',
        struct<
          GetDataEnumKindContent<BaseExternalPluginAdapterUpdateInfo, 'Oracle'>
        >([['fields', tuple([getBaseOracleUpdateInfoSerializer()])]]),
      ],
      [
        'AppData',
        struct<
          GetDataEnumKindContent<BaseExternalPluginAdapterUpdateInfo, 'AppData'>
        >([['fields', tuple([getBaseAppDataUpdateInfoSerializer()])]]),
      ],
      [
        'LinkedLifecycleHook',
        struct<
          GetDataEnumKindContent<
            BaseExternalPluginAdapterUpdateInfo,
            'LinkedLifecycleHook'
          >
        >([
          ['fields', tuple([getBaseLinkedLifecycleHookUpdateInfoSerializer()])],
        ]),
      ],
      [
        'LinkedAppData',
        struct<
          GetDataEnumKindContent<
            BaseExternalPluginAdapterUpdateInfo,
            'LinkedAppData'
          >
        >([['fields', tuple([getBaseLinkedAppDataUpdateInfoSerializer()])]]),
      ],
    ],
    { description: 'BaseExternalPluginAdapterUpdateInfo' }
  ) as Serializer<
    BaseExternalPluginAdapterUpdateInfoArgs,
    BaseExternalPluginAdapterUpdateInfo
  >;
}

// Data Enum Helpers.
export function baseExternalPluginAdapterUpdateInfo(
  kind: 'LifecycleHook',
  data: GetDataEnumKindContent<
    BaseExternalPluginAdapterUpdateInfoArgs,
    'LifecycleHook'
  >['fields']
): GetDataEnumKind<BaseExternalPluginAdapterUpdateInfoArgs, 'LifecycleHook'>;
export function baseExternalPluginAdapterUpdateInfo(
  kind: 'Oracle',
  data: GetDataEnumKindContent<
    BaseExternalPluginAdapterUpdateInfoArgs,
    'Oracle'
  >['fields']
): GetDataEnumKind<BaseExternalPluginAdapterUpdateInfoArgs, 'Oracle'>;
export function baseExternalPluginAdapterUpdateInfo(
  kind: 'AppData',
  data: GetDataEnumKindContent<
    BaseExternalPluginAdapterUpdateInfoArgs,
    'AppData'
  >['fields']
): GetDataEnumKind<BaseExternalPluginAdapterUpdateInfoArgs, 'AppData'>;
export function baseExternalPluginAdapterUpdateInfo(
  kind: 'LinkedLifecycleHook',
  data: GetDataEnumKindContent<
    BaseExternalPluginAdapterUpdateInfoArgs,
    'LinkedLifecycleHook'
  >['fields']
): GetDataEnumKind<
  BaseExternalPluginAdapterUpdateInfoArgs,
  'LinkedLifecycleHook'
>;
export function baseExternalPluginAdapterUpdateInfo(
  kind: 'LinkedAppData',
  data: GetDataEnumKindContent<
    BaseExternalPluginAdapterUpdateInfoArgs,
    'LinkedAppData'
  >['fields']
): GetDataEnumKind<BaseExternalPluginAdapterUpdateInfoArgs, 'LinkedAppData'>;
export function baseExternalPluginAdapterUpdateInfo<
  K extends BaseExternalPluginAdapterUpdateInfoArgs['__kind'],
>(
  kind: K,
  data?: any
): Extract<BaseExternalPluginAdapterUpdateInfoArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isBaseExternalPluginAdapterUpdateInfo<
  K extends BaseExternalPluginAdapterUpdateInfo['__kind'],
>(
  kind: K,
  value: BaseExternalPluginAdapterUpdateInfo
): value is BaseExternalPluginAdapterUpdateInfo & { __kind: K } {
  return value.__kind === kind;
}
