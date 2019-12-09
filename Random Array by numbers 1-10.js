const { orderBy } = require('natural-orderby');

const unordered = [
	'123asd',
	'19asd',
	'12345asd',
	'asd123',
	'asd12'
];

const ordered = orderBy(unordered)