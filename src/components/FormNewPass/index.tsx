import { FormEvent, useId, useRef, useState } from 'react';
import wretch from 'wretch';
import { useAtom } from 'jotai';

import { passwordsAtom } from '../../atoms/passwords';

import { Col, Container, HStackBetween, Range } from './styles';

type StatePasswordProps = {
  id: string;
  pass: string;
};

const api = wretch('http://localhost:8080/api/_v1');

interface IFormNewPassProps {
  formId: string;
}

export function FormNewPass(props: IFormNewPassProps) {
  const { formId } = props;

  const inputRangeId = useId();
  const [inputRangeValue, setInputRangeValue] = useState(1);
  const inputTextRef = useRef<HTMLInputElement>(null);
  const [, setPasswords] = useAtom(passwordsAtom);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (inputTextRef.current && inputTextRef.current.value) {
      const json: { pass: StatePasswordProps } = await api
        .url('/passwords/create')
        .post({ pass: inputTextRef.current.value })
        .json();
      setPasswords([json.pass]);
      setInputRangeValue(1);
      return;
    }

    const json: { passwords: StatePasswordProps[] } = await api
      .url(`/passwords/batch?limit=${inputRangeValue}`)
      .get()
      .json();
    setPasswords([...json.passwords]);

    setInputRangeValue(1);
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
