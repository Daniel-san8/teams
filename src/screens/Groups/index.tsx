import { StyleSheet } from 'react-native';
import { Container, Title } from './styles';

export function Groups() {
  return (
    <Container>
      <Title>Groups</Title>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 32,
  },
});
