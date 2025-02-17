export const logsLiteral = {
	title: 'Log schema',
	version: 0,
	description: 'Logs events for debugging and user record',
	type: 'object',
	primaryKey: 'uuid',
	properties: {
		uuid: {
			description: 'Unique identifier for the resource.',
			type: 'string',
			maxLength: 36,
		},
		dateCreatedGmt: {
			type: 'string',
		},
		user: {
			type: 'string',
		},
		level: {
			type: 'string',
		},
		message: {
			type: 'string',
		},
		meta: {
			type: 'object',
		},
	},
} as const;
