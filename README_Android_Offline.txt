ELECTRICAL CALCULATIONS — ENHANCED BUILD

FILES
- Electrical_Calculations_Enhanced.html: standalone app; can be opened locally and works without internet for calculations.
- manifest.json and sw.js: optional PWA install/offline cache support.

USING THE STANDALONE APP ON ANDROID
1. Copy Electrical_Calculations_Enhanced.html to your Android phone.
2. Open it with a browser or HTML viewer. If your browser blocks local file behavior, open the HTML from a local web server instead.
3. Local session history uses browser storage; use Export Session JSON for a portable backup.

INSTALLABLE PWA
The installable/offline PWA features require serving all three files from the same HTTPS origin (or localhost). Upload them together to an HTTPS static host, open the HTML page in Chrome, then use the browser menu and choose Install app / Add to Home screen if offered. A local file:// URL alone cannot register a service worker.

IMPORTANT DATA / STANDARD NOTES
- The existing predefined base sequence and extra-point sequence were retained; custom points are temporary rows and are cleared when the matrix is regenerated or the page reloads.
- Existing limits were not silently edited. Class 0.1S is selectable for reference but displays “Not configured” until its limits are explicitly verified and added.
- Standard/meter type selectors are reference labels only and do not automatically certify or change the limits. Verify the relevant official IS 14697 edition/amendments and applicable meter type/table before making conformity decisions.
- “PASS”/“FAIL” uses the allowed error limit entered by the operator. It is not an independent standards determination.
- Session history is stored in the current browser/device. Export JSON regularly to keep backups.
