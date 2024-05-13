/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Option, OptionOrNullable } from '@metaplex-foundation/umi';
import {
  Serializer,
  array,
  option,
  struct,
  tuple,
} from '@metaplex-foundation/umi/serializers';
import {
  BaseExtraAccount,
  BaseExtraAccountArgs,
  BaseValidationResultsOffset,
  BaseValidationResultsOffsetArgs,
  ExternalCheckResult,
  ExternalCheckResultArgs,
  HookableLifecycleEvent,
  HookableLifecycleEventArgs,
  getBaseExtraAccountSerializer,
  getBaseValidationResultsOffsetSerializer,
  getExternalCheckResultSerializer,
  getHookableLifecycleEventSerializer,
} from '.';

export type BaseOracleUpdateInfo = {
  lifecycleChecks: Option<Array<[HookableLifecycleEvent, ExternalCheckResult]>>;
  baseAddressConfig: Option<BaseExtraAccount>;
  resultsOffset: Option<BaseValidationResultsOffset>;
};

export type BaseOracleUpdateInfoArgs = {
  lifecycleChecks: OptionOrNullable<
    Array<[HookableLifecycleEventArgs, ExternalCheckResultArgs]>
  >;
  baseAddressConfig: OptionOrNullable<BaseExtraAccountArgs>;
  resultsOffset: OptionOrNullable<BaseValidationResultsOffsetArgs>;
};

export function getBaseOracleUpdateInfoSerializer(): Serializer<
  BaseOracleUpdateInfoArgs,
  BaseOracleUpdateInfo
> {
  return struct<BaseOracleUpdateInfo>(
    [
      [
        'lifecycleChecks',
        option(
          array(
            tuple([
              getHookableLifecycleEventSerializer(),
              getExternalCheckResultSerializer(),
            ])
          )
        ),
      ],
      ['baseAddressConfig', option(getBaseExtraAccountSerializer())],
      ['resultsOffset', option(getBaseValidationResultsOffsetSerializer())],
    ],
    { description: 'BaseOracleUpdateInfo' }
  ) as Serializer<BaseOracleUpdateInfoArgs, BaseOracleUpdateInfo>;
}
