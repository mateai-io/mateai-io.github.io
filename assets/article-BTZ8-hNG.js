import{h as i,c as s,j as t,r}from"./SiteHeader-B455sRiz.js";import{L as u}from"./LegalPage-BuhxTNK2.js";const l=`# MateAI plugin vs MateAI Studio: which should you use?

<p class="byline">By Máté Góg · Last updated <time datetime="2026-11-12">12 November 2026</time></p>

**Short answer:** Use the free plugin if you want your YouTube channel in Claude or Antigravity today and don't mind a one-time setup of about 15 minutes in Terminal. Wait for MateAI Studio if you have a Mac with Apple silicon and want an app instead.

Both connect your own YouTube channel to an AI app, so you can ask about your stats, prepare uploads and catch up on comments in plain words. The difference is how much setup you do yourself, which computers and AI apps they work with, and whether you can use them right now. I build both, so here is where they actually differ.

## How do they compare?

| | Free plugin | MateAI Studio |
|---|---|---|
| Works today? | Yes | Not yet, in development |
| Computer | Mac or Windows 10/11 PC | Mac with Apple silicon |
| AI apps | Claude Code (paid Claude plan) or Google Antigravity | Claude Desktop, Codex, Cursor, Antigravity, OpenCode |
| Setup | About 15 minutes in Terminal, once | Install the app |
| Sign-in | On Google's page, through MateAI Studio's verified sign-in | One click in the app |
| Quotas and limits | MateAI's free daily YouTube API quota, shared; your own Google project optional | Runs on MateAI's Google project, not your own |
| Price | Free | Free during early access |
| Where your data lives | Your computer; the Google login is a file in your user folder | Your Mac; the sign-in is kept in the macOS Keychain |

## Who should use the free plugin?

The plugin is for you if you want this working today. It suits you when:

- **You use Windows**, or a Mac and you're happy in Claude Code or Google Antigravity.
- **You already pay for Claude**, since the plugin runs in Claude Code, which the free Claude plan doesn't include. Antigravity is the other option.
- **You can spend about 15 minutes once** pasting a few lines into Terminal. The [step-by-step setup guide](/free-plugin/) shows every one, for Mac and Windows, and needs no coding.

What you get: Claude reads your own channel's stats through Google's official YouTube APIs, uploads videos as private drafts or schedules them, changes video details and posts comments when you ask. Deleting a video always asks you first. [What Claude can and can't see](/youtube-analytics-in-claude/) is listed in detail in the analytics article.

What to expect:

- **The quota is shared.** Google gives the built-in sign-in a free daily quota of 10,000 units, shared by everyone who uses it; heavy users can [bring their own Google project](https://github.com/mategog/mateai-youtube-mcp#use-your-own-google-cloud-client-optional-own-quota) for a quota of their own. Normal questions use little of it. If you hit the limit, the plugin stops and tells you, and the quota resets at midnight Pacific time.
- **It runs on your computer.** I, the author, receive no data. Whatever Claude reads becomes part of your conversation with your AI app.

The plugin's source code is on [GitHub](https://github.com/mategog/mateai-youtube-mcp), so you can read what it does before you install it.

## Who should wait for MateAI Studio?

MateAI Studio is a Mac app built on the plugin. It exists because Terminal is the part most people find fiddly. Wait for it if:

- **You have a Mac with Apple silicon.** Windows and Intel Macs aren't supported by the app yet.
- **You'd rather not use Terminal.** In the app you sign in on Google's own page and approve each permission. Access is read-only by default, and you turn on uploads and comments when you want them.
- **You use an AI app the plugin doesn't cover**, like Claude Desktop, Codex, Cursor or OpenCode. One click per app adds a single \`mateai\` entry to its settings. Your other settings stay, and a backup is saved first.
- **You'd like your sign-in in the macOS Keychain** rather than in a file. The tools still run on your Mac, and you don't need a MateAI account.

It's still in development and free during early access. If that changes, you'll hear about it before launch. Testers are invited in small batches.

## What do both have in common?

- **Nothing is public unless you ask.** Uploads are private drafts or scheduled by default.
- **Your password stays with Google.** You sign in on Google's own page; neither the plugin nor the app sees it.
- **It's your channel only.** Both read your own channel's data, not other creators' Studio numbers.
- **You can remove access any time** at [myaccount.google.com/permissions](https://myaccount.google.com/permissions).

## So which one?

- Want it today, on Mac or Windows, in Claude Code or Antigravity? Start with the [free plugin](/free-plugin/).
- Rather skip Terminal and use Claude Desktop, Codex, Cursor or OpenCode on a Mac? [Join the early-access list](/#early-access).
`,d=`# How to get your YouTube analytics in Claude

<p class="byline">By Máté Góg · Last updated <time datetime="2026-11-12">12 November 2026</time></p>

**Short answer:** Claude can't see your YouTube Studio on its own. You connect your channel through Google's official YouTube APIs with a free plugin, the MateAI plugin. After a one-time setup of about 15 minutes, you ask in plain words, like "How did my last five videos do?", and Claude answers from your real numbers.

This page explains how that works today, what Claude can and can't see, and where the limits are. I built the plugin for my own channel, so I'll be specific about what it actually does.

## What do you need?

- **A paid Claude plan**, because the plugin runs in Claude Code and the free plan doesn't include it. Google Antigravity works too, if you use that instead.
- **A Mac or a Windows PC** with Python 3.10 or newer. The setup guide shows how to install it.
- **The Google account that owns your channel.**
- **About 15 minutes**, once.

The plugin itself costs nothing. It uses the YouTube Data API and YouTube Analytics API. Google gives the built-in sign-in a free daily quota of 10,000 units, shared by everyone who uses it; heavy users can [bring their own Google project](https://github.com/mategog/mateai-youtube-mcp#use-your-own-google-cloud-client-optional-own-quota) for a quota of their own.

## How do you connect YouTube to Claude, step by step?

The full walkthrough, with every click and separate steps for Mac and Windows, is on the [free plugin setup guide](/free-plugin/). In short:

1. **Install Python** if your computer doesn't have it yet.
2. **Install the plugin.** In Claude Code that's two commands: \`claude plugin marketplace add mategog/mateai-youtube-mcp\`, then \`claude plugin install yt-studio@mateai-youtube-mcp\`. In Antigravity you paste one line that downloads it into Antigravity's plugin folder.
3. **Sign in.** Type \`/yt-setup\` in Claude Code (in Antigravity, run the sign-in step from the [setup guide](/free-plugin/) instead). Your browser opens Google's sign-in page, you pick your channel's account and tick every box. The plugin uses MateAI Studio's Google-verified sign-in, so there's no Google project to create. Your password is typed on Google's page and never reaches the plugin.
4. **Ask a question.** Start with something simple, like "Give me a snapshot of my channel."

## What can you ask Claude about your channel?

Once connected, you don't need special commands. Some questions that work well:

- "How did my last five videos do?"
- "Which of my Shorts lost viewers in the first two seconds?"
- "Compare average percentage viewed across my Shorts from the last three months."
- "Where does the audience drop off in this video, and what was I saying at that moment?" (This one needs a transcript file with word timings.)
- "Which traffic sources brought views to my latest video?"
- "Which video gained me the most subscribers?"

Claude reads the numbers, then does what it's good at: comparing, spotting patterns and explaining them. The numbers come from YouTube. The explanation comes from Claude, so treat it as a second opinion, not as a fact.

## What data can Claude see, and what can't it see?

**What it can see**, for your own channel:

- Your channel overview and your 50 most recent uploads, split into long videos and Shorts.
- Per video, for the last 90 days: views, engaged views, watch time, average view duration, average percentage viewed, likes, comments and subscribers gained.
- For Shorts, how many people viewed versus swiped away.
- For one video at a time, for the last 365 days: the audience retention curve (100 points), how its retention compares with similar videos on YouTube, and its traffic sources.
- Your video details (title, description, tags, privacy and schedule), including private and scheduled videos, and the comments on your videos.

**What it can't see**, because the plugin doesn't ask Google for it:

- Revenue and earnings.
- Demographics: age, gender, countries.
- Impressions and thumbnail click-through rate.
- Other people's channels in Studio detail. A public-numbers mode exists, but it's off by default and only reads what anyone can see on youtube.com.

## What are the limits?

- **Setup uses Terminal.** You paste a few lines once. The guide walks through every one.
- **The daily quota is finite and shared.** Normal questions use little of it. If you hit the limit, the plugin stops and tells you; the quota resets at midnight Pacific time.
- **Claude can misread numbers.** It works from real data, but its conclusions can still be wrong. Check anything you'd act on in YouTube Studio.
- **It's your channel only.** It doesn't do competitor research from private data, because that data isn't available to anyone but the channel owner.

## Is it private?

The plugin runs on your own computer. Your Google login is saved in a local file in your own user folder, and I, the author, receive no data. The plugin talks only to Google's YouTube APIs, and to your AI app: whatever Claude reads becomes part of your Claude conversation, which falls under Anthropic's privacy terms (or Google's, if you use Antigravity).

You can remove access at any time at [myaccount.google.com/permissions](https://myaccount.google.com/permissions) and by deleting the plugin's data folder.

The plugin can also upload videos (as private drafts or scheduled), change details and post comments, but only when you ask. Deleting a video always asks you first, and you can make it ask before other actions too.

## Is there an easier way?

Terminal is what I wanted to remove, so I'm building **MateAI Studio**: a Mac app that connects your YouTube channel with one click. It works with Claude Desktop, Codex, Cursor, Google Antigravity and OpenCode. It's still in development and free during early access. Testers are invited in small batches.

- Want it today? Use the [free plugin](/free-plugin/).
- Rather wait for the one-click version? [Join the early-access list](/#early-access).
`,h=`# How to connect YouTube to Google Antigravity

<p class="byline">By Máté Góg · Last updated <time datetime="2026-11-12">12 November 2026</time></p>

**Short answer:** Google Antigravity can't reach your YouTube channel on its own. You add a free MCP server, the MateAI plugin, by cloning it into Antigravity's plugin folder, then sign in once with \`python3 yt_studio.py setup\`. After about 15 minutes of one-time setup you ask about your stats and prepare uploads in plain words.

I built the plugin for my own channel. This page covers what is different in Antigravity. The click-by-click steps are in the [free plugin setup guide](/free-plugin/).

## What do you need?

- **Google Antigravity**, installed and signed in.
- **A Mac or a Windows PC** with Python 3.10 or newer. Antigravity starts the plugin with the \`python3\` command, so that command has to work.
- **Git**, to download the plugin. On a Mac, the first \`git\` command offers to install it for you.
- **The Google account that owns your channel.**
- **About 15 minutes**, once.

The plugin costs nothing. It uses Google's official YouTube Data API and YouTube Analytics API. Google gives the built-in sign-in a free daily quota of 10,000 units, shared by everyone who uses it; heavy users can [bring their own Google project](https://github.com/mategog/mateai-youtube-mcp#use-your-own-google-cloud-client-optional-own-quota) for a quota of their own.

## How do you add the plugin to Antigravity?

There is no install command like in Claude Code. Antigravity loads plugins from a folder in your home directory, so you download the plugin straight into it. On a Mac that's one line in Terminal:

\`git clone https://github.com/mategog/mateai-youtube-mcp.git ~/.gemini/config/plugins/mateai-youtube\`

On Windows you run the same command in PowerShell, into the \`.gemini\\config\\plugins\` folder in your user profile. The [setup guide](/free-plugin/) has both versions ready to copy.

Antigravity only reads plugins when it starts. After cloning, and again after signing in, quit Antigravity completely and open it again. If it still doesn't know about your channel, that restart is almost always the fix.

## How does signing in differ from Claude Code?

In Claude Code you type \`/yt-setup\` in the chat. That command doesn't exist in Antigravity. Instead you run the plugin's setup wizard yourself, from its folder:

\`cd ~/.gemini/config/plugins/mateai-youtube && python3 yt_studio.py setup\`

The wizard:

1. Installs Google's sign-in libraries into the plugin folder.
2. Opens Google's sign-in in your browser. You pick your channel's account and tick every box.
3. Prints **Setup complete!** and opens a page with your channel stats.

The plugin uses MateAI Studio's Google-verified sign-in, so there's no Google project to create. Your password is typed on Google's page and never reaches the plugin.

One more difference: when you install it this way, the plugin keeps your login and its cache inside that same plugin folder, not in Claude's data folder.

## What can you ask Antigravity about your channel?

Start a new chat after the restart and ask normally. For example:

- "Give me a snapshot of my channel."
- "How did my last five videos do?"
- "Which of my Shorts lost viewers in the first two seconds?"
- "Which traffic sources brought views to my latest video?"
- "Do a dry run of uploading short.mp4 as a private video with a title and hashtags."

Try a **dry run** before any real upload. It shows exactly what would be sent, with the schedule in your local time, and sends nothing to YouTube. By default, real uploads go up as private drafts or scheduled for the time you set. The plugin can also change video details and post or reply to comments when you ask. Deleting a video always asks you first and needs its exact title.

For a longer list of questions and exactly which numbers the plugin can read, see [how to get your YouTube analytics in Claude](/youtube-analytics-in-claude/). The data is the same in Antigravity.

## What are the limits?

- **Some extras are Claude Code only.** The \`/yt-setup\` command and the \`/yt-dashboard\` card above the prompt are Claude Code features. In Antigravity you get the tools, plus the stats page the wizard opens.
- **The quota is finite and shared.** Normal questions use little of it. If you hit the limit, the plugin stops and tells you; it resets at midnight Pacific time.
- **Your channel only.** It doesn't see revenue, demographics, impressions or other people's private stats.
- **The AI can misread numbers.** The numbers come from YouTube, the conclusions don't. Check anything you'd act on in YouTube Studio.

## Is it private?

The plugin runs on your computer and talks only to Google's YouTube APIs and to Antigravity. I, the author, receive no data. Whatever the plugin reads becomes part of your Antigravity chat, which falls under Google's terms for Antigravity.

To remove it, delete the \`mateai-youtube\` plugin folder, which also deletes your saved login. Then remove its access at [myaccount.google.com/permissions](https://myaccount.google.com/permissions).

## Is there an easier way?

Terminal is the fiddly part, so I'm building **MateAI Studio**: a Mac app that connects your channel with one click. It works with Google Antigravity, Claude Desktop, Codex, Cursor and OpenCode. It's in development and free during early access, with testers invited in small batches.

- Want it today? Follow the [free plugin setup guide](/free-plugin/).
- Rather wait for the one-click version? [Join the early-access list](/#early-access).
`,c=`# YouTube MCP server for Codex: how to connect your channel

<p class="byline">By Máté Góg · Last updated <time datetime="2026-11-12">12 November 2026</time></p>

**Short answer:** Codex can use YouTube through an MCP server: a small program on your computer that Codex starts and talks to. The free MateAI plugin is one. You register it in Codex's \`~/.codex/config.toml\` file, but its setup guide covers Claude Code and Antigravity only, so with Codex you do a few steps by hand.

This page shows those steps, what they're based on, and what I haven't tested yet. I built the plugin for my own channel, so I'll be specific about what it does and where it stops.

## What is a YouTube MCP server?

MCP (Model Context Protocol) is a standard way for an AI app to call tools that live outside it. A YouTube MCP server gives the AI tools like "get my channel snapshot", "show this video's retention curve" or "upload this file as a private draft". The AI decides when to call them; the server does the actual talking to YouTube.

The MateAI plugin uses Google's official YouTube Data API and YouTube Analytics API. It runs on your own computer, is free within Google's daily quota, and I, the author, receive no data.

## Does the free MateAI plugin work with Codex?

It should, but I haven't tested it with Codex yet. Here's why I expect it to work: the server is a plain Python script that speaks standard MCP over stdio, and Codex reads MCP servers from \`~/.codex/config.toml\`. MateAI Studio, the Mac app I'm building, is written to register the same server for Codex in exactly that file, with the settings shown below.

What you get in Codex is the MCP tools only. The plugin's slash commands, like \`/yt-setup\` and \`/yt-safety\`, and its bundled skills are Claude Code features, so they don't appear in Codex. You run the sign-in wizard from Terminal instead.

## How do you connect YouTube to Codex, step by step?

Expect about 15 minutes. The steps are for a Mac; I haven't written Codex steps for Windows yet.

1. **Install Python 3.10 or newer** and check that \`python3 --version\` works in Terminal.
2. **Download the plugin** to a folder you'll keep:

   \`\`\`bash
   git clone https://github.com/mategog/mateai-youtube-mcp.git ~/mateai-youtube-mcp
   \`\`\`

3. **Sign in.** The plugin uses MateAI Studio's Google-verified sign-in, so there's no Google project to create. Run the wizard from the plugin folder:

   \`\`\`bash
   cd ~/mateai-youtube-mcp
   python3 yt_studio.py setup
   \`\`\`

   It installs Google's libraries into a local \`.venv\` and opens Google's sign-in page. Your login is saved inside that folder.

4. **Register the server in Codex.** Open \`~/.codex/config.toml\` (create it if it doesn't exist) and add this. Replace \`you\` with your Mac username in both paths:

   \`\`\`toml
   [mcp_servers.mateai-youtube]
   command = "/Users/you/mateai-youtube-mcp/.venv/bin/python"
   args = ["/Users/you/mateai-youtube-mcp/mcp_server.py"]
   startup_timeout_sec = 30
   \`\`\`

   Both paths must be absolute. The command points at the Python inside the \`.venv\` folder the wizard created, not at plain \`python3\`: an app opened from the Dock may not find \`python3\`, or may find an older Python than the 3.10 the plugin needs. \`startup_timeout_sec\` gives the server more time to start than Codex's default allows; MateAI Studio's code uses the same value.

   If the file already has a \`[mcp_servers.mateai-youtube]\` entry from an earlier try, replace it instead of adding a second one.

5. **Restart Codex** and ask something simple, like "Give me a snapshot of my channel."

## What can you ask Codex about your channel?

The same things as in any other MCP app, since the tools are the same:

- "How did my last five videos do?"
- "Which of my Shorts lost viewers in the first two seconds?"
- "Which traffic sources brought views to my latest video?"
- "Upload \`exports/short.mp4\` as a private draft with this title."

The numbers come from YouTube. The explanation comes from the AI, so treat it as a second opinion and check anything you'd act on in YouTube Studio. The [YouTube analytics in Claude](/youtube-analytics-in-claude/) article lists exactly what data the plugin can and can't see; it's the same in Codex.

## What are the limits with Codex?

- **Not tested yet.** The steps above follow the Codex config in MateAI Studio's code, not a run of the free plugin inside Codex. If something doesn't work, the plugin's GitHub issues are the place to tell me.
- **Confirmation boxes may not show.** Before risky actions like deleting a video, the plugin asks for confirmation through MCP. I haven't checked whether Codex shows that box. If a client can't, the plugin refuses deletes instead of going ahead.
- **Uploads stay private.** Videos go up as private drafts or scheduled; you publish them yourself.
- **The daily quota is finite.** Google gives the built-in sign-in a free daily quota of 10,000 units, shared by everyone who uses it; heavy users can [bring their own Google project](https://github.com/mategog/mateai-youtube-mcp#use-your-own-google-cloud-client-optional-own-quota) for a quota of their own. Normal questions use little of it, and the quota resets at midnight Pacific time.

## Is there an easier way?

Terminal and the config file are the steps I wanted to remove, so I'm building **MateAI Studio**: a Mac app that connects your YouTube channel with one click and adds itself to Codex for you. It's planned for Claude Desktop, Cursor, Google Antigravity and OpenCode too. It's still in development, not downloadable yet, and free during early access. Testers are invited in small batches.

- Want it today? Use the [free plugin](/free-plugin/) with the steps above.
- Rather wait for the one-click version? [Join the early-access list](/#early-access).
`,p=`# YouTube MCP server for Cursor: how to connect your channel

<p class="byline">By Máté Góg · Last updated <time datetime="2026-11-12">12 November 2026</time></p>

**Short answer:** Cursor talks to outside tools through MCP servers listed in a settings file, \`~/.cursor/mcp.json\`. The free MateAI plugin is an MCP server for YouTube, so you can add it there by hand. It's documented for Claude Code and Antigravity, not Cursor, so treat these steps as untested for now.

This page shows what that file entry looks like, how you sign in to Google, and the easier route I'm building. I wrote the plugin for my own channel, and I'll be clear about which parts I've checked.

## What does a YouTube MCP server do in Cursor?

An MCP server is a small program your AI app starts in the background. It gives the AI a list of tools it can call. The MateAI plugin's tools read your channel through Google's official YouTube Data API and YouTube Analytics API, so you can ask in plain words:

- "How did my last five videos do?"
- "Which of my Shorts lost viewers in the first two seconds?"
- "Show me the comments on my latest video."

It can also upload videos as private drafts or scheduled, change titles and descriptions, and post comments, but only when you ask. Deleting a video always asks you first.

## Is Cursor officially supported?

Not by the free plugin yet. Its [setup guide](/free-plugin/) covers Claude Code and Google Antigravity, and those are the two I've tested.

Cursor support is planned for **MateAI Studio**, the Mac app I'm building, which writes this entry for you (see below). The manual steps here use the same file and the same entry shape the app writes, but I haven't tested them end to end with the free plugin. If something doesn't work, the Claude Code or Antigravity route in the guide is the safer bet.

## What do you need before you start?

- **A Mac.** These steps use Mac paths. The plugin itself also runs on Windows, but I haven't checked where Cursor keeps its file there, so I've left Windows out.
- **Python 3.10 or newer**, and **git**.
- **The Google account that owns your channel.**
- **About 15 minutes**, once.

The plugin costs nothing. Google gives the built-in sign-in a free daily quota of 10,000 units, shared by everyone who uses it; heavy users can [bring their own Google project](https://github.com/mategog/mateai-youtube-mcp#use-your-own-google-cloud-client-optional-own-quota) for a quota of their own.

## How do you connect YouTube to Cursor by hand?

1. **Download the plugin.** In Terminal:
   \`git clone https://github.com/mategog/mateai-youtube-mcp.git ~/mateai-youtube-mcp\`
2. **Sign in.** Run \`cd ~/mateai-youtube-mcp && python3 yt_studio.py setup\`. The wizard creates a \`.venv\` folder there with its own Python and Google's libraries, then starts Google's sign-in. The plugin uses MateAI Studio's Google-verified sign-in, so there's no Google project to create.
3. **Add the server to Cursor's file.** Open \`~/.cursor/mcp.json\` (create it if it doesn't exist) and add an entry under \`mcpServers\`. Point it at the Python inside the plugin's \`.venv\` folder, so Cursor uses the same Python the wizard set up. Replace \`/Users/you\` with your own home folder; JSON needs full paths, not \`~\`:

   \`\`\`json
   {
     "mcpServers": {
       "mateai-youtube": {
         "type": "stdio",
         "command": "/Users/you/mateai-youtube-mcp/.venv/bin/python",
         "args": ["/Users/you/mateai-youtube-mcp/mcp_server.py"]
       }
     }
   }
   \`\`\`

   If the file already lists other servers, add only the \`"mateai-youtube"\` block next to them.
4. **Restart Cursor**, then ask: "Give me a snapshot of my channel."

The plugin keeps its login and cached stats inside that \`mateai-youtube-mcp\` folder, in owner-only files. Nothing goes to me.

## What are the limits?

- **Untested in Cursor.** Said above, but it's the main one.
- **No revenue, demographics or thumbnail click-through rate.** The plugin doesn't ask Google for them. What it does read is listed in [how to get your YouTube analytics in Claude](/youtube-analytics-in-claude/); the data is the same whichever app asks.
- **Your channel only.** It reads Studio data for the account you signed in with.
- **The AI can misread numbers.** The data is real, but its conclusions are a second opinion. Check anything you'd act on in YouTube Studio.

## Is there an easier way?

Terminal and the hand-edited file are exactly what I want to remove, so I'm building **MateAI Studio**: a Mac app that connects your YouTube channel with one click. It adds itself to Cursor, Claude Desktop, Codex, Google Antigravity and OpenCode for you, keeps a backup of the settings file it changes, and tells you to restart the app. It's still in development and free during early access. Testers are invited in small batches.

- Comfortable with the steps above? Use the [free plugin](/free-plugin/).
- Rather have the one-click version? [Join the early-access list](/#early-access).
`,y=Object.assign({"./content/articles/free-plugin-vs-mateai-studio.md":l,"./content/articles/youtube-analytics-in-claude.md":d,"./content/articles/youtube-in-antigravity.md":h,"./content/articles/youtube-mcp-codex.md":c,"./content/articles/youtube-mcp-cursor.md":p}),g=Object.fromEntries(Object.entries(y).map(([o,a])=>[o.slice(19,-3),a])),m=g[location.pathname.split("/")[1]],e=document.getElementById("root"),n=t.jsx(r.StrictMode,{children:t.jsx(u,{markdown:m})});e.hasChildNodes()?i(e,n):s(e).render(n);
