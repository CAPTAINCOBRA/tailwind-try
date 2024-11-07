import React, { useContext, useState, useEffect } from 'react'
import { MyContext } from '../../context';

const Table = () => {

    const { theme, userData, setUserData} = useContext(MyContext);
    const [pristineUserData, setPristineUserData] = useState(null);
    console.log(theme);
    // console.log(userData);

    useEffect(() => {
        // setPristineUserData(data);
        setPristineUserData(userData);
    }, []);

    const hideRow = (id) => {
      const data = userData.map((item) => {
        let userDetails = JSON.parse(JSON.stringify(item));
        if(item.id === id && item?.name !== "N/A") {
          userDetails.name = "N/A";
          userDetails.email = "N/A";
          userDetails.company.name = "N/A";
        } else if(item.id === id && item?.name === "N/A") {
          console.log(pristineUserData);
          const user = pristineUserData?.filter(item => item.id === id);
          console.log(user?.[0]);
          userDetails.name = user?.[0]?.name;
          userDetails.email = user?.[0]?.email;
          userDetails.company.name = user?.[0]?.company?.name;
        }
        return userDetails;
      })
      console.log(data);
      
      setUserData(data);
    }
    
console.log(pristineUserData);

  return (
    <div className={theme === "dark" ? "table dark-table" : "table light-table"}>
      {userData?.length > 0 && <table className="table-fixed">
          <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Visibility</th>
              </tr>
          </thead>
          <tbody>
            {userData?.map((item) => (
                <tr key={item?.name}>
                  <td>{item?.id}</td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.company?.name}</td>
                  <button onClick={() => hideRow(item?.id)} className="btn btn-red">Show/Hide</button>
                </tr>
            ))}
      </tbody>
      </table>}
    </div>
  )
}

export default Table;