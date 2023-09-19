import PriceOption from "../PriceOption/PriceOption";

const PriceOoptions = () => {
    // Create an array to store gym objects
const gyms = [
    {
      "id": "gym001",
      "name": "Fitness World",
      "price": "50",
      "membership": "Basic Membership",
      "features": ["Cardio Equipment", "Strength Training", "Group Classes"],
     
    },
    {
      "id": "gym002",
      "name": "GymPro",
      "price": "60",
      "membership": "Premium Membership",
      "features": ["24/7 Access", "Personal Trainers", "Sauna"],
      
    },
    {
      "id": "gym003",
      "name": "Yoga Haven",
      "price": "45",
      "membership": "Standard Membership",
      "features": ["Yoga Classes", "Meditation Sessions", "Holistic Wellness"]
      
    }
  ];
  
    return (
        <div>
           <h1 className="text-5xl font-bold text-center mt-8">Best price in the town</h1>
           <div className="flex gap-5 justify-center mt-10">
           {
            gyms.map(gym => <PriceOption key={gym.id} gym={gym}></PriceOption>)
           }
           </div>
        </div>
    );
};

export default PriceOoptions;