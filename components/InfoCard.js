const InfoCard = ({ title, text }) => {
    return (
      <div className="card bg-black border border-base-300 m-4">
        <div className="card-body">
          <h2 className="text-md font-semibold text-white">{title}</h2>
          <p className="text-sm text-gray-500">{text}</p>
        </div>
      </div>
    );
  };
  
  export default InfoCard;