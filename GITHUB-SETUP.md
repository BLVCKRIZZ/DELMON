# Private birthday RSVP list

The public RSVP page can submit names, but it does not query or display them. The names are visible only in `admin.html` to the two admin email accounts allowed by row-level security. The admin page also downloads `Dells birthday list.txt` with one numbered name per line.

## 1. Create the Supabase project

1. Create a Supabase project and enable the Email sign-in provider.
2. In **Authentication → Users**, add and confirm admin users for `lebea.delmon@gmail.com` and `deleelebea@gmail.com`. Do not enable public sign-ups.
3. Run the complete `supabase-setup.sql` in **SQL Editor**.

The SQL grants public users permission to insert RSVP entries, but only the two approved admin email accounts permission to read them.

## 2. Configure the pages

In **Project Settings → API**, copy the Project URL and the publishable/anon key. In the birthday page and `admin.html`, replace:

- `YOUR_SUPABASE_URL` with the Project URL
- `YOUR_SUPABASE_ANON_KEY` with the publishable/anon key

Never put a `service_role` or secret key in an HTML file or GitHub repository. The public key is intended for browser use; row-level security is what protects the names.

## 3. Publish on GitHub Pages

Upload the updated `Delly’s Birthday Braai.html`, `admin.html`, and `delly-scenic-portrait.png` to the root of the GitHub Pages repository, replacing the two HTML files and adding the transparent portrait. Keep the existing `index.html` redirect. Enable Pages in the repository settings if it is not already enabled.

In Supabase, open **Authentication → URL Configuration** and add the exact admin page URL to the allowed redirect URLs, for example:

`https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY/admin.html`

Once GitHub Pages is live, open that `/admin.html` address, enter the admin email, and follow the sign-in link sent to your inbox. That private page is where you can view the names; **Download names** saves the numbered `.txt` list.

## Notes

- Names already stored by the old Claude page are not transferred automatically. New RSVPs will be stored in Supabase after the configured page is published.
- The admin page refreshes the list when opened and has a **Refresh list** button. The SQL and HTML use only browser-safe credentials; no server secret is exposed.
