import Joi from "joi";

export const EpisodeValidationSchema = {
	add: {
		body: Joi.object().keys({
			name: Joi.string().required(),
			description:Joi.string().required(),
            image:Joi.string().required()
		}),
	},
};
