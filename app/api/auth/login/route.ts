import { Magic } from 'magic-sdk';
const magic = new Magic("pk_live_1285216E8AB0DF3C", {  network: 'mainnet'});
/* Connect to any email input or enter your own */
await magic.auth.loginWithEmailOTP({ email: "your-email" });