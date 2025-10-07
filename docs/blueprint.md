# **App Name**: TaxWise

## Core Features:

- User Authentication: Secure user authentication using Firebase Auth with role-based access control.
- Sales Data Import: Import sales data from Excel or CSV files, parsed locally in the browser.
- Purchase Data Import: Import purchase data from Excel or CSV files, parsed locally in the browser, with the ability to upload supporting documents to Firebase Storage.
- Tax Calculation: Calculate taxes (IVA, IIBB, totals) using server-side functions (Next.js API routes) for security.
- TXT Report Generation: Generate TXT reports for tax declarations in a tab-delimited format, downloadable via an API route.
- Real-time Dashboard: Display a real-time dashboard with total sales/purchases, estimated IVA, and declaration status using Firebase Firestore.
- Admin Configuration: Allow administrators to manage users, roles, and tax rates.

## Style Guidelines:

- Primary color: Deep blue (#1E3A8A) to convey trust and professionalism.
- Background color: Light gray (#F9FAFB) for a clean and neutral backdrop.
- Accent color: Teal (#0D9488) to highlight key actions and information.
- Font pairing: 'Inter' (sans-serif) for body text and 'PT Sans' (sans-serif) for headlines, to create a modern yet readable interface.
- Note: currently only Google Fonts are supported.
- Use clear, minimalist icons to represent data and actions.
- Use a clean, organized layout with clear visual hierarchy to facilitate easy navigation and data comprehension.
- Subtle transitions and loading animations to improve user experience.