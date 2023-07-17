import { Magic } from 'magic-sdk';

// export const initializeMagic = () => {
//   const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string)
//   // Configure any additional settings if needed
//   // magic.configuration.set(...);

//   return magic;
// };
export const initializeMagic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string)