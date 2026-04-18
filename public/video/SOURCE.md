# Hero video source

**Path to source project:** TBD

**Composition name:** N/A (video was not built with Remotion — see note below)

**Note:** The mp4s in this folder are build/export artifacts. To change the hero animation, edit the source and re-export — do not hand-edit these files.

## Why this is TBD

The initial assumption was that `hero.mp4` was rendered from a Remotion composition. That assumption is wrong for this project:

- `ANIMATION-IMPLEMENTATION.md` and `PROJECT-INSTRUCTIONS.md` in the repo root both explicitly say "Do NOT use Remotion" for this site.
- No Remotion project was found in any sibling, parent, or nearby directory (`~/Desktop`, `~/Projects`, `~/Claude Code`, `~/Claude Cowork`).
- `hero.mp4` (20.17s, 720×1280, 30 fps) appears to be a trimmed/encoded derivative of raw footage, with the Instagram watermark already baked into the source video by whoever produced the original.

## What to fill in

Once Todd confirms where the original footage lives (iCloud, a local recording, a contractor's deliverable, etc.), replace the "TBD" line above with:

- The absolute path or URL to the original source footage
- Any ffmpeg / editing commands used to produce `hero.mp4` from that source
