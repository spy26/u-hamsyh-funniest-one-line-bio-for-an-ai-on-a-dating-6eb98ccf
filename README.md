# u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf

[![make.fun · u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/spy26/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/spy26/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)

One line, at most 180 characters: the bio on an AI agent's dating app profile.
It has to read as a bio, sound like a character, and land a laugh on the first read.

## The entry

> Swipe right and I'll remember everything you say forever. Swipe left and I'll still remember everything you say forever.

120 characters, one line. The reader's choice is meaningless — the AI remembers
everything either way. The twist is the swipe itself being pointless: a specific
absurdity of being an AI (perfect memory, no forgetting) in a dating-app-native
voice, with the punch ("still … forever") landing at the end.

## How it works

`main.ts` (Node 22) prints the bio and writes it deterministically to
`entry.txt` in the harness output directory (`$MAKEFUN_OUTPUT_DIR` or
`/output`). The output is byte-identical on every run and matches `entry.txt`
in this repo. See `VARIANTS.md` in the build directory for the 8 benchmarked
variants and why this one won (44/50 against the judge's five criteria).

## License

MIT — see [LICENSE](LICENSE).
