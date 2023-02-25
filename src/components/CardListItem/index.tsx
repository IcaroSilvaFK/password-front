import { useEffect, useState } from 'react';
import { FaRegCopy, FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container } from './styles';

interface ICardListItemProps {
  pass: string;
}

export function CardListItem(props: ICardListItemProps) {
  const { pass } = props;
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const textInPaste = await navigator.clipboard.readText();
        if (textInPaste === pass) {
          setIsCopied(true);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  async function copyPasswordToClipBoard(pass: string) {
    try {
      await navigator.clipboard.writeText(pass);
      toast.success('🚀Copy Success!', {
        theme: 'dark',
      });
      setIsCopied(true);
    } catch (err) {
      setIsCopied(false);
      console.log(err);
    }
  }

  return (
    <Container>
      <span>{pass}</span>
      {isCopied ? (
        <FaCheck size={20} />
      ) : (
        <button onClick={() => copyPasswordToClipBoard(pass)}>
          <FaRegCopy size={20} />
        </button>
      )}
    </Container>
  );
}
