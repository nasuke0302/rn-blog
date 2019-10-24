import React, { useContext } from 'react'
import { Text, View, FlatList, Button } from 'react-native'

import { Context } from '../context/BlogContext';

export default () => {
    const { state, addBlogPost } = useContext(Context);

    return (
        <View>
            <Text> Index Screen </Text>
            <Button
                title='Add Post'
                onPress={addBlogPost}
            />
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}
