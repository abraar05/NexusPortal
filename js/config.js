window.NEXUS_CONFIG = {
  name: 'NexusPortal',
  domain: 'catalogue, orders, invoices, payments and support',
  aiNote: 'Demo UI response · Connect your local model and commerce data layer for live results.',
  suite: {
    NexusDistro: 'https://abraar05.github.io/NexusDistro/',
    NexusPeople: 'https://abraar05.github.io/NexusPeople/',
    NexusLogistics: 'https://abraar05.github.io/NexusLogistics/',
    NexusCRM: 'https://abraar05.github.io/NexusCRM/'
  },
  generated: {
    catalogue: { title: 'Catalogue', sub: 'Wholesale availability and contracted pricing, always current.', cards: [
      { i: '▦', t: 'Live stock', d: 'See units by warehouse in real time.' },
      { i: '৳', t: 'Your pricing', d: 'Contracted rates applied automatically.' },
      { i: '⌕', t: 'Smart search', d: 'Search by model, RAM, color or SKU.' }],
      events: [{ t: 'Redmi 15C price updated for your account', s: 'Today' }, { t: 'Note 15 4G added to catalogue', s: 'Yesterday' }, { t: 'Stock alert: Redmi 14C low', s: 'Watch' }] },
    quickorder: { title: 'Quick order', sub: 'Reorder your usual mix in under a minute.', cards: [
      { i: '⟳', t: 'Repeat last order', d: 'Re-run your most recent purchase.' },
      { i: '▦', t: 'Templates', d: 'Saved baskets for each of your stores.' },
      { i: '✦', t: 'Suggested', d: 'AI picks based on your sell-through.' }],
      events: [{ t: 'Template “Friday restock” created', s: '2d ago' }, { t: 'Saved basket re-used for SO-48291', s: 'Today' }, { t: 'Suggestion accepted · 48 × Redmi 15C', s: 'Yesterday' }] },
    orders: { title: 'Orders', sub: 'Track every order from confirmation to delivery.', cards: [
      { i: '▤', t: 'Order status', d: '7 open · 3 shipping today.' },
      { i: '⇥', t: 'Reorder', d: 'One tap to re-run any past order.' },
      { i: '✉', t: 'Updates', d: 'WhatsApp and SMS on every milestone.' }],
      events: [{ t: 'SO-48291 packed · ETA today 18:20', s: 'On track' }, { t: 'SO-48276 in transit', s: 'Chattogram → Dhaka' }, { t: 'SO-48231 delivered', s: 'Yesterday' }] },
    invoices: { title: 'Invoices', sub: 'Invoices, statements and tax documents.', cards: [
      { i: '▤', t: 'Invoices', d: 'Download PDFs with one click.' },
      { i: '⇩', t: 'Statements', d: 'Monthly statements for your records.' },
      { i: '৳', t: 'Tax documents', d: 'Mushak and withholding certificates.' }],
      events: [{ t: 'Invoice #INV-2214 generated', s: 'Today' }, { t: 'September statement ready', s: 'Yesterday' }, { t: 'VAT invoice corrected', s: '2d ago' }] },
    payments: { title: 'Payments', sub: 'Pay by MFS, bank transfer or credit line.', cards: [
      { i: '৳', t: 'Make payment', d: 'bKash, Nagad, Rocket or bank.' },
      { i: '◴', t: 'History', d: 'Every payment against every invoice.' },
      { i: '⚿', t: 'Credit line', d: '৳4.80M available · ৳2.1M usable to order.' }],
      events: [{ t: '৳420K due Friday', s: 'Reminder' }, { t: 'Payment ৳1.2M received', s: 'Yesterday' }, { t: 'Credit limit reviewed', s: 'This week' }] },
    support: { title: 'Support', sub: 'Tickets, returns and your account team.', cards: [
      { i: '◌', t: 'Tickets', d: 'Track tickets to closure.' },
      { i: '↺', t: 'Returns', d: 'Initiate and track return requests.' },
      { i: '☎', t: 'Account team', d: 'Your dedicated Nexus account manager.' }],
      events: [{ t: 'Ticket #T-1181 closed', s: 'Yesterday' }, { t: 'Return approved for 6 units', s: 'Today' }, { t: 'Call scheduled with account team', s: 'This week' }] },
    account: { title: 'Account', sub: 'Profile, addresses, users and notifications.', cards: [
      { i: '◉', t: 'Profile', d: 'Shop name, GSTIN and contact details.' },
      { i: '⌖', t: 'Addresses', d: 'Delivery addresses and defaults.' },
      { i: '☲', t: 'Notifications', d: 'Control email and SMS alerts.' }],
      events: [{ t: 'New delivery address added', s: '2d ago' }, { t: 'Notification settings updated', s: 'Yesterday' }, { t: 'Staff login added', s: 'Today' }] },
    settings: { title: 'Settings', sub: 'Security, devices and workspace preferences.', cards: [
      { i: '⚿', t: 'Security', d: 'Password, 2FA and active sessions.' },
      { i: '◐', t: 'Appearance', d: 'Light or dark mode for your team.' },
      { i: '⇄', t: 'API access', d: 'Integrate your POS or accounting tool.' }],
      events: [{ t: 'Two-factor authentication enabled', s: 'Today' }, { t: 'Old session revoked', s: 'Yesterday' }, { t: 'API key rotated', s: '2d ago' }] }
  }
};
