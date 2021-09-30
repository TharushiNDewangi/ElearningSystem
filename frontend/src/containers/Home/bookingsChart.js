import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BOOKINGS_BUCKETS = () => {
  const [regularOrdersRevenue, setregularOrdersRevenue] = useState([]);
  let salesArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const getBulkOrders = async () => {
    try {
      await axios
        .get("http://localhost:6500/matrix/api/admin/getBulkOrders")
        .then((res) => {
          for (let i = 0; i < res.data.bulkorders.length; i++) {
            let date = "",
              month = "",
              check = "";
            date = moment(res.data.bulkorders[i].placedAt).format("DD/MM/YYYY");
            check = moment(date, "YYYY/MM/DD");
            month = check.format("M");
            for (let j = 0; j < 12; j++) {
              if (month === (j + 1).toString()) {
                for (let x = 0; x < res.data.bulkorders[i].items.length; x++) {
                  salesArray[j] += res.data.bulkorders[i].items[x].quantity;
                }
              }
            }
          }

          setDataArray(salesArray);
        })
        .catch((err) => {
          alert(err.message);
        });
    } catch (err) {
      alert("error :" + err);
    }
  };

  const getRegularOrders = async () => {
    try {
      await axios
        .get("http://localhost:6500/matrix/api/admin/getRegularOrders")
        .then((res) => {
          for (let i = 0; i < res.data.orders.length; i++) {
            let date = "",
              month = "",
              check = "";
            date = moment(res.data.orders[i].purchasedDate).format(
              "DD/MM/YYYY"
            );
            check = moment(date, "YYYY/MM/DD");
            month = check.format("M");
            for (let j = 0; j < 12; j++) {
              if (month === (j + 1).toString()) {
                for (let x = 0; x < res.data.orders[i].orderData.length; x++) {
                  salesArray[j] += res.data.orders[i].orderData[x].quantity;
                }
              }
            }
          }
          getBulkOrders();
        })
        .catch((err) => {
          alert(err.message);
        });
    } catch (err) {
      alert("error :" + err);
    }
  };
  const setDataArray = (salesArray) => {
    const dataArray = [
      { name: "Jan", count: salesArray[0] },
      { name: "Feb", count: salesArray[1] },
      { name: "Mar", count: salesArray[2] },
      { name: "Apr", count: salesArray[3] },
      { name: "May", count: salesArray[4] },
      { name: "Jun", count: salesArray[5] },
      { name: "July", count: salesArray[6] },
      { name: "Aug", count: salesArray[7] },
      { name: "Sep", count: salesArray[8] },
      { name: "Oct", count: salesArray[9] },
      { name: "Nov", count: salesArray[10] },
      { name: "Dec", count: salesArray[11] },
    ];
    console.log(dataArray);
    setregularOrdersRevenue(dataArray);
  };

  useEffect(() => {
    getRegularOrders();
  }, []);
  return (
    <div className="w-full p-3 h-96 mb-3 pt-0">
      <div className="w-full h-96 bg-white shadow-2xl ">
        <h1 className="text-center font-bold font-sans">Total Sales</h1>
        <div className="w-full m-auto h-4/5 ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={regularOrdersRevenue}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="count" fill="#8884d8" label={{ position: "top" }}>
                {regularOrdersRevenue.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={"#042B58"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default bookingsChart;