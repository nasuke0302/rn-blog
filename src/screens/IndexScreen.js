import React, { useContext } from 'react'
import { Text, View, FlatList, Button, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Context } from '../context/BlogContext';

export default () => {
    const { state, addBlogPost } = useContext(Context);

    return (
        <View>
            <Button
                title='Add Post'
                onPress={addBlogPost}
            />
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return <View style={styles.row}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Feather name='trash' style={styles.icon}/>
                    </View>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});