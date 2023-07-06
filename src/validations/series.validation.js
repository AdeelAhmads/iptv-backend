import Joi from "joi";

export const SeriesValidationSchema = {
	add: {
		body: Joi.object().keys({
			genre_id: Joi.string().required(),
			name: Joi.string().required(),
			description:Joi.string().required(),
			trailer:Joi.string().required()
		}),
	},
};
