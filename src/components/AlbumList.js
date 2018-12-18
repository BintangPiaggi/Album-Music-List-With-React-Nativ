import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state ={ AL: [] };

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ AL: response.data }));
	}

	renderAlbums() {
		return this.state.AL.map(album => <AlbumDetail key={album} bintang={album} />);
	}
	render() {
		console.log(this.state);
	return (
	<ScrollView>
		{this.renderAlbums()}
	</ScrollView>
		);
	}
}

export default AlbumList;