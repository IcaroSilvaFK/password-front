import { atom } from 'jotai';

interface IPasswordsAtomProps {
  pass: string;
}

export const passwordsAtom = atom<string[]>([]);
