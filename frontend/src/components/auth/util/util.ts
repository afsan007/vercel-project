import fetch from 'isomorphic-unfetch';

export const parseToken = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  const converted = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );
  return JSON.parse(converted);
};

export const synchUser = (token) => {
  const backend_address = process.env.BACKEND_HOST;

  fetch(`${backend_address}/synch_user`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      authorization: token ? `Bearer ${token}` : '',
    },
  }).then((r) => {
    return r.json();
  });
};

export const getCurrentProjectID = () => {
  const pString = localStorage.getItem('currentProject');
  if (pString) return JSON.parse(pString as string).id;
  return null;
};

export const removeCurrentProjectID = () => {
  let currentProjectId = getCurrentProjectID();
  if (currentProjectId) {
    try {
      localStorage.removeItem('currentProject');
    } catch (error) {
      console.log('Error in deleting from local storage', error);
    }
    return true;
  } else {
    return false;
  }
};