import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServicePage = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('/api/services')
            .then(res => setServices(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <nav>Menu</nav>
            <section>
                {services.map(service => (
                    <div key={service._id}>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </section>
            <footer>Footer</footer>
        </div>
    );
};

export default ServicePage;
