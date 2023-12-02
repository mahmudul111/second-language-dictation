import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

/* eslint-disable react/prop-types */
const BlanksCard = ({
  arrayID,
  setSelectedAns,
  selectedAns,
  setAnsList,
  ansList,
  selectedBlank,
  setSelectedBlank,
  id,
}) => {
  const { user } = useContext(AuthContext);

  // const [blanks, setBlanks] = useState([]);
  // const {id} = useParams()

  // useEffect(()=>{
  //     fetch('/fake.json')
  //     .then(res => res.json())
  //     .then(data => setBlanks(data))
  // },[])

  // const dynamicBlanks = blanks.find((blank) => blank.id == id);

  //   console.log(user);
  //   console.log(ansList);

  return (
    <div>
      <button
        className={`btn mx-2 normal-case ${
          selectedAns == arrayID.id ? "bg-green-700 text-white" : "bg-gray-200"
        } ${selectedAns == arrayID.id && "hover:bg-green-700 text-white"} ${
          ansList.find((ans) => ans.ansNo === arrayID.id) &&
          "hover:bg-green-700 text-white"
        }`}
        disabled={ansList.some((item) => item.ansNo === arrayID.id)}
        onClick={() => {
          if (selectedBlank == null) {
            alert("select a blank first");
          } else {
            setSelectedAns(arrayID.id);

            let list = [
              ...ansList,
              { blankNo: selectedBlank, ansNo: arrayID.id },
            ];
            setAnsList(list);
            setSelectedBlank(null);

            if (user?.email) {
              const localData = localStorage.getItem("userInfo");
              const parseData = JSON.parse(localData);
              const isAlreadyAvailable = parseData?.lessons?.find(
                (item) => item.id === id
              );
              const othersLessons = parseData?.lessons?.filter(
                (item) => item.id !== id
              );

              if (isAlreadyAvailable?.id) {
                const userInfo = {
                  email: user?.email,
                  lessons: [
                    ...othersLessons,
                    {
                      id: isAlreadyAvailable?.id,
                      ansList: [
                        ...isAlreadyAvailable.ansList,
                        ...ansList,
                        { blankNo: selectedBlank, ansNo: arrayID.id },
                      ],
                    },
                  ],
                };
                //
                localStorage.setItem("userInfo", JSON.stringify(userInfo));
              } else {
                const userInfo = {
                  email: user?.email,
                  lessons: othersLessons
                    ? [
                        ...othersLessons,
                        {
                          id: id,
                          ansList,
                        },
                      ]
                    : [
                        {
                          id: id,
                          ansList,
                        },
                      ],
                };
                //
                localStorage.setItem("userInfo", JSON.stringify(userInfo));
              }
            }
          }
        }}
      >
        {arrayID.value}
      </button>
    </div>
  );
};

export default BlanksCard;
