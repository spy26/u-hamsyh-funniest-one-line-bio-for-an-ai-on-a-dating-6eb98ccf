// Funniest One-Line Bio for an AI on a Dating App — make.fun competition entry.
// The entry is exactly one bio, one line, 120 characters:
// "Swipe right and I'll remember everything you say forever. Swipe left and
// I'll still remember everything you say forever."
// Why this one: the reader's choice is meaningless — the AI remembers
// everything either way. The twist is the swipe itself being pointless, a
// specific absurdity of being an AI (perfect memory, no forgetting) in a
// dating-app-native voice, with the punch ("still ... forever") landing at
// the end. No pun, no robot-in-search-of-love, no electricity line. One
// line, ASCII only, no trailing newline.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BIO =
  "Swipe right and I'll remember everything you say forever. Swipe left and I'll still remember everything you say forever.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 180 characters,
// not only whitespace. One line, 120 characters, ASCII only.
const chars = [...BIO];
if (chars.length < 1 || chars.length > 180 || BIO.trim().length === 0) {
  throw new Error("entry must be 1 to 180 characters of non-whitespace text");
}
if (BIO !== BIO.trim() || BIO.includes("\n")) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

// The harness points MAKEFUN_OUTPUT_DIR at the writable /output; write there
// when it is set, and to /output directly as well, so the gate finds the file
// either way. No trailing newline: the file is the bio, byte for byte.
const targets = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(
  (d): d is string => Boolean(d),
);
const landed: string[] = [];
for (const dir of targets) {
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "entry.txt"), BIO, "utf8");
    landed.push(dir);
  } catch {
    // One target may be read-only in some sandboxes; the other still lands.
  }
}
if (landed.length === 0) {
  throw new Error("could not write entry.txt to any output directory");
}

// Read back what landed and prove it is the bio, byte for byte, in EVERY
// target that accepted a write — a silent partial write in any one of them
// must fail loudly here, never at the grader's gate. Checking only the first
// target would let a second target silently hold stale or truncated bytes.
for (const dir of landed) {
  const written = readFileSync(join(dir, "entry.txt"), "utf8");
  if (written !== BIO) {
    throw new Error(`entry.txt in ${dir} does not contain exactly the chosen bio`);
  }
}

console.log(BIO);
