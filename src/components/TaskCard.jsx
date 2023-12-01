import { useLoaderData, useParams } from "react-router-dom";
import BlanksCard from "./BlanksCard";


const TaskCard = () => {
    const paras = useLoaderData();
    const { id } = useParams();
    const lesson = paras?.find((para) => para.id == id);
    const words = lesson.para.split(' ');
    let blanks = "";
    let answers = "";
    for (let i = 0 ; i < words.length; i++){
        if(i%2 != 0){
            blanks += words[i]
        }else{
            blanks+=" ____ "
        }
        
    }
    for (let i = 0 ; i < words.length; i++){
        if(i%2 == 0){
            answers += words[i]
        }else{
            answers+= " "
        }
        
    }

    let blanksAns = answers.split(" ")

    const arrayWithIDs = blanksAns.map((value, index) => {
        return { id: index + 1, value }; // IDs start from 1
    });
    
    console.log(arrayWithIDs)

    
    let storeBlanks = "";
    let answerBlanks = blanks.split(" ");
for (let i = 0 ; i < answerBlanks.length; i++){
        if(i%2 != 0){
        storeBlanks+= answerBlanks[i]
        }else{
            storeBlanks+=" "
        }
        
    }
    let giveIdBlanks = storeBlanks.split(" ");
    
    const arrayWithIdBlanks = giveIdBlanks.map((value, index) => {
        return { id: index + 1, value }; 
    });
    console.log(arrayWithIdBlanks)



    
    return (
        <div>
            <div className="border-solid border-2 border-sky-500 text-center m-10">
            <h2 className="text-3xl p-10 break-words">{ blanks }</h2>
        </div>
        <div className="max-w-lg mx-auto border-solid border-2 border-sky-500 text-center m-10 grid grid-cols-4 justify-center gap-3 p-5">
            {
                arrayWithIDs.map(arrayID => <BlanksCard key={arrayID.id} arrayID={arrayID}></BlanksCard>)
            }
            
            
        </div>
        </div>
    );
};

export default TaskCard;