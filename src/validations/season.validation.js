import Joi from "joi";

export const SeasonValidationSchema = {
	add: {
		body: Joi.object().keys({
			name: Joi.string().required(),
			description:Joi.string().required()
		}),
	},
};
