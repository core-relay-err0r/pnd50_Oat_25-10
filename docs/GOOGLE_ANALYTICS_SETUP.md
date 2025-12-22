# Google Analytics Setup Guide for PND50

## Overview
This guide shows you how to connect Google Analytics 4 (GA4) to your PND50 website.

---

## Step-by-Step Setup

### Step 1: Create Google Analytics Account & Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account (oat3653377@gmail.com)
3. Click **"Admin"** (gear icon in bottom left)
4. Click **"Create Account"**
   - Account name: `PND50`
   - Data sharing settings: Configure as needed
   - Click **"Next"**

5. **Create Property:**
   - Property name: `PND50 Website`
   - Time zone: `(GMT+07:00) Bangkok`
   - Currency: `Thai Baht (฿)`
   - Click **"Next"**

6. **Business Information:**
   - Industry: `Professional Services`
   - Business size: Select appropriate size
   - Select objectives: `Generate leads`
   - Click **"Create"**

7. Accept Terms of Service

---

### Step 2: Set Up Web Data Stream

1. After creating property, select **"Web"** platform
2. Enter website details:
   - **Website URL:** `https://pnd50.com`
   - **Stream name:** `PND50 Production`
3. Click **"Create stream"**
4. **Copy your Measurement ID** (format: `G-XXXXXXXXXX`)
   - It appears at the top of the stream details page
   - Keep this ID safe - you'll need it in the next step

---

### Step 3: Add Environment Variable to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **PND50main**
3. Navigate to: **Settings** → **Environment Variables**
4. Click **"Add New"**
5. Enter the following:
   - **Key:** `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value:** Your Measurement ID (e.g., `G-ABC123DEF4`)
   - **Environments:** Select all:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
6. Click **"Save"**
7. **Important:** Go to the **Deployments** tab and click **"Redeploy"** to apply the new variable

---

### Step 4: Verify Installation

After redeploying, verify Google Analytics is working:

#### Method 1: Google Analytics Real-Time Report
1. Go to your GA4 property
2. Click **"Reports"** → **"Realtime"**
3. Open your website (https://pnd50.com) in a new tab
4. You should see yourself in the real-time report within 30 seconds

#### Method 2: Browser Developer Tools
1. Open your website
2. Press `F12` or right-click → **"Inspect"**
3. Go to **"Network"** tab
4. Filter by: `google-analytics.com`
5. Navigate through your site
6. You should see requests to `collect?v=2&tid=G-XXXXXXXXXX`

#### Method 3: Google Tag Assistant (Chrome Extension)
1. Install [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-companion/jmekfmbnaedfebfnmakmokmlfpblbfdm)
2. Open your website
3. Click the extension icon
4. You should see your GA4 tag firing

---

## What's Being Tracked

### Automatic Tracking
- **Page views:** Every page visit
- **Scroll depth:** How far users scroll
- **Outbound clicks:** Links to external sites
- **Site search:** If you add search functionality
- **Video engagement:** If you embed videos

### Custom Events Already Implemented
All these events send to both Vercel Analytics and Google Analytics:

| Event | Category | Trigger |
|-------|----------|---------|
| `form_submit` | Engagement | Contact/quote form submission |
| `calculator_complete` | Engagement | Calculator form completed |
| `view_service` | Page View | Service page viewed |
| `click_cta` | Engagement | CTA button clicked |
| `open_faq` | Engagement | FAQ item expanded |
| `download` | Engagement | File downloaded |
| `newsletter_signup` | Conversion | Newsletter signup |
| `conversion` | Conversion | Main conversion events |

---

## Viewing Your Data

### Google Analytics Dashboard

1. **Overview:** Analytics Home → Reports → Life cycle → Acquisition → Overview
2. **Real-time users:** Reports → Realtime
3. **Page views:** Reports → Engagement → Pages and screens
4. **Events:** Reports → Engagement → Events
5. **Conversions:** Reports → Engagement → Conversions

### Key Reports to Monitor

| Report | Location | What It Shows |
|--------|----------|---------------|
| **Traffic Sources** | Acquisition → Traffic acquisition | Where visitors come from |
| **Landing Pages** | Engagement → Landing page | First page users see |
| **Popular Pages** | Engagement → Pages and screens | Most viewed pages |
| **Events** | Engagement → Events | Custom event tracking |
| **Conversions** | Engagement → Conversions | Goal completions |

---

## Setting Up Conversion Goals

1. Go to **Admin** → **Events**
2. Click **"Create event"**
3. Or mark existing events as conversions:
   - Find `conversion` event
   - Toggle **"Mark as conversion"**

Recommended conversions to track:
- `form_submit` (contact forms)
- `calculator_complete` (fee calculator)
- `conversion` (all conversion events)

---

## Privacy & Compliance

Your implementation is **GDPR compliant** by default:

- No cookies without consent (if you add cookie banner)
- IP anonymization enabled
- Data retention: 14 months (recommended)
- User deletion requests: Can be handled in GA4 settings

To enhance privacy:
1. Go to **Admin** → **Data Settings** → **Data Retention**
2. Set to **2 months** for stricter compliance
3. Enable **"Reset user data on new activity"**

---

## Troubleshooting

### Events Not Showing Up?
- Wait 24-48 hours for data to populate
- Check Realtime reports for immediate feedback
- Verify the Measurement ID is correct in Vercel
- Ensure you redeployed after adding the env variable

### Duplicate Page Views?
- This is normal if using both Vercel Analytics and GA4
- Each service tracks independently

### No Data in Production?
- Check that env variable is set for Production environment
- Verify domain in GA4 matches your actual domain
- Check browser console for any GA4 errors

---

## Support Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GA4 Setup Assistant](https://support.google.com/analytics/answer/9744165)
- [Event tracking guide](https://developers.google.com/analytics/devguides/collection/ga4/events)

---

## Summary

You now have dual analytics tracking:
1. **Vercel Analytics** - Simple, privacy-first, built into Vercel
2. **Google Analytics 4** - Comprehensive, industry standard, detailed reports

Both work together to give you complete visibility into your website performance.
