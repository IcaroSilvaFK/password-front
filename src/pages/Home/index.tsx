import { useId } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useAtom } from 'jotai';

import { passwordsAtom } from '../../atoms/passwords';
import { CardListItem } from '../../components/CardListItem';
import { FormNewPass } from '../../components/FormNewPass';

import { Container, Card, Col, ListContainer } from './styles';
import { loadingAtom } from '../../atoms/loading';

export function Home() {
  const formId = useId();
  const [containerRef] = useAutoAnimate<HTMLDivElement>();
  const [listContainerRef] = useAutoAnimate<HTMLUListElement>();
  const [passwords] = useAtom(passwordsAtom);
  const [isLoading] = useAtom(loadingAtom);

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
            {isLoading && <span>Generating passwords...</span>}
            {!isLoading &&
              passwords.map((pass) => <CardListItem key={pass} pass={pass} />)}
          </ListContainer>
        </Card>
      </Col>
    </Container>
  );
}
