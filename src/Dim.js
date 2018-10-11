import { Dimensions, Platform } from 'react-native';

const FULL_WIDTH  = Dimensions.get('window').width;
const FULL_HEIGHT = Dimensions.get('window').height;
const HEADER_HEIGHT = (Platform.OS === 'ios' ? 64 : 56) + 24;

const Dim = {
	menuColumn: {
		minHeight: FULL_HEIGHT - HEADER_HEIGHT,
		width: FULL_WIDTH / 6 * 1.5,
	},
	scriptColumn: {
		minHeight: FULL_HEIGHT - HEADER_HEIGHT,
		width: FULL_WIDTH / 6 * 2.5,
	},
	canvasColumn: {
		minHeight: FULL_HEIGHT - HEADER_HEIGHT,
    width: FULL_WIDTH / 6 * 2,
	}
}

export default Dim;