// The Robot Vacuum's Best Excuse — make.fun bounty
// u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214
// One line, at most 140 characters: the funniest excuse a robot vacuum
// could offer for missing a spot. Node, no dependencies. Run: node main.ts
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't miss it. My map lists that spot as a sovereign crumb nation, and I don't do international incidents before noon.";

// The gate: 1-140 UTF-8 characters, not only whitespace, exactly one line.
if (LINE.length < 1 || LINE.length > 140 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`entry line invalid: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
