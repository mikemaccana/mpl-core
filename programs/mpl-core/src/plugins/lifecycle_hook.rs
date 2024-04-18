use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{program_error::ProgramError, pubkey::Pubkey};

use super::{
    Authority, ExternalCheckResult, ExternalPluginSchema, ExtraAccount, HookableLifecycleEvent,
    PluginValidation, PluginValidationContext, ValidationResult,
};

/// Lifecycle hook that CPIs into the `hooked_program`.  This hook is used for any lifecycle events
/// that were selected in the `ExternalPluginRecord` for the plugin.  If any extra accounts are
/// present in the `extra_accounts` optional `Vec`, then these accounts are added to the CPI call
/// in the order in which they are in the Vec.  Any PDAs in the `Vec` are derived using the hooked
/// program.  The hooked program will return a validation result and new data to store at the
/// plugin's data offset (which in the account is immediately after this header).
#[derive(Clone, Debug, BorshSerialize, BorshDeserialize, Eq, PartialEq)]
pub struct LifecycleHook {
    /// The `Pubkey` for the hooked program.
    pub hooked_program: Pubkey, // 32
    /// The extra accounts to use for the lifecycle hook.
    pub extra_accounts: Option<Vec<ExtraAccount>>, //
    /// Schema for the data used by the plugin.
    pub schema: ExternalPluginSchema, // 1
    /// The offset to the plugin data in the account.
    pub data_offset: usize, // 8
    /// The length of the plugin data.
    pub data_len: usize, // 8
}

impl From<&LifecycleHookInitInfo> for LifecycleHook {
    fn from(init_info: &LifecycleHookInitInfo) -> Self {
        Self {
            hooked_program: init_info.hooked_program,
            extra_accounts: init_info.extra_accounts.clone(),
            schema: init_info.schema.unwrap_or_default(),
            data_offset: 0,
            data_len: 0,
        }
    }
}

/// Lifecycle hook initialization info.
#[derive(Clone, Debug, BorshSerialize, BorshDeserialize, Eq, PartialEq)]
pub struct LifecycleHookInitInfo {
    /// The `Pubkey` for the hooked program.
    pub hooked_program: Pubkey,
    /// Initial plugin authority.
    pub init_plugin_authority: Option<Authority>,
    /// The lifecyle events for which the the external plugin is active.
    pub lifecycle_checks: Option<Vec<(HookableLifecycleEvent, ExternalCheckResult)>>,
    /// The extra accounts to use for the lifecycle hook.
    pub extra_accounts: Option<Vec<ExtraAccount>>,
    /// Schema for the data used by the plugin.
    pub schema: Option<ExternalPluginSchema>,
}

impl PluginValidation for LifecycleHookInitInfo {
    fn validate_add_external_plugin(
        &self,
        _ctx: &PluginValidationContext,
    ) -> Result<ValidationResult, ProgramError> {
        Ok(ValidationResult::Pass)
    }
}

/// Lifecycle hook update info.
#[derive(Clone, Debug, BorshSerialize, BorshDeserialize, Eq, PartialEq)]
pub struct LifecycleHookUpdateInfo {
    /// The lifecyle events for which the the external plugin is active.
    pub lifecycle_checks: Option<Vec<(HookableLifecycleEvent, ExternalCheckResult)>>,
    /// The extra accounts to use for the lifecycle hook.
    pub extra_accounts: Option<Vec<ExtraAccount>>,
    /// Schema for the data used by the plugin.
    pub schema: Option<ExternalPluginSchema>,
}
