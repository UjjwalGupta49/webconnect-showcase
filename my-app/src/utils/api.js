import axios from "axios";

const serverApi = "https://webconnect.onrender.com:10000/api";

export const getRoomExists = async (roomId) => {
  const response = await axios.get(`${serverApi}/room-exists/${roomId}`);
  return response.data;
};

export const getTURNCredentials = async () => {
  const response = await axios.get(`${serverApi}/get-turn-credentials`);
  return response.data;
};
