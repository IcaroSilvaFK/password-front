import { atom } from 'jotai';

interface IPasswordsAtomProps {
  id: string;
  pass: string;
}

export const passwordsAtom = atom<IPasswordsAtomProps[]>([]);
