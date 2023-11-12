const RoadmapItem = ({ completed, title, description }) => {
    return (
      <div className="flex items-start mb-2">
        <div className={`flex-shrink-0 w-6 h-6 mt-1 rounded-full ${completed ? 'bg-green-500' : 'bg-gray-400'}`}></div>
        <div className="ml-3">
          <h4 className={`text-md font-semibold ${completed ? 'text-white line-through' : 'text-white'}`}>{title}</h4>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    );
  };
  
  export default RoadmapItem;