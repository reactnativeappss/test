/**
 * Audrix (https://www.enappd.com/audrix)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */


import variable from './../variables/platform';

export default (variables = variable) => {
	const subtitleTheme = {
		fontSize: variables.subTitleFontSize,
		fontFamily: variables.titleFontfamily,
		color: variables.subtitleColor,
		textAlign: 'center',
	};

	return subtitleTheme;
};
