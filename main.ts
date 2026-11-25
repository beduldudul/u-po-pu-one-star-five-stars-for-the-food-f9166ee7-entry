import { writeFileSync, mkdirSync } from "node:fs";

// One Star, Five Stars for the Food.
// One sentence, at most 200 characters: an alien tourist gives Earth a
// one-star review while still slipping in a real compliment about the food.
const entry =
  "One star: I was abducted by a taxi meter, rained on twice, " +
  "and charged for ice — but the mango, eaten over a sink at midnight, " +
  "was the best thing on this miserable, delicious planet.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} chars, must be 1-200`);
}
if (entry.trim().split(/[.!?](\s|$)/).filter(Boolean).length !== 1) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`entry: ${entry.length} chars, one sentence`);
