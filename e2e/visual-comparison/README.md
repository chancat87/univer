# Notes on Visual Comparison

You should set `maxDiffPixels` on a minimum value. The cursor may be different in snapshots because it is blinking,
especially in rich-text editors.

For more instructions, please read related part in [CONTRIBUTING.md](../../CONTRIBUTING.md).

## Snapshot storage

Playwright snapshot baselines are written to `.playwright-snapshots/` through `snapshotPathTemplate` in
`playwright.config.ts`. This directory is ignored by Git. CI downloads the latest `playwright-snapshots` artifact
from the `update-playwright-snapshots.yml` workflow before running e2e tests.

To refresh baselines, run the "Manually Update Snapshots" workflow. The workflow uploads a new
`playwright-snapshots` artifact instead of committing PNG files to this repository. The same workflow also runs
monthly to refresh the artifact before GitHub's retention window expires.
