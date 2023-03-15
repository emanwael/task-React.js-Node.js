import React, { useEffect } from "react";
import "./history.css";
import PhoneInformationCard from "../../components/phoneInformationCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllHistoryItems,
  removeAllHistory,
} from "../../redux/slices/history";
import { useNavigate } from "react-router";

export default function History() {
  const naigate = useNavigate();
  const { history } = useSelector((store) => store.historySlice);
  let dataHistory = history;
  const dispatch = useDispatch();
  const deleteHistory = () => {
    dispatch(removeAllHistory());
    dataHistory = [];
  };

  useEffect(() => {
    dispatch(getAllHistoryItems());
  }, []);
  return (
    <div className="container-history">
      <h2 className="title">History Search</h2>
      <button className="seachBtn" onClick={deleteHistory}>
        delete
      </button>
      <div className="body-search">
        {dataHistory.map((phoneData) => {
          return <PhoneInformationCard phoneData={phoneData} />;
        })}
      </div>
    </div>
  );
}
