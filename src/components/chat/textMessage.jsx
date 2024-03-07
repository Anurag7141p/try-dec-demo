import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/utils";

const TextMessage = ({ message, userProfileImage, receiverData }) => {
  const { data } = useSelector((state) => state?.userAuth);
  const [profile, setProfile] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (message?.senderId == data?._id) {
      setUsername("Me");
      if (message?.orderId?.storeId?._id == data?.storeId) {
        setProfile(message?.orderId?.storeId?.image);
      } else {
        setProfile(userProfileImage);
      }
    } else {
      setUsername(receiverData?.username);
      if (message?.receiverId == data?._id) {
        if (message?.orderId?.storeId?._id == data?.storeId) {
          setProfile(userProfileImage);
        } else {
          setProfile(message?.orderId?.storeId?.image);
        }
      }
    }
  }, [message]);

  return (
    <>
      <div className="w-full my-1 hover:bg-gray-50 p-3">
        <div className="flex ">
          <div className="flex items-start">
            <img
              className="bg-purple-200 h-9 w-9 rounded-full border-2 border-purple-300"
              src={profile}
              alt="profile image"
            />
          </div>
          <div className="ml-3">
            <div className="flex ml-3 items-center">
              <p className="text-xs font-semibold">{username}</p>
              <p className="ml-2 text-sm text-gray-500">
                {formatDate(message?.createdAt)}
              </p>
            </div>
            <p className="m-1 px-3 py-2 text-sm">{message?.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextMessage;
