# How to Ace Round 2

**Goal:** Leave Shubham thinking — *"I'd want this person on my team."*

This isn't about being perfect. It's about being **clear, collaborative, and production-minded** for 45 minutes.

---

## The 5 things that actually win this interview

| # | What they evaluate | How you ace it |
|---|-------------------|----------------|
| 1 | **Problem solving** | Clarify → simple solution → improve |
| 2 | **Communication** | Think aloud; no long silent coding |
| 3 | **Production mindset** | Mention edge cases, errors, logging, retries |
| 4 | **Ownership** | Strong project stories with real tradeoffs |
| 5 | **Culture fit** | Curious, humble, startup-ready — not arrogant |

---

## Before the interview

### 24 hours before

- [ ] Re-read your **2 project stories** (see `prepare.md`)
- [ ] Do **1 timed coding problem** (30 min, talk out loud)
- [ ] Skim AWS one-liners — don't cram new topics
- [ ] Pick **2 questions** to ask Shubham
- [ ] Test camera, mic, internet; quiet place ready
- [ ] Resume open — they may reference round 1 or your experience

### 1 hour before

- [ ] No new hard topics — light review only
- [ ] Water nearby; bathroom break done
- [ ] Close distracting tabs/notifications
- [ ] Have a blank doc or editor ready if it's a live coding round
- [ ] Remind yourself: **collaboration > perfection**

### Mindset

```
They already liked you enough to pass round 1.
Round 2 is "can we work together?" — not "can you memorize algorithms?"
```

---

## First 5 minutes — set the tone

### Do this

1. **Smile, be warm** — senior engineers hire people they want to work with
2. **Brief intro ready** (30 seconds max):
   - Current role + stack
   - One thing you're proud of building
   - Why this company interests you (modernizing insurance, full-stack ownership, scale)
3. **Listen** when they explain the format — don't interrupt

### Your 30-second intro (fill in)

```
Hi, I'm [name]. I'm a [role] with [X years] experience, mostly in [stack].
Recently I [one concrete thing you built — e.g. shipped X feature / owned Y service].
I'm excited about this role because [one real reason — greenfield product, event-driven scale, impact on insurance UX].
```

### Don't do this

- Don't recite your entire resume
- Don't badmouth current/previous employers
- Don't say "I'm nervous" — channel it into energy

---

## During coding — the playbook

### Step 1: Clarify (2–3 min) — non-negotiable

Always ask before typing:

- "Can I assume the input is always valid, or should I handle edge cases?"
- "Return format — object, array, or throw on error?"
- "Any constraints on time/space complexity?"
- "Should I write this as a plain function or React component?"

**Why it aces:** Shows you don't jump into code blind — that's what seniors do in real work.

### Step 2: State your approach (1–2 min)

Say something like:

```
"I'll start with a straightforward approach using [X].
Time is O(n), space is O(n).
If we have time, I can optimize [Y]."
```

Then wait for a nod or "go ahead."

### Step 3: Code simply first

- Working solution > clever incomplete solution
- Use clear variable names (`userApplications`, not `arr`)
- Handle the happy path first, then edge cases

### Step 4: Test out loud

Walk through 2–3 cases:

- Normal input
- Empty / null / edge case
- One failure case (network error, duplicate submit)

### Step 5: Improve (if time left)

Offer upgrades — this is where you **stand out**:

- "I'd add retry with backoff for the API call."
- "In prod I'd add structured logging with a request ID."
- "For scale I'd paginate this instead of loading all rows."
- "This should be idempotent if the user double-clicks submit."

---

## Phrases that signal "senior engineer"

Sprinkle these naturally when relevant:

| Situation | Say something like |
|-----------|-------------------|
| API design | "I'd return quickly and process the heavy work async." |
| Errors | "I'd fail with a clear error shape the frontend can handle." |
| Retries | "Retries need to be idempotent so we don't duplicate records." |
| Frontend | "I'd avoid unnecessary re-renders — memoize only if profiling shows a problem." |
| Debugging | "I'd check logs with a correlation ID to trace the request across services." |
| Tradeoffs | "This is simpler to ship; the tradeoff is we'd need to refactor if traffic 10x's." |

Don't force every phrase. One or two per interview is enough.

---

## If you get stuck

### Do

1. **Say where you're stuck** — "I'm thinking through how to handle concurrent updates..."
2. **Talk through a brute force** — "Worst case I could loop and..."
3. **Ask a hint** — "Is it okay to use a hash map here?"
4. **Write pseudocode** first, then code

### Don't

- Go silent for 2+ minutes
- Pretend you know something you don't
- Give up without showing your reasoning

**Interviewers remember:** calm problem-solving under pressure, not instant answers.

---

## Project deep-dive — how to ace it

If they ask "tell me about a project" or drill into your resume:

### Structure (2–3 min per project)

```
1. Context     — What was the business problem? (1 sentence)
2. Your role   — What did YOU own? (be specific)
3. Technical   — Key decisions + why
4. Outcome     — Shipped? Metrics? Users affected?
5. Learning    — What broke or what you'd do differently
```

### Ace moves

- Say **"I"** for your work, **"we"** for team wins
- Mention one **tradeoff** you made consciously
- Mention one **production moment** — bug, outage, perf issue you fixed
- Connect to their world when natural: "Similar to async workflows / multi-tenant / logging across services"

### Red flags to avoid

- Vague: "I worked on the backend" → **Bad**
- Specific: "I owned the quote API — validation, DynamoDB writes, EventBridge publish" → **Good**

---

## If it's system design (lite) instead of live coding

### Framework (10–15 min discussion)

```
1. Requirements   — functional + non-functional (scale, latency)
2. API sketch      — main endpoints or events
3. Data            — what gets stored, key access patterns
4. Async flow      — what happens in background
5. Failure modes   — timeout, retry, DLQ
6. Observability   — logs, metrics, alerts
```

### Example they might give

> "Design flow for a user applying for insurance online."

**Strong answer skeleton:**

1. `POST /applications` — validate, auth, tenant ID
2. Persist application record
3. Return `201` + application ID immediately
4. Publish `ApplicationSubmitted` event
5. Workers: risk check, PDF, email, agent notification
6. Status endpoint or webhook for frontend polling

Keep it **simple and complete** — not 20 boxes on a diagram.

---

## Body language & presence (video call)

- [ ] Look at camera when making key points (not only the screen)
- [ ] Nod when they're explaining — show you're listening
- [ ] Don't rush — pausing to think is fine
- [ ] If they correct you, say "good point" and adapt — no defensiveness
- [ ] Energy up slightly — flat monotone kills interviews

---

## Last 5–10 minutes — questions that ace it

Ask questions that show you've thought about **their** work:

**Strong questions (pick 2):**

1. "What's the most interesting technical challenge the platform team is solving right now?"
2. "How does the team balance shipping features fast vs keeping 100+ services maintainable?"
3. "What would success look like for someone in this role in the first 90 days?"
4. "What do you wish you'd known when you joined the company as an early engineer?"

**Weak questions (avoid):**

- "What's the salary?" (wrong round unless they bring it up)
- "How many hours do people work?" (signals wrong priorities)
- "What does the company do?" (you should already know)

### Close strong

```
"Thanks for your time — I really enjoyed the discussion, especially [specific thing from the interview].
I'm excited about the role and would love to move forward."
```

---

## Day-of checklist (print or skim)

```
[ ] Intro rehearsed (30 sec)
[ ] 2 project stories ready
[ ] Editor / pen & paper ready
[ ] Clarifying questions habit locked in
[ ] 2 questions for Shubham ready
[ ] Calm — they want you to succeed
```

---

## What "aced it" feels like

You don't need to solve everything perfectly. You aced it if:

- [ ] You communicated clearly the whole time
- [ ] You asked good clarifying questions
- [ ] You got to a working solution or a solid partial with good reasoning
- [ ] You showed ownership in project stories
- [ ] You sounded like someone who'd ship safely in prod
- [ ] You left them with a good collaborative vibe

---

## If things go wrong

| Situation | Recovery |
|-----------|----------|
| Blank on coding | Talk brute force, ask hint, write pseudocode |
| Wrong answer | "Let me reconsider..." — fix it calmly |
| Running out of time | "Here's what I'd do next: edge cases + tests + logging" |
| Internet glitch | Apologize once, recap where you were, continue |
| Don't know AWS term | "I haven't used that directly — my understanding is..." |

One bad moment rarely kills the interview. **How you recover** matters more.

---

## Night before — don't

- Cram 5 new topics
- Stay up late doing LeetCode
- Read negative interview stories on Reddit

## Night before — do

- Sleep 7+ hours
- Light review of `prepare.md` checklists
- Trust round 1 — they already see potential in you

---

## Post-interview (within 1 hour)

Fill this in while it's fresh — update `prepare.md` notes too.

```
What format was it? (coding / design / project / mix):

Questions they asked:

What I did well:

What I'd improve:

Anything surprising:

Follow-up I should send (optional short thank-you email):
```

---

## Final rounds — senior / staff bar

If the conversation goes past coding into **architecture and production**, lean on:

| Folder | Use when they ask… |
|--------|-------------------|
| `architecture-tradeoffs/` | "When would you NOT use microservices/Redis/serverless?" |
| `production-engineering/` | Incidents, SLOs, rollbacks, postmortems |
| `distributed-systems/` | CAP, consistency, sharding, replication |
| `security-advanced/` | OAuth2/OIDC, SSRF, webhook signing |
| `project-deep-dive/` | **Highest ROI** — decisions, failures, what you'd redo |

Sound bite: tradeoffs beat trivia. Name the **failure mode** and **what you'd do differently**.

---

## One page summary

```
CLARIFY → PLAN ALOUD → CODE SIMPLE → TEST → IMPROVE (prod mindset)
OWN YOUR STORIES → ASK SMART QUESTIONS → BE NICE TO WORK WITH
```

**They hire humans, not robots. Be the engineer they'd want on a late-night prod incident call — calm, clear, and helpful.**
