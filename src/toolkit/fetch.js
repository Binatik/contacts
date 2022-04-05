async function getRequest({ path, reject, method = "GET", dispatch = null, state = null }) {
  try {
    const response = await fetch(path, {
      method,
    });

    if (!response.ok) {
      throw new Error("Запрос не был Request");
    }

    if (dispatch) dispatch;

    return response.json();
  } catch (error) {
    return reject(error.message);
  }
}

async function postRequest({ path, reject, method = "POST", body = "body", dispatch = null}) {
  try {
    const response = await fetch(path, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Запрос не был Request");
    }

    if (dispatch) dispatch;

    return response.json();
  } catch (error) {
    return reject(error.message);
  }
}

export { getRequest, postRequest };
