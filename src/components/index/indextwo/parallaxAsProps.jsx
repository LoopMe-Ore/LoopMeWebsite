import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const ParallaxAsProp = ({ minY, maxY}) => (
	<Parallax
		className="custom-class"
		offsetYMax={maxY}
		offsetYMin={minY}
		slowerScrollRate={false}
		tag="figure">
		<h3>With Props</h3>
	</Parallax>
);

ParallaxAsProp.propTypes = exact({
	minY: PropTypes.number,
	maxY: PropTypes.number,
	img: PropTypes.string,
});

export default ParallaxAsProp;