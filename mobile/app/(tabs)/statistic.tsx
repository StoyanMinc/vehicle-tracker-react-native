import { styles } from '@/assets/styles/home.styles';
import { useUserContext } from '@/contexts/UserContext';
import { View, Text } from 'react-native';

export default function Stistic() {
  const { user } = useUserContext();
  console.log(user);
  return (
    <View style={styles.container}>
            <Text>Statistic</Text>
    </View>
  );
}
