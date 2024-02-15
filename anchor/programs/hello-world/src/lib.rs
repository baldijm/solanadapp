use anchor_lang::prelude::*;

declare_id!("Dk4gQiPc1wqZExpb2BdPr16MEuqRSwPfWiwqtrCGMM3Y");

#[program]
pub mod hello_world {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        msg!("Hello World!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
