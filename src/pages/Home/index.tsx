import { FormEvent, useId, useRef, useState } from 'react';
import { Container, Card, Range, Col, HStackBetween } from './styles';
import wretch from 'wretch';

const api = wretch('http://localhost:8080/api/_v1');

export function Home() {
  const formId = useId();
  const inputRangeId = useId();
  const [inputRangeValue, setInputRangeValue] = useState(1);
  const inputTextRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (inputTextRef.current && inputTextRef.current.value) {
      const json = await api
        .url('/passwords/create')
        .post({ pass: inputTextRef.current.value })
        .json();
      console.log(json);
      return;
    }

    const json = await api
      .url(`/passwords/batch?limit=${inputRangeValue}`)
      .get()
      .json();

    console.log(json);
  }

  return (
    <Container>
      <h1>Password Generator</h1>
      <Card>
        <form id={formId} onSubmit={handleSubmit}>
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
        </form>
        <button form={formId}>Generate Password</button>
      </Card>
    </Container>
  );
}
