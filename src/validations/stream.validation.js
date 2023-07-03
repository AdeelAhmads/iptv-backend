import Joi from "joi";

export const StreamValidationSchema = {
	add: {
		body: Joi.object().keys({
			time: Joi.string().required(),
			
		}),
	},
};
