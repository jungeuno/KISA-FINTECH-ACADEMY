import React, { useEffect } from "react";
import { useState } from "react";
import AppHeader from "../components/Common/AppHeader";
import MainAccountCard from "../components/Main/MainAccountCard";
import axios from "axios";

const MainPage = () => {
  useEffect(() => {
    console.log("시작하자마 일을 시작합니다.");
    getAccountList();
  }, []);

  const getAccountList = () => {
    const accessToken = localStorage.getItem("accessToken");
    const userSeqNo = localStorage.getItem("userSeqNo");
    console.log(accessToken, userSeqNo);
    //axios 요청을 작성해야함
    //header 설정
    const option = {
      method: "",
      url: "",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {},
    };
  };

  // const [data, setData] = useState();

  // const handleClick = () => {
  //   console.log("서버로 요청을 보냅니다.");
  //   const requestUrl =
  //     "https://testapi.openbanking.or.kr/v2.0/user/me?user_seq_no=1101022012";
  //   axios.get(requestUrl).then((response) => {
  //     // axios 서버 통신
  //     console.log(response);
  //     setData(response.data);
  //   });
  // };

  return (
    <div>
      <AppHeader title={"계좌 목록"}></AppHeader>
      <MainAccountCard
        bankName={"테스트"}
        fintechUseNo={"24123123"}
      ></MainAccountCard>
    </div>
  );
};

export default MainPage;