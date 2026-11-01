Mainframes. Medical devices. The software in your car.

They've run for generations without spending a single token. People forget that.

That's how I use AI: it helps me build the system, and the system doesn't need AI to run.

A few things I've built this way, all of them free to run, with no server and no API key:

🧍 Citizen Maker: rigged, animated game characters on demand, up to 200 per batch in 10 art styles, exported as .glb. Pass it a seed and you get the same crowd every time, on any machine.
🥁 equalizer: a drum machine where every sound is an equation you can read and edit. It uses no samples and no generative audio.
🗺️ QR Compass: every Fortune 500 company as a 3D model that turns into its own scannable QR code. It's generated at build time, then served as plain files.
📦 Behaviors: search 2,166 3D assets by how they move. The learning runs offline on a CPU, and the live demo is just a lookup.

What I've learned (more in the carousel 👇):

1️⃣ Spend tokens once, at build time. A model call at run time costs money, adds a wait and can go down, on every click, forever.
2️⃣ Replace "generate" with "seed". Output you can reproduce is output you can test.
3️⃣ Ask the agent for tools, not answers. An answer gets used once. A build script gets used every day.
4️⃣ Write the rules down (AGENTS.md) so you stop paying to explain them again every session.
5️⃣ Hand off to files, not to a chatbot. The output should outlive the conversation that made it.

My test before I put a model in the loop: will it still work with the API key revoked?

AI is a phenomenal builder. Most products just need what it builds.

🔗 ghanemja.github.io/citizen-maker · ghanemja.github.io/equalizer · ghanemja.github.io/qr · ghanemja.github.io/behaviors

#AI #SoftwareEngineering #BuildInPublic #AIAgents #Sustainability
