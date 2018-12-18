import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ bintang }) => {
	const { title, artist, thumbnail_image, image, url } = bintang;
	return (
		<Card>
			<CardSection>
			 <View style={styles.FotoUtama}>
			  <Image
			  style={styles.image} 
			  source={{ uri: thumbnail_image }} 
			  />
			 </View>
			 <View style={styles.headerContainner}>
				<Text style={styles.titletext}>{title} </Text>
				<Text>{artist} </Text>
			</View>
			</CardSection>

			<CardSection>
				<Image
				style={styles.imagestyle} 
				source={{ uri: image }} />
			</CardSection>
			
			<CardSection>
			<Button Tombol={() => Linking.openURL(url)} />
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContainner: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	titletext: {
		fontSize: 17
	},
	image: {
		height: 50,
		width: 50
	},
	FotoUtama: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imagestyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;