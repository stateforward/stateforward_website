const RoadmapItem = ({ state, title, description }) => {
    return (
        <div className="flex items-start mb-2">
            <div className={`flex-shrink-0 w-6 h-6 mt-1 rounded-full ${
                state === "completed" ? 'bg-green-500' : state === "in-progress" ? 'bg-yellow-500' : 'bg-gray-400'
            }`}></div>
            <div className="ml-3">
                <h4 className={`text-md font-semibold ${state === "completed" ? 'text-white line-through' : 'text-white'}`}>{title}</h4>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
        </div>
    );
};

export default RoadmapItem;