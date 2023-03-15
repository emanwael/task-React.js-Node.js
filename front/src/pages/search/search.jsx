import React from "react";

// export default function Search() {
//   return <div>sssss</div>;
// }
// import React from "react";
import requireAuth from "./requireAuth";
import SearchComponent from "./searchComponent";
import { useSelector } from "react-redux";

const App = () => {
  let { isLogin } = useSelector((store) => store.userSlice);
  console.log("login", isLogin);

  const SearchWithAuth = requireAuth(SearchComponent, true);

  return (
    <div>
      <SearchWithAuth />
    </div>
  );
};

export default App;
