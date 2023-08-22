import React from 'react';

export default function Table( props) {
  const Border = { border: '2px solid black' };
  const dataList = props.data;
  return (
    <div>
       
        <div className="tablediv">
 
          <div className="table">
            {dataList && dataList.length > 0 ?  
          <table>
            <thead>
              <th style={Border}> First Name </th>
              <th style={Border}> Lsst Name </th>
              <th style={Border}> Email ID </th>
              <th style={Border}> Edit Data </th>
              <th style={Border}> DeleteItem </th>
            </thead>
            <tbody>
              {dataList.map(({ id, Fname, Lname , Email }) => (
                <tr>
                  <td style={Border}>{Fname} </td>
                  <td style={Border}>{Lname} </td>
                  <td style={Border}>{Email} </td>
                  <td style={Border}>
                    <button type="edit"
                     onClick={() => props.edit(item.id)}> Edit </button>
                  </td>
                  <td style={Border}>
                    <button type="delete" 
                    onClick={() => props.delete(item.id)}>
                      {' '}
                      Delete{' '}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
                  : <h4> No Data Matched... </h4> }

          </div>
        </div>
      
    </div>
  );
}
