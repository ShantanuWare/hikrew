const StatusTimeline = ({ data }) => {
  return (
    <div className="container">
      {console.log(data)}
      <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
        {data.map((item, index) => (
          <div className="flex md:contents" key={index}>
            <div className="col-start-0 col-end-2 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                <i className="fas fa-check-circle text-white"></i>
              </div>
            </div>
            <div className="bg-green-500 col-start-2 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
              <h3 className="font-semibold text-lg mb-1">{item.day}</h3>
              <ul className="leading-tight text-justify">
                {item.activities.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusTimeline;
