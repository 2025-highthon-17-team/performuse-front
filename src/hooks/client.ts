import { useState, useCallback, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "http://43.201.215.142:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export function useAxiosCRUD() {
  const [loading, setLoading] = useState<boolean>(false);

  const setAuthriazation = useCallback((token: string) => {
    localStorage.setItem("token", token);
    client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    setAuthriazation(token);
    // eslint-disable-next-line
    console.log("로그인 되어 있음.");
  }, [setAuthriazation]);

  const request = useCallback(
    async (
      method: "GET" | "POST" | "PUT" | "DELETE",
      url: string,
      requestData?: object,
    ) => {
      if (loading) return;
      setLoading(true);

      try {
        const config: AxiosRequestConfig = {
          method,
          url,
          data: ["POST", "PUT"].includes(method)
            ? JSON.stringify(requestData)
            : undefined,
        };

        const responseContainer: AxiosResponse = await client(config);
        const res = responseContainer.data;
        if (res.status !== 200) throw new Error("요청에 실패했습니다.");
        return res.data;
      } catch (err) {
        // eslint-disable-next-line
        console.error(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [loading],
  );

  const login = useCallback(
    async (identifier: string, password: string) => {
      const data = await request("POST", "/auth/login", {
        identifier,
        password,
      });
      if (!data) return;
      setAuthriazation(data?.accessToken);
    },
    [request, setAuthriazation],
  );

  const signup = useCallback(
    async (
      identifier: string,
      password: string,
      email: string,
      nickname: string,
    ) => {
      const data = await request("POST", "/auth/signup", {
        identifier,
        password,
        email,
        nickname,
      });
      if (!data) return;
      setAuthriazation(data?.accessToken);
    },
    [request, setAuthriazation],
  );

  return { login, signup };
}
