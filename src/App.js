import "./App.css";
import { useEffect, useState } from "react";
import { MyContext } from "./context";
import Table from "./components/Table";
import Loader from "./components/Loader";

function App() {
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState("light");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoader(true);
      let data = await fetch("https://jsonplaceholder.typicode.com/users");
      data = await data.json();
      setLoader(false);
      if (data?.length > 0) {
        setUserData(data);
      } else {
        console.log("Error occurred"); // TODO: Show a toastr here
      }
    } catch (error) {
      console.log("Error occurred" + error); // TODO: Show a toastr here
      setLoader(false);
    }
  };

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <MyContext.Provider value={{ userData, setUserData, theme, changeTheme }}>
        {loader && <Loader />}
        <div className="App">
          <button className="btn btn-blue" onClick={changeTheme}>
            Toggle Theme
          </button>
          {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
          {userData && <Table />}
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
