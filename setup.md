
# AutoPost Pro Cloud Edition - Setup Guide

### 1. Supabase Setup
1. Create a new Supabase project.
2. Go to the **SQL Editor** and paste the content of `supabase-schema.sql`.
3. Go to **Settings > API** and copy your `Project URL` and `anon public` key.

### 2. Google / Meta Developer Console
1. Create a project in Google Cloud Console for YouTube Data API v3.
2. Create an App in Meta for Developers for Instagram Content Publishing API.
3. Add your Vercel deployment URL (e.g., `https://your-app.vercel.app/api/auth/callback`) to the OAuth whitelist.

### 3. Vercel Deployment
1. Connect your GitHub repository to Vercel.
2. Add the following Environment Variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL.
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase Public Key.
   - `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase Secret Key (Service Role).
   - `CRON_SECRET`: A secure random string for authenticating cron calls.
   - `YOUTUBE_CLIENT_ID`: Your Google client ID.
   - `YOUTUBE_CLIENT_SECRET`: Your Google client secret.
   - `META_APP_ID`: Your Meta App ID.
   - `META_APP_SECRET`: Your Meta App Secret.

### 4. Running the App
- The dashboard allows you to map your Google Sheets.
- The system polls these sheets via the `/api/cron` endpoint (handled by Vercel automatically every hour).
- Approved content in the `content_items` table is distributed to platforms based on your `schedules` table settings.
