import {View,Text} from 'react-native'
import styles from './style'
const Title = ({name})=>{
    return(
        <View style={styles.boxTitle}>
            <View style={styles.box1}>
                <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.box3}>
                <Text style={styles.text}>3</Text>
            </View>
            <Text style={styles.textTitle}>{name}</Text>
        </View>
    )
}

export default Title