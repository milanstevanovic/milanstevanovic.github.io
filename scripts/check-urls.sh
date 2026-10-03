#!/usr/bin/env bash
# Confirms every URL in the contract exists in dist/. Run after `npm run build`.
fail=0
for p in "" posts posts/roamtech posts/goodmorning posts/enginears-podcast \
         posts/air_apps posts/bux_belgrade posts/bux_web posts/bux_ios \
         services cv contact archives tags categories; do
  test -f "dist/${p:+$p/}index.html" || { echo "MISSING /$p/"; fail=1; }
done
for f in index.xml robots.txt sitemap-index.xml 404.html CNAME; do
  test -f "dist/$f" || { echo "MISSING /$f"; fail=1; }
done
[ $fail -eq 0 ] && echo "All contract URLs present."
exit $fail
