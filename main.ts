// Make the AI Judge Laugh: Developer Excuses
// Writes one funny single-line developer excuse to /output/entry.txt.
// Node stdlib only. No network, no clock, no randomness: fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: a rollback that "worked" — by restoring the very bug it was
// meant to fix. The paradox is the twist: it reveals what really happened
// (the rollback target was itself the broken version), it sounds like
// something a dev says out loud in an incident call, and it lands in one
// short line with nothing to trim. Fresher than the worn "it works on my
// machine" / "the tests passed" excuses.
const EXCUSE =
  "The rollback worked — we successfully restored the exact bug we were trying to fix.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
