import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useMyStorage from "../../../hooks/useMyStorage";
import Loading from "../../public/Loading";


const DeleteConfirmModel = ({ deleteTool, setDeleteTool, refetch }) => {
  const [user] = useAuthState(auth);
  const [loading,setLoading] = useState(false);
  const { deleteImage } = useMyStorage();
  const { _id, name, img } = deleteTool;
  // console.log(_id, name, img);

  const handleDelete = async(id) => {
    setLoading(true);
    const header = {
      headers: {
        uid: user?.uid,
      },
    };
    try {
      await deleteImage(img);
      const {data} = await axios.delete(`http://localhost:5000/sensor/${id}`, header);
      if (data.acknowledged) {
        toast.error(`${name} is Deleted Successfully`, { theme: "dark" });
      } else {
        toast.error(`Can't Delete ${name}`, { theme: "colored" });
      }

    } catch (err) {
      toast.error(err, { theme: "colored" });
    }
    refetch();
    setDeleteTool(null);
    setLoading(false);
  };


  return (
    <div className="">
      {loading && <Loading/>}
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{`Are you sure You Want to Delete ${name}?`}</h3>
          <div className="modal-action">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-outline btn-error"
            >
              Confirm
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-sm">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModel;
