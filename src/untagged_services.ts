// Services deployed by the `deploy-convex-project` GitHub action in the convex
// monorepo. Their versions look like builder versions (`<UTC time>-<commit>`),
// but no `<service>/<version>` git tag is pushed, so links must use the commit.
export const UNTAGGED_SERVICES = new Set([
  "auth-emails",
  "data",
  "grafana-mcp",
  "postalservice",
]);
