import { Fragment, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

import BlanksCard from "./BlanksCard";

const TaskCard = () => {
  const paras = useLoaderData();
  const { id } = useParams();
  const [selectedBlank, setSelectedBlank] = useState(null);
  const [selectedAns, setSelectedAns] = useState(null);
  const [blankNumbers, setBlankNumbers] = useState([]);
  const [ansList, setAnsList] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const lesson = paras?.find((para) => para.id == id);

  const words = lesson.para.split(" ");
  let blanks = [];
  let answers = [];

  const setRandom = (iteration) => {
    const randomBlankNumbers = [];
    for (var i = 0; i < iteration; i++) {
      let blankNumber = Math.floor(Math.random() * (words.length - 0));
      if (randomBlankNumbers.includes(blankNumber)) {
        randomBlankNumbers.push(Math.floor(Math.random() * (words.length - 0)));
      } else {
        randomBlankNumbers.push(blankNumber);
      }
    }
    setBlankNumbers(randomBlankNumbers);
  };

  if (id <= 5 && blankNumbers.length < 5) {
    setRandom(5);
  } else if (id > 5 && id <= 10 && blankNumbers.length < 8) {
    setRandom(8);
  } else if (id > 10 && blankNumbers.length < 10) {
    setRandom(10);
  }

  for (let i = 0; i < words.length; i++) {
    if (i % 2 != 0) {
      blanks.push(words[i]);
    } else {
      blanks.push("____");
    }
  }
  for (let i = 0; i < words.length; i++) {
    if (i % 2 == 0) {
      answers.push({ id: i, value: words[i] });
    }
  }

  useEffect(() => {
    const localData = localStorage.getItem("userInfo");
    const parseData = JSON.parse(localData);
    const isAlreadyAvailable = parseData?.lessons?.find(
      (item) => item.id == id
    );
    const spread =
      isAlreadyAvailable?.ansList.length > 0
        ? [...isAlreadyAvailable.ansList]
        : [];
    setAnsList(spread);
  }, [id]);

  // console.log(ansList);

  const correctAmount = () => {
    let amount = 0;
    words.forEach((_, indx) => {
      ansList.some((item) => {
        if (item.blankNo == indx) {
          if (item.ansNo == indx) {
            amount += 1;
          } else {
            null;
          }
        } else {
          null;
        }
      });
    });

    return amount;
  };

  const wrongAmount = () => {
    let amount = 0;
    words.forEach((_, indx) => {
      ansList.some((item) => {
        if (item.blankNo == indx) {
          if (item.ansNo == indx) {
            null;
          } else {
            amount += 1;
          }
        } else {
          null;
        }
      });
    });

    return amount;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="border-solid border-2 border-sky-500 text-center m-10 p-4">
        <div className="flex flex-wrap">
          {words.map((item, indx) => (
            <Fragment key={`indx${indx}`}>
              {ansList.filter((ans) => ans.blankNo == indx)[0]?.blankNo !=
              undefined ? (
                <h2
                  className={`mx-1 ${
                    ansList.some((item) => {
                      if (item.blankNo == indx) {
                        if (item.ansNo == indx) {
                          return true;
                        } else {
                          return false;
                        }
                      } else {
                        return false;
                      }
                    })
                      ? "text-green-500"
                      : "text-red-500 line-through"
                  }`}
                >
                  {words[ansList.find((ans) => ans.blankNo == indx)?.ansNo]}
                </h2>
              ) : blankNumbers.includes(indx) ? (
                <button
                  onClick={() => {
                    setSelectedBlank(indx);
                  }}
                  className={
                    selectedBlank == indx
                      ? "text-green-700 mx-1"
                      : "text-black mx-1"
                  }
                >
                  ____
                </button>
              ) : (
                <h2 className="mx-1">{item}</h2>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="max-w-lg mx-auto border-solid border-2 border-sky-500 text-center m-10 grid grid-cols-4 justify-center gap-3 p-5">
        {blankNumbers.map((arrayID, indx) => (
          <BlanksCard
            setAnsList={setAnsList}
            ansList={ansList}
            setSelectedAns={setSelectedAns}
            key={`arrayID${indx}`}
            arrayID={{ id: arrayID, value: words[arrayID] }}
            selectedAns={selectedAns}
            selectedBlank={selectedBlank}
            setSelectedBlank={setSelectedBlank}
            id={id}
          ></BlanksCard>
        ))}
      </div>
      <div className="max-w-lg mx-auto border-solid border-2 border-sky-500 mb-4 pt-2">
        <p className="text-center font-extrabold">Results: </p>
        <div className="flex justify-center my-3">
          <span className="text-green-700 font-medium mr-2">Correct:</span>{" "}
          <span>{correctAmount()}</span>{" "}
          <span className="text-red-700 font-medium mx-2">Wrong:</span>{" "}
          <span>{wrongAmount()}</span>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center">
        <p className="text-red-700">
          **Please select a blank first and after that select a answer for that
          blank**
        </p>
        <div className="mt-3">
          <Link to="/root">
            <button className="btn btn-outline ">{lesson?.btn_back}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
