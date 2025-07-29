import PlayBtn from '@/components/PlayBtn';
import Route from '@/components/Route';
import { styles } from '@assets/styles/routes.styles';
import { View, ScrollView } from 'react-native';

export default function Routes() {
    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.container}
        >
            <View style={styles.routeCointainer}>
                <Route />
                <PlayBtn />
            </View>
            <View style={styles.routeCointainer}>
                <Route />
                <PlayBtn />
            </View>
            <View style={styles.routeCointainer}>
                <Route />
                <PlayBtn />
            </View>
        </ScrollView>
    );
}