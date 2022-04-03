async function getRequest({ path, reject, method = "GET", dispatch = null }) {
  try {
    const response = await fetch(path, {
      method,
    });

    if (!response.ok) {
      throw new Error("Запрос не был Request");
    }

    if (dispatch) {
      console.log(dispatch);
      dispatch;
    }

    return response.json();
  } catch (error) {
    return reject(error.message);
  }
}

export { getRequest };
