import React, { useEffect, useState } from "react";
import "./searchComponent.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  SearchPhoneNumberActions,
  getDataForPhoneNumber,
} from "../../redux/slices/searchPhoneNumberSlice";
import PhoneInformationCard from "../../components/phoneInformationCard";
import { addHistoryItem } from "../../redux/slices/history";

export default function SearchComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { phoneData, isLoading } = useSelector((store) => store.searchSlice);
  const { removeData } = SearchPhoneNumberActions;
  const [numberSearch, setnumberSearch] = useState();

  const getNumberSearch = (e) => {
    setnumberSearch(e.target.value);
  };
  const search = async () => {
    getDataPhoneNumber(numberSearch).then((response) => {
      console.log("res", response.payload);
      addToHistory(response.payload);
    });
  };
  const addToHistory = (data) => {
    dispatch(addHistoryItem(data));
  };
  const goToHistoryPage = () => {
    dispatch(removeData());
    navigate("/history");
  };

  const getDataPhoneNumber = async (numberSearch) => {
    console.log("phone", phoneData, isLoading);

    return dispatch(getDataForPhoneNumber(numberSearch));
  };
  useEffect(() => {
    if (numberSearch === "") dispatch(removeData());
    console.log("jhj");
    console.log(phoneData);
  }, [numberSearch]);

  return (
    <div className="container-search">
      <h2 className="title"> Search</h2>

      <div className="header-search">
        <input
          className="inputSearch"
          type="search"
          onChange={getNumberSearch}
        />
        <button className="seachBtn" onClick={search}>
          Search
        </button>
        <button className="seachBtn" onClick={goToHistoryPage}>
          History Search
        </button>
      </div>
      <div className="body-search">
        {phoneData.number && <PhoneInformationCard phoneData={phoneData} />}
        {/* {phoneData.number && addToHistory(phoneData)} */}
      </div>
    </div>
  );
}
