import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";

function status(request, response) {
  response.status(200).json("{chave: teste}");
}

export default status;
