import React from "react";

const proImage =
  "data:image/jpeg;base64,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";

const MobChatMessage = () => {
  return (
    <>
      <div className="m-1 border-x border-t border-gray-200 rounded-t-md mt-5  pb-10">
        <div className="rounded-xl flex flex-col justify-between h-[80%] ">
          <div className="overflow-y-auto">
            {/* {messages &&
              messages?.length !== 0 &&
              messages?.map((message, index) => (
                <fieldset key={index}>
                  <>
                    {message?.text ? (
                      <>
                        {message?.text && (
                          <TextMessage
                            message={message}
                            receiverData={receiverData}
                            userProfileImage={userProfileImage}
                            storeUserProfile={storeUserProfile}
                            senderData={senderData}
                          />
                        )}
                      </>
                    ) : null}
                  </>
                </fieldset>
              ))} */}
          </div>
        </div>
        {/* {liveChat && ( */}
        <div className="fixed bottom-0">
          <div className="flex rounded-t px-5 py-2">
            <input
              type="text"
              className="flex-1  py-2 border mb rounded-2xl mx-2 focus:outline-none"
              placeholder="Type a message..."
              // value={newMessage}
            />
            <button className="bg-blue-500 px-4 py-2 rounded-2xl text-white hover:bg-blue-700">
              Send
            </button>{" "}
          </div>
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default MobChatMessage;
