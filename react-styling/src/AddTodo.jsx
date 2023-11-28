import { Container, FormContainer, Header, Label, LabelContainer } from './styles';

export default function AddTodo() {
  return (
    <Container>
      <Header>TODO</Header>

      <LabelContainer>
        <Label>What needs to be Done?</Label>
      </LabelContainer>
      <FormContainer>
        <form>
          <input type="text" />
          <button>Add</button>
        </form>
      </FormContainer>
    </Container>
  );
}
