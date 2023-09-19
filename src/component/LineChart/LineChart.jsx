import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentResult = [
        {
          "student_id": 1,
          "name": "John",
          "math_score": 8,
          "physics_score": 75,
          "chemistry_score": 88
        },
        {
          "student_id": 2,
          "name": "Sarah",
          "math_score": 92,
          "physics_score": 89,
          "chemistry_score": 78
        },
        {
          "student_id": 3,
          "name": "Michael",
          "math_score": 78,
          "physics_score": 80,
          "chemistry_score": 92
        },
        {
          "student_id": 4,
          "name": "Emily",
          "math_score": 95,
          "physics_score": 50,
          "chemistry_score": 91
        },
        {
          "student_id": 5,
          "name": "David",
          "math_score": 88,
          "physics_score": 76,
          "chemistry_score": 85
        },
        {
          "student_id": 6,
          "name": "Sophia",
          "math_score": 91,
          "physics_score": 90,
          "chemistry_score": 40
        },
        {
          "student_id": 7,
          "name": "Daniel",
          "math_score": 40,
          "physics_score": 84,
          "chemistry_score": 82
        },
        {
          "student_id": 8,
          "name": "Olivia",
          "math_score": 89,
          "physics_score": 88,
          "chemistry_score": 90
        },
        {
          "student_id": 9,
          "name": "Liam",
          "math_score": 67,
          "physics_score": 60,
          "chemistry_score": 87
        },
        {
          "student_id": 10,
          "name": "Emma",
          "math_score": 94,
          "physics_score": 91,
          "chemistry_score": 93
        }
      ]
    return (
        <div className='mt-10 ml-24 mb-11'>
            <LChart className='bg-opacity-30 bg-lime-900' height={200} width={500} data={studentResult}>
            <XAxis dataKey={"student_id"}></XAxis>
            <YAxis dataKey={"math_score"}></YAxis>
            <Line type={"monotone"} dataKey={"math_score"} stroke='red'></Line>
            <Line type={"monotone"} dataKey={"physics_score"} stroke='blue'></Line>
            <Line type={"monotone"} dataKey={"chemistry_score"} stroke='green'></Line>
            </LChart>
            <ul>
                <li>Math: <span className='w-2o h-2o rounded-full bg-red-500'> </span></li>
            </ul>
        </div>
    );
};

export default LineChart;