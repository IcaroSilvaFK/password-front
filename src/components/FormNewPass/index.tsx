import { FormEvent, useId, useRef, useState } from 'react';
import wretch from 'wretch';
import { useAtom } from 'jotai';

import { passwordsAtom } from '../../atoms/passwords';

import { Col, Container, HStackBetween, Range } from './styles';
import { loadingAtom } from '../../atoms/loading';

const api = wretch(import.meta.env.VITE_PUBLIC_API_URL);

interface IFormNewPassProps {
  formId: string;
}

export function FormNewPass(props: IFormNewPassProps) {
  const { formId } = props;

  const inputRangeId = useId();
  const [inputRangeValue, setInputRangeValue] = useState(1);
  const inputTextRef = useRef<HTMLInputElement>(null);
  const [, setPasswords] = useAtom(passwordsAtom);
  const [, setIsLoading] = useAtom(loadingAtom);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    if (inputTextRef.current && inputTextRef.current.value) {
      const json: { pass: string } = await api
        .url('/hash')
        .post({ pass: inputTextRef.current.value })
        .json();
      setPasswords([json.pass]);
      setInputRangeValue(1);
      inputTextRef.current.value = '';
      setIsLoading(false);
      return;
    }

    const json: { passwords: string[] } = await api
      .url(`/hash?limit=${inputRangeValue}`)
      .get()
      .json();

    setPasswords([...json.passwords]);

    setInputRangeValue(1);
    setIsLoading(false);
  }

  return (
    <Container id={formId} onSubmit={handleSubmit}>
      <Col>
        <HStackBetween>
          <label htmlFor={inputRangeId}>Character Length</label>
          <span>{inputRangeValue}</span>
        </HStackBetween>
        <Range
          id={inputRangeId}
          value={inputRangeValue}
          width={inputRangeValue}
          onChange={(e) => setInputRangeValue(+e.target.value)}
          max={100}
          min={1}
        />
      </Col>
      <Col>
        <label htmlFor=''>Digite uma senha</label>
        <input
          type='text'
          placeholder='Digite uma senha...'
          ref={inputTextRef}
        />
      </Col>
    </Container>
  );
}
