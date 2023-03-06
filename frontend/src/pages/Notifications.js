import React, { useEffect, useState } from "react";
import * as PushAPI from "@pushprotocol/restapi";
import NotificationCard from "../components/Cards/NotificationCard";
import { ethers } from "ethers";
import { getGlobalState } from "../store/index.js";

function Notifications() {
  const [notification, setNotification] = useState([]);
  const userAddress = getGlobalState("connectedAccount");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const _signer = provider.getSigner();

  const notifications = async () => {
    const channelData = await PushAPI.user.getFeeds({
      user: `eip155:5:${userAddress}`, // user address in CAIP
      env: "staging",
    });
    console.log(channelData);
    setNotification(channelData);
  };
  const optin = async () => {
    await PushAPI.channels.subscribe({
      signer: _signer,
      channelAddress: "eip155:5:0xfe6d77EBCb772b65a812436421C0e341cFF72855", // channel address in CAIP
      userAddress: `eip155:5:${userAddress}`, // user address in CAIP
      onSuccess: () => {
        console.log("opt in success");
      },
      onError: () => {
        console.error("opt in error");
      },
      env: "staging",
    });
  };
  useEffect(() => {
    notifications();
  }, [userAddress]);
  return (
    <div className="text-white m-12">
      <h1 className="text-center text-5xl font-bold ">
        Notifications from uniDAO for you
      </h1>
      {notification.length === 0 ? (
        <div
          className="text-black bg-[#00df9a] w-fit py-2 px-6 rounded-full text-xl font-bold"
          onClick={optin}
        >
          Opt in
        </div>
      ) : null}
      {notification
        .filter((item) => item.app === "uniDAO")
        .map((item) => {
          return (
            <div className="flex gap-4">
              <NotificationCard data={item} />
            </div>
          );
        })}
    </div>
  );
}

export default Notifications;
