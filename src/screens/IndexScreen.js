import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
	        <View>
				<Button  title="Add Post" onPress={addBlogPost} />
				<FlatList
					data={state}
					keyExtractor={blogPost => blogPost.id}
					renderItem={({item}) => {
						return (
							<TouchableOpacity onPress = { () => navigation.navigate('ShowScreen', { id: item.id }) }>
								<View style={styles.row}>
									<Text style={styles.title} >{item.title} - {item.id}</Text>
									<TouchableOpacity onPress={()=> deleteBlogPost(item.id)}>
										<Feather style={styles.icon} name="trash" />
									</TouchableOpacity>
								</View>
							</TouchableOpacity>
						);
					}}
				/>
			</View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
	    headerRight: () => (
	      <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
	        <Feather name="plus" size={30} />
	      </TouchableOpacity>
	    ),
  	};
};


const styles = StyleSheet.create({
	flatlist:{
	},
	row:{
		flexDirection: 'row',
		justifyContent: 'space-between', 
		paddingVertical: 15,
		paddingHorizontal: 10,
		borderTopWidth: 1,
		borderColor: 'gray',
		flex: 1
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 24,
	}
});


export default IndexScreen;