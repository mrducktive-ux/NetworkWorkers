# Backend and integrations plan

The GitHub Pages starter is intentionally static and single-player. GitHub Pages cannot safely host private server secrets or a Discord bot. Use a separate backend for online services.

## Suggested architecture

- Frontend: this static app, later upgraded to a React/Phaser app if needed
- Hosting: GitHub Pages for static frontend, or a server-capable host for API routes
- Database/auth: Supabase Auth + Postgres + Realtime
- Discord: bot process hosted separately, with credentials stored as server environment variables
- Server functions: validate job completion, XP, credits, course results and role changes

## Suggested database tables

### profiles
- `id` UUID, linked to auth user
- `employee_code` unique text
- `display_name` text
- `department_id` text
- `grade` text
- `experience` integer
- `performance_score` integer
- `created_at` timestamp

### departments
- `id` text primary key
- `name` text
- `description` text

### work_orders
- `id` UUID
- `title` text
- `department_id` text
- `scenario_type` text
- `priority` text
- `status` text
- `assigned_to` UUID nullable
- `created_at` timestamp

### work_order_records
- `id` UUID
- `work_order_id` UUID
- `employee_id` UUID
- `result` text
- `score` integer
- `submitted_at` timestamp

### course_records
- `id` UUID
- `employee_id` UUID
- `course_id` text
- `score` integer
- `passed_at` timestamp

### discord_links
- `employee_id` UUID
- `discord_user_id` text unique
- `linked_at` timestamp

## Security requirements

- Enable Row Level Security on all user-owned data.
- A user can read and update only their own profile.
- Never allow a browser to directly award XP, credits, qualifications or promotions.
- Validate all job submissions in a server-side function.
- Keep Discord bot token, OAuth client secret and Supabase service-role key on the server only.
- Use the Supabase anon/publishable key only with correctly configured RLS.
- Verify Discord OAuth state and callback.
- Rate-limit account linking and role-sync requests.
- Log administrative actions.

## Discord workflow

1. User chooses Connect Discord.
2. Browser redirects to a backend OAuth endpoint.
3. Backend validates OAuth state and exchanges the code using server-held credentials.
4. Backend stores the Discord user ID against the authenticated game profile.
5. Bot checks the verified game profile before assigning permitted community roles.

The browser must never call Discord role-management endpoints with a bot token.

## Multiplayer workflow

1. Client requests a work order.
2. Server checks eligibility and assignment.
3. Realtime channel broadcasts permitted state.
4. Client sends an action or job submission.
5. Server validates the action and updates the canonical record.
6. Other clients receive the updated state.

Do not trust client-submitted scores, XP totals or completion flags.
