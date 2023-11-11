

const ParasCard = ({aPara}) => {
    const {para, chinese} = aPara;
    console.log(aPara)
    return (
        <div className="border-solid border-2 border-green-500 p-5">
            <p className="mb-5">
                {para}
            </p>
            <p>
                {chinese}
            </p>
        </div>
    );
};

export default ParasCard;