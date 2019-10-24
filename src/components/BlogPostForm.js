import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues, titleLabel, contentLabel, buttonText }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{titleLabel}</Text>
            <TextInput
                value={title}
                onChangeText={text => setTitle(text)}
                style={styles.input}
            />
            <Text style={styles.label}>{contentLabel}</Text>
            <TextInput
                value={content}
                onChangeText={text => setContent(text)}
                style={styles.input}
            />
            <Button
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
    },
    label: {
        fontSize: 20,
        marginBottom: 5
    },
    wrapper: {
        margin: 10,
        justifyContent: 'center',
        height: '60%',
    }
});