# Discord Hidden Messages

Vietnamese guide: `README_VI.md`

Hide Discord web messages using zero-width encoding with optional shared-key encryption. Includes a browser extension and a Tampermonkey userscript.

## Features
- Invisible zero-width encoding for message content with auto-decode for users who have this tool.
- Mention preservation for user, role, and channel pings, including `@everyone` and `@here`.
- Optional shared-key encryption for message payloads and supported attachments.
- Attachment encryption/decryption for images and `.txt` files via `.dhi` payloads.
- Overflow handling that stores long hidden content in a `.dni` attachment while keeping visible mentions.
- "Show more..." expands long decrypted text for easier reading.
- Works on Discord web only (not desktop or mobile apps).
- Extension popup to enable/disable and set the shared key.

## Supported Attachments
Supported attachment file extensions: `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.bmp`, `.txt`.

## Browser Extension (Chrome or Edge)
1. Open `chrome://extensions` (or `edge://extensions`).
2. Enable Developer mode.
3. Click "Load unpacked" and select `discord-invisible-extension`.
4. Pin the extension and open the popup.
5. Set the Shared key and reload Discord.

## Tampermonkey Userscript
1. Install Tampermonkey from the Chrome Web Store (or Edge Add-ons).
2. Open the Tampermonkey dashboard.
3. Create a new script and paste in `discord-invisible.user.js`, or import the file directly.
4. Save and enable the script.
5. Edit `SHARED_KEY` in `discord-invisible.user.js` to match the extension key.

## Usage
- Open `https://discord.com/channels/*` and reload.
- Messages you send will be encoded and should decode for users with the same key and a compatible script/extension.

## Configuration
- Shared key: keep the same key across all clients you want to communicate with.
- Default key exists in the script and extension settings; change it to your own for privacy.

## Updates
- Replace the extension folder and re-load it in the extensions page.
- Re-import the updated userscript and save.

## Project Structure
- `discord-invisible-extension`: Chrome/Edge extension source.
- `discord-invisible.user.js`: Tampermonkey userscript.
- `INSTALL.md`: English installation guide.
- `install_vi.md`: Vietnamese installation guide.

## Notes
- This tool modifies Discord web requests and rendering; Discord updates can break behavior.
- Only the listed attachment types are supported for encryption/decryption.
