import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/authSelectors";
import sprite from "../assets/sprite.svg";
import { useState } from "react";

/*
  userData: {
    cards: [
      {
        id: 1,
        name: "Card 1",
        balance: 100,
        cardNumber: 543539583908892374,
        cvc: 432,
        expirationMM: "12"
        expirationYY: "2021"
        createdAt: "2021-01-01T00:00:00.000Z",
        updatedAt: "2021-01-01T00:00:00.000Z",
      }
    ],
    incomes: [
      {
        id: 1,
        date: "2021-01-01",
        amount: 100,
        category: "food",
        description: "food",
      },
    ],
    expenses: [
      {
        id: 1,
        date: "2021-01-01",
        amount: 100,
        category: "food",
        description: "food",
      },
    ],
  }
*/

const Main = () => {
  const user = useSelector(authSelectors.getUserName);
  const [userData, setUserData] = useState(
    window.localStorage.getItem("userData")
  );

  return (
    <div className="">
      <div className="flex justify-between mb-7">
        <div className="">
          <h5 className="font-medium text-sm text-white">Good afternoon,</h5>
          <h3 className="font-semibold text-xl text-white">{user}</h3>
        </div>
        <div className="bg-white bg-opacity-5 rounded p-3">
          <svg className="w-5 h-5">
            <use href={sprite + "#bell"}></use>
          </svg>
        </div>
      </div>
      <div className="bg-[#2F7E79] rounded-[20px] px-[25px] py-5">
        {userData?.cards?.length !== 0 ? (
          <>
            <div className="flex justify-between items-start">
              <div className="">
                <div className="flex items-center">
                  <h4 className="mr-2 font-semibold text-white text-base">
                    Total Balance
                  </h4>
                  <button type="button">
                    <svg className="w-3 h-3">
                      <use href={sprite + "#up"}></use>
                    </svg>
                  </button>
                </div>
                <h3 className="font-bold text-3xl">$ 2,548.00</h3>
              </div>
              <button type="button">
                <svg className="w-5 h-5">
                  <use href={sprite + "#dots"}></use>
                </svg>
              </button>
            </div>
            <div className="flex justify-between mt-5">
              <div className="flex flex-col">
                <div className="flex items-center text-[#D0E5E4] font-medium text-base mb-1">
                  <div className="bg-white bg-opacity-15 p-1 rounded-[50%] mr-[6px]">
                    <svg className="w-4 h-4">
                      <use href={sprite + "#arrow-down"}></use>
                    </svg>
                  </div>
                  Income
                </div>
                <h4 className="text-white font-semibold text-xl">$ 1,840.00</h4>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-[#D0E5E4] font-medium text-base mb-1 justify-end">
                  <div className="bg-white bg-opacity-15 p-1 rounded-[50%] mr-[6px]">
                    <svg className="w-4 h-4">
                      <use href={sprite + "#arrow-up"}></use>
                    </svg>
                  </div>
                  Expenses
                </div>
                <h4 className="text-white font-semibold text-xl text-end">
                  $ 840.00
                </h4>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Main;
