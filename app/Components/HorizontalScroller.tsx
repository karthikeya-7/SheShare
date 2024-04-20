
const HorizontalCardScroller: React.FC = () => {
    return (
      <div className="overflow-x-auto whitespace-no-wrap">
        <div className="flex">
          <div className="w-64 h-48 bg-gray-200 rounded-lg shadow-md mx-4">
            Card 1
          </div>
          <div className="w-64 h-48 bg-gray-200 rounded-lg shadow-md mx-4">
            Card 2
          </div>
          <div className="w-64 h-48 bg-gray-200 rounded-lg shadow-md mx-4">
            Card 3
          </div>
          {/* Add more cards here */}
        </div>
      </div>
    );
  };
  
  export default HorizontalCardScroller;
  