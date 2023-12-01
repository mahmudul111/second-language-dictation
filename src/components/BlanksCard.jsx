


const BlanksCard = (arrayID) => {
    // const [blanks, setBlanks] = useState([]);
    // const {id} = useParams()
    

    // useEffect(()=>{
    //     fetch('/fake.json')
    //     .then(res => res.json())
    //     .then(data => setBlanks(data))
    // },[])

    // const dynamicBlanks = blanks.find((blank) => blank.id == id);

    // console.log(dynamicBlanks)

    

    return (
        <div >
            <button className="btn">{arrayID.arrayID.value}</button>
        </div>
    );
};

export default BlanksCard;