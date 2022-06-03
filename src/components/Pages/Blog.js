
import React, { useEffect, useState } from "react";
import Card from './Card'


const Blog = () => {

    const herosNumbers = 10;
    let numbers = [];
    const [Data, setData] = useState([]);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }


    for (let i = 0; i < herosNumbers; i++) {
        numbers[i] = getRandomInt(1, 826);
    }



    useEffect(() => {

        const getData = async () => {
            const url = `https://rickandmortyapi.com/api/character/${numbers}`

            try {
                const resp = await fetch(url);
                const data = await resp.json();

                setData(data);
            } catch (err) {
                console.error(err);
            }
        }

        getData();

    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    return (

        <div className="Wrapper-blog">
            {
                Data.map(data => {
                    return (
                        <Card key={data.key} data={data} />


                    )
                })
            }

        </div>
    );
};



export default Blog;