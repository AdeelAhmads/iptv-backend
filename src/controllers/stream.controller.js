import { StreamService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const StreamController = {
    getAll: async (req, res) => {
        try {
            const data = await StreamService.getAll();
            console.log(data);

            return httpResponse.SUCCESS(res, data);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error);
        }
    },
    get: async (req, res) => {
        try {
            const data = await StreamService.get(req.params.id);
            console.log(data);
            if (!data) {
                return httpResponse.NOT_FOUND(res, data)
            }
            else {
                return httpResponse.SUCCESS(res, data);
            }

        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error);
        }
    },

    add: async (req, res) => {
        try {
            console.log(req.body);

            const data = await StreamService.add(req.body);
            if (data == "This stream is already available") {
                return httpResponse.CONFLICT(res, data);
            } else {
                return httpResponse.CREATED(res, data);
            }

        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error);
        }
    },
    delete: async (req, res) => {
        try {
            console.log(req.params.id);

            const data = await StreamService.delete(req.params.id);
            // const data = awaitStreamService.get(req.params.id);
            if (!data) {
                return httpResponse.NOT_FOUND(res, data)
            }
            else {
                return httpResponse.SUCCESS(res, data);
            }
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error);
        }
    },
    update: async (req, res) => {
        console.log(req.params.id);


        try {
            console.log(req.params.id);
            const data = await StreamService.update(req.params.id, req.body);
            if (!data) {
                return httpResponse.NOT_FOUND(res, data)
            }
            else {
                return httpResponse.SUCCESS(res, data);
            }
        } catch (error) {
            return httpResponse.NOT_FOUND(res, error);
        }
    }
};
