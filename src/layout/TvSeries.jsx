import { useEffect, useState } from "react";
import { getTVSeriesList } from "../api";
import { Card, Flex, Typography } from 'antd';
const { Text, Title } = Typography;


const TvSeries = () => {
    const [seriesList, setTvSeries] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getTVSeriesList().then((data) => {
            setTvSeries(data.results);
        });
        setLoading(false);
    }, []);


    return (
        <>
            <div className="mx-auto">
                {/* Title */}
                <div style={{ padding: '1rem', marginLeft: '5.5rem' }}>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Tv Series</h2>
                </div>
                <Flex wrap gap={50} align="start" justify="center">
                    {seriesList.map((values) => (
                        <div key={values.id} className="group relative">
                            <Card
                                hoverable
                                bordered
                                // loading={loading}
                                style={{
                                    width: 300,
                                    height: 500,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                                bodyStyle={{
                                    padding: '0px 0px 0px 0px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexGrow: 1
                                }}
                                cover={
                                    <div style={{ width: '100%', height: 300, objectFit: 'cover', backgroundColor: 'rgb(240, 240, 240)' }}>
                                        <img
                                            alt={values.imageAlt}
                                            src={`https://image.tmdb.org/t/p/w500/${values.poster_path}`}
                                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        />
                                    </div>
                                }
                            >
                                <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                                    <Title level={4} style={{ textAlign: 'center' }}>{values.name}</Title>
                                    {/* Release Date */}
                                    <Text style={{ textAlign: 'center' }}>{"Release Date: " + (values.release_date ? values.release_date : "N/A")}</Text>
                                    <Text style={{ textAlign: 'center' }}>{"Rating: " + values.vote_average}</Text>
                                    {/* Butoon Watch Now */}
                                    <a href="#" className="block mt-auto rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600">Watch Now</a>
                                </div>
                            </Card>
                        </div >
                    ))}
                </Flex >
            </div >
        </>
    )
}

export default TvSeries;