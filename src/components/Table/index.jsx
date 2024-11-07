import React, { useContext } from 'react'
import { MyContext } from '../../context';

const Table = () => {

    const { theme, userData} = useContext(MyContext);
    console.log(theme);
    

  return (
    <div className={theme === "dark" ? "table dark-table" : "table light-table"}>
      {userData?.length > 0 && <table className="table-fixed">
          <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
              </tr>
          </thead>
          <tbody>
            {userData?.map((item) => (
                <tr key={item?.name}>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.website}</td>
                </tr>
            ))}
      </tbody>
      </table>}
    </div>
  )
}

export default Table;