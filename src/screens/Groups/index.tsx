import { useState } from 'react';
import { GroupCard } from '../../components/GroupCard';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Container } from './styles';
import { FlatList } from 'react-native';
import { ListEmpty } from '../../components/ListEmpty';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function Groups() {
  const [groups, setGroups] = useState([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new-group');
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subTitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
