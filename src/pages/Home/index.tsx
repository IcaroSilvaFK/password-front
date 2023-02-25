import { useId } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useAtom } from 'jotai';

import { passwordsAtom } from '../../atoms/passwords';
import { CardListItem } from '../../components/CardListItem';
import { FormNewPass } from '../../components/FormNewPass';

import { Container, Card, Col, ListContainer } from './styles';

export function Home() {
  const formId = useId();
  const [containerRef] = useAutoAnimate<HTMLDivElement>();
  const [listContainerRef] = useAutoAnimate<HTMLUListElement>();
  const [passwords] = useAtom(passwordsAtom);

  return (
    <Container>
      <Col>
        <h1>Password Generator</h1>
        <Card ref={containerRef}>
          <FormNewPass formId={formId} />
          <button form={formId}>Generate Password</button>
        </Card>
      </Col>
      <Col>
        <h1>Generated Passwords</h1>
        <Card>
          <ListContainer ref={listContainerRef}>
            {!passwords.length && <span>Generate passwords!</span>}

            {passwords.map((pass) => (
              <CardListItem key={pass.id} pass={pass.pass} />
            ))}
          </ListContainer>
        </Card>
      </Col>
    </Container>
  );
}
