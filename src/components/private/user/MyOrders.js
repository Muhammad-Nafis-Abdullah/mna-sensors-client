import React from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import useFetch from "../../../hooks/useFetch";



const MyOrders = () => {
  const [user] = useAuthState(auth);
  // const navigate = useNavigate();
  // const [orders, setOrders] = useState([]);




  const url = `http://localhost:5000/orders?email=${user.email}`;
  const { data: orders, refetch } = useFetch(url,[]);


  const cancelling = async (id, productId, quantity) => {
    await axios.delete(`http://localhost:5000/cancel/order/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(data => data?.data?.deleted && toast.success('Order deleted successfully', { theme: 'dark' }));
    refetch();
  }



  return (
    <div>
      <h2 className="text-lg text-white font-bold text-left ml-3">
        My Orders : {orders?.length}
      </h2>
      <div className="overflow-x-auto w-full mx-0 min-w-0 ">
        <table className="table table-compact w-full text-center">
          <thead>
            <tr className="text-center border-2 border-neutral-focus">
              <th>Sl No.</th>
              <th>Name</th>
              <th>Sensors</th>
              <th>
                Quantity <small>(Pcs)</small>
              </th>
              <th>
                Cost <small>($)</small>
              </th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.productName}</td>
                <td>{order.orderQuantity}</td>
                <td>${order.orderCost}</td>
                <td>
                  {order.orderCost && !order.paid && (
                    <div className="text-center space-y-1">
                      <Link to={`/dashboard/payment/${order._id}`} className="btn btn-xs btn-success text-neutral-focus">
                        Pay Now
                      </Link><br />
                      <button onClick={() => cancelling(order._id, order.productId, order.orderQuantity)} className="btn btn-xs btn-error text-white ">
                        Cancel Order
                      </button>
                    </div>
                  )}
                  {order.paid && (
                    <div>
                      <div className="text-center text-teal-500 w-1/3 font-semibold rounded-md mx-auto">
                        PAID
                      </div>
                      <small className="font-semibold">
                        Transaction Id:{" "}
                        <small className="text-sky-500">
                          {order.transactionId}
                        </small>
                      </small>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
