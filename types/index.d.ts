export type Limit = { kind: string; percentUsed: number; resetsAt?: string }

/** The live context window: `tokens` absent before the first response of the chat. */
export type Context = { tokens?: number; window: number; percent?: number }

/** Which parts are shown: the usage meters, the context meter, the status line; `tiny` packs the status line; `clock` adds the reset time to the meter headings. */
export type Parts = { pace: boolean; context: boolean; line: boolean; tiny: boolean; clock: boolean }

declare module 'claude-code' {
  interface PluginState {
    'usage-pace': {
      limits: Shaped<Limit[]>
      /** true while `limits` is the last reading saved by any chat, not one of this chat. */
      stale: boolean
      context: Shaped<Context>
      parts: Shaped<Parts>
      tick: number
    }
  }
}
