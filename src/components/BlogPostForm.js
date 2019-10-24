import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, } from 'react-native'
import { Button } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';

const BlogPostForm = ({ onSubmit, initialValues, titleLabel, contentLabel, buttonText }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{titleLabel}</Text>
            <TextInput
                placeholder='My Awesome Post'
                value={title}
                onChangeText={text => setTitle(text)}
                style={styles.input}
            />
            <Text style={styles.label}>{contentLabel}</Text>
            <TextInput
                placeholder='Add some description about your day'
                value={content}
                onChangeText={text => setContent(text)}
                style={styles.input}
                multiline
                numberOfLines={8}
            />
            <Button
                icon={<Feather name='check' style={styles.buttonIcon} />}
                title={buttonText}
                onPress={() => onSubmit(title, content)}
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    },
    titleLabel: 'Title',
    contentLabel: 'Content',
    buttonText: 'Publish'
}

export default BlogPostForm;

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlignVertical: "top"
    },
    label: {
        fontSize: 20,
        marginBottom: 5
    },
    wrapper: {
        margin: 10,
        height: '60%',
    },
    buttonIcon: {
        fontSize: 25,
        color: 'white',
        paddingRight: 8,
    }
});