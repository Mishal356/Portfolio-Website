import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutPage = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        axios.get('/api/team')
            .then(res => setTeam(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <nav>Menu</nav>
            <section>About Section</section>
            <section>
                {team.map(member => (
                    <div key={member._id}>
                        <h2>{member.name}</h2>
                        <p>{member.role}</p>
                    </div>
                ))}
            </section>
            <footer>Footer</footer>
        </div>
    );
};

export default AboutPage;
