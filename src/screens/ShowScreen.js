import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ route, navigation }) => {
	const id = route.params.id;
	const { state } = useContext(Context);

	const blogPost = state.find((blogPost) => blogPost.id === id);
	// console.log(blogPost)
	return (
		<View>
			<Text>{ blogPost.title }</Text>
		</View>
	)
}

const styles = StyleSheet.create({

})

export default ShowScreen