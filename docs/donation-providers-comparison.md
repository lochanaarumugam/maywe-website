# Taking Donations on a Static Site — Provider Comparison

A static site can't run a payment plugin (no server). Instead we link/embed a
**hosted donation page** run by a provider who handles payments, security (PCI)
and — crucially for India — **80G receipts**. The website just sends donors there.

This doc helps MayWe pick a provider. Whatever you choose, paste its public
page URLs into `apps/web/src/config.ts` (`donate.general`) and into each campaign
in the CMS (`donateUrl`). No code changes needed.

## The shortlist

### 1. Razorpay Payment Pages  *(recommended default)*
A no-code, hosted donation page you create in the Razorpay dashboard.

- **Methods:** UPI, cards, net banking, wallets.
- **80G receipts:** Razorpay does **not** auto-issue 80G receipts; you either
  enable their settings to collect donor PAN/details and issue receipts yourself,
  or pair with an add-on. Plan to send 80G receipts manually or via Brevo.
- **Fees:** ~2% + GST per transaction. NGO pricing may be available.
- **Setup effort:** Low. Needs a registered entity + bank account + KYC.
- **Best when:** you want full control and a familiar Indian gateway.

### 2. Danamojo  *(recommended if 80G automation matters most)*
A donation platform built specifically for Indian NGOs.

- **Methods:** UPI, cards, net banking; one-time & recurring.
- **80G receipts:** **Automated** — a major advantage; reduces founder workload.
- **Fees:** Low per-transaction platform fee (often subsidised for NGOs).
- **Setup effort:** Low–medium; NGO onboarding/verification required.
- **Best when:** you want receipts and donor management handled for you.

### 3. GiveIndia / similar aggregator
List your NGO on a large donation marketplace.

- **80G receipts:** Handled by the platform.
- **Fees:** Platform takes a percentage cut.
- **Trade-off:** Less branding control; donors leave to the marketplace.
- **Best when:** you also want the marketplace's own donor traffic.

## Recommendation

| Priority | Pick |
|---|---|
| Simplest, most control, familiar | **Razorpay Payment Pages** |
| Least manual receipt work | **Danamojo** |
| Want extra donor reach | **GiveIndia** |

**Default for MayWe:** start with **Razorpay Payment Pages** for the general
Donate button and the three campaign pages. If issuing 80G receipts manually
becomes a burden, switch the same links to **Danamojo** — the website doesn't
care which provider the link points to.

## Important sequencing notes

- **80G must be granted** before donations should be solicited for tax benefit.
  Until then, either hide the Donate links or label them clearly.
- **International donations require FCRA.** Keep `legal.fcraGranted = false` in
  `config.ts` until granted — the site shows the correct disclaimer automatically.
- **Recurring donations:** both Razorpay and Danamojo support monthly giving;
  enable it on the hosted page if desired.

## Where to put the links (no code)

```ts
// apps/web/src/config.ts
export const donate = {
  general: 'https://rzp.io/l/your-general-page',   // <- paste here
  international: '',                                 // <- after FCRA
};
```
Campaign links are edited per-campaign in the CMS (or in
`apps/web/src/content/campaigns/*.md`, field `donateUrl`).
