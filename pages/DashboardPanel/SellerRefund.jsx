import React from "react";
import '../../src/dashboard.css'

const SellerRefunds = () => {
  const requests = [
    { id: 1, date: "2024-07-22", amount: "$50.00", status: "Pending" },
    { id: 2, date: "2024-07-21", amount: "$30.00", status: "Approved" },
    { id: 3, date: "2024-07-20", amount: "$75.00", status: "Rejected" },
  ];

  return (
    <div className="refunds-component">
      <div className="refunds-header">
        <img
          src="https://www.pngkey.com/png/full/386-3865658_rectangle-square-shape-download-rectangle.png"
          alt="Rectangle"
          className="refunds-image"
        />
        <div className="refunds-heading-container">
          <h1 className="refunds-heading">Your Refund</h1>
          <p className="satisfaction-paragraph">
            Customer satisfaction is our top priority...
          </p>
        </div>
        <div className="refunds-content">
          <button className="request-button">Request Refund</button>
          <p className="refunds-info-paragraph">
            Want a Refund? Click the button below...
          </p>
        </div>
      </div>

      <div className="refunds-table-header">
        <h1>Request List</h1>
        <select className="filter-dropdown">
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div className="refunds-table-container">
        <table className="refunds-table">
          <thead>
            <tr>
              <th>ID Number</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.date}</td>
                <td>{request.amount}</td>
                <td>{request.status}</td>
                <td>
                  <button className="view-button">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerRefunds;