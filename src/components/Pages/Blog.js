
import React, { useEffect, useState } from "react";
import Card from './Card'


const Blog = () => {

    const herosNumbers = 10;
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let numbers = [];
    for (let i = 0; i < herosNumbers; i++) {
        numbers[i] = getRandomInt(1, 826);
    }
    const url = `https://rickandmortyapi.com/api/character/${numbers}`

    const [Data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {


            try {
                const resp = await fetch(url);
                const data = await resp.json();

                setData(data);
            } catch (err) {
                console.error(err);
            }
        }

        getData();

    }, []);


    const cards = Data.map(item => {
        <Card
            key={item.id}
            name={item.name}
            status={item.status}
            gender={item.gender}
            img={item.image}


        />
    })

    return (

        <div className="Wrapper-blog">
            {
                Data.map(data => {
                    return ([
                        <Card key={data.key} data={data} />,

                    ]
                    )
                })
            }

        </div>
    );
};



export default Blog;