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

## Edit history

- **2026-04-18** — `hero.mp4` trimmed from 20.17s to 15.57s to drop the closing Instagram-logo scene. Command used:
  ```
  ffmpeg -i hero.mp4 -t 15.5 -c copy -movflags +faststart hero-trimmed.mp4
  ```
  Keyframe-aligned (no re-encode). `hero-poster.jpg` regenerated from frame at 07s of the trimmed clip.
  The per-frame `@THEFINEDIAMONDOFFICIAL` corner watermark is baked into the source footage (Instagram-origin download) and cannot be removed without the original pre-upload file. If you ever obtain the clean source, replace `hero.mp4` wholesale rather than trying to remove the watermark from this derivative.
