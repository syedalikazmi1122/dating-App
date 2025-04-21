import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status >= 400 && error.response.status < 500) {
      // Handle 4xx errors here
      return Promise.resolve(error.response);
    }
    return Promise.reject(error);
  }
);

async function sendRequest(method: string, url: string, body: any = null): Promise<AxiosResponse> {
  try {
    const response = await axiosInstance({
      method: method.toLowerCase(),
      url: url,
      data: body,
    });
    console.log(response);
    return response;
  } catch (error: any) {
    console.error("Request error:", error);

    // Handle different error scenarios
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Error response data:", error.response.data);
      throw new Error(error.response.data.message || "Server error");
    } else if (error.request) {
      // No response received
      console.error("No response received:", error.request);
      throw new Error("No response received from server");
    } else {
      // Error setting up the request
      console.error("Request setup error:", error.message);
      throw new Error(error.message);
    }
  }
}

export default sendRequest; 