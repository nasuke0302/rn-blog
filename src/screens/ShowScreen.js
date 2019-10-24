import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity
                onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}
            >
                <Feather name='edit-3' style={styles.editIcon} />
            </TouchableOpacity>
        )
    }
}

export default ShowScreen;

const styles = StyleSheet.create({
    editIcon: {
        fontSize: 30,
        marginRight: 15,
    }
});
