import axios from "axios";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";


const Phones = () => {
    const [phone, setPhone]=useState([])
    const [loading, setLoading] = useState(true)
    const [load, setLoad] = useState(true)

    console.log(phone)
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=> res.json())
        // .then(data => setPhone(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const fakePhoneData = phoneData.map(phone =>{
                const obj ={
                    name: phone.phone_name,
                    price: parseFloat(phone.slug.split('-')[1])
                }
                return obj;
            })
            setLoading(false)
            setPhone(fakePhoneData)
        })
    },[])
   
    return (
        <div className="mb-32 ml-24 mt-16">
            {loading && <Audio  height = "80"
                width = "80"
                radius = "9"
                color = 'green'
                ariaLabel = 'three-dots-loading'     
                wrapperStyle
                wrapperClass>
                
                </Audio>
            }
            <h3 className={`${load?'text-4xl':''}`}>Phone : {phone.length}</h3>
            <button onClick={()=> setLoad(!load)}>Text big</button>

            <BarChart height={300} width={1200} data={phone}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={'price'}></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={"price"} fill="blue"></Bar>
            </BarChart>
        </div>
    );
};

export default Phones;